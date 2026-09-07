import monogramStrokes from '../data/monogram.json';
import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  paused?: boolean;
  className?: string;
}

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  phase: number;
  luminous: boolean;
  dx: number;
  dy: number;
  vx: number;
  vy: number;
  screenX: number;
  screenY: number;
}

const COLORS = [
  'rgba(114, 155, 206, 0.24)',
  'rgba(145, 187, 229, 0.38)',
  'rgba(177, 207, 243, 0.55)',
  'rgba(208, 229, 252, 0.72)',
  'rgba(245, 249, 255, 0.96)',
];

function makeRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

type Point = readonly [number, number];
type Stroke = readonly [Point, Point, Point, Point];

// The same open, geometric DB letterforms are used in the favicon.
const MONOGRAM: readonly Stroke[] = monogramStrokes.map(([a, b, c, d]) => [
  [a[0], a[1]],
  [b[0], b[1]],
  [c[0], c[1]],
  [d[0], d[1]],
]);

function makeParticles(count: number) {
  const random = makeRandom(8192);
  const gaussian = () =>
    Math.sqrt(-2 * Math.log(Math.max(random(), 0.00001))) *
    Math.cos(random() * Math.PI * 2);
  const groups: Star[][] = COLORS.map(() => []);
  for (let index = 0; index < count; index += 1) {
    const lettering = index < count * 0.79;
    let x: number;
    let y: number;
    let z: number;
    if (lettering) {
      // Weight the curved strokes by length, giving the lettering even density.
      const strokeIndex = [0, 1, 1, 2, 3, 4][Math.floor(random() * 6)];
      const [a, b, c, d] = MONOGRAM[strokeIndex];
      const t = random();
      const u = 1 - t;
      const scatter = random() < 0.82 ? 0.014 : 0.045;
      x =
        u ** 3 * a[0] +
        3 * u * u * t * b[0] +
        3 * u * t * t * c[0] +
        t ** 3 * d[0] +
        gaussian() * scatter;
      y =
        u ** 3 * a[1] +
        3 * u * u * t * b[1] +
        3 * u * t * t * c[1] +
        t ** 3 * d[1] +
        gaussian() * scatter;
      z = gaussian() * 0.045;
    } else {
      // Inclined orbital dust surrounds the initials without obscuring them.
      const angle = random() * Math.PI * 2;
      const orbit = 0.84 + random() * 0.35;
      const spread = gaussian() * 0.016;
      x = Math.cos(angle) * orbit;
      y = Math.sin(angle) * orbit * 0.29 - x * 0.35 + spread;
      z = Math.sin(angle) * 0.22 + gaussian() * 0.025;
    }
    const color = Math.min(4, Math.floor(Math.pow(random(), 1.65) * 5));
    groups[lettering ? color : Math.min(color, 2)].push({
      x,
      y,
      z,
      size: 0.55 + random() * (color === 4 ? 1.0 : 0.65),
      phase: random() * Math.PI * 2,
      luminous: lettering && random() > 0.978,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0,
      screenX: 0,
      screenY: 0,
    });
  }
  return groups;
}

function makeBloom() {
  const sprite = document.createElement('canvas');
  sprite.width = 64;
  sprite.height = 64;
  const context = sprite.getContext('2d');
  if (context) {
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.07, 'rgba(239, 248, 255, 0.95)');
    gradient.addColorStop(0.18, 'rgba(170, 212, 255, 0.48)');
    gradient.addColorStop(0.45, 'rgba(120, 179, 252, 0.1)');
    gradient.addColorStop(1, 'rgba(120, 179, 252, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
  }
  return sprite;
}

const AnimatedBackground = ({
  paused = false,
  className = '',
}: AnimatedBackgroundProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(paused);
  const updatePlaybackRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    pausedRef.current = paused;
    updatePlaybackRef.current?.();
  }, [paused]);

  useEffect(() => {
    const scene = sceneRef.current;
    const canvas = canvasRef.current;
    if (!scene || !canvas) return;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    const random = makeRandom(451);
    const fieldStars = Array.from({ length: 160 }, () => ({
      x: random(),
      y: random(),
      radius: 0.3 + Math.pow(random(), 3) * 1.15,
      opacity: 0.12 + random() * 0.5,
      phase: random() * Math.PI * 2,
    }));
    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    let reducedMotion = motionPreference.matches;
    let visible = true;
    let width = 0;
    let height = 0;
    let radius = 0;
    let groups: Star[][] = [];
    let mobileComposition: boolean | null = null;
    let animationFrame = 0;
    let previousTime = 0;
    let elapsed = 0;
    let viewX = 0;
    let viewY = 0;
    const pointer = {
      active: false,
      clientX: 0,
      clientY: 0,
      lastX: 0,
      lastY: 0,
      moved: false,
    };
    const bloom = makeBloom();

    const draw = (delta = 0) => {
      context.clearRect(0, 0, width, height);
      for (const star of fieldStars) {
        context.globalAlpha =
          star.opacity *
          (reducedMotion
            ? 1
            : 0.82 + Math.sin(elapsed * 0.48 + star.phase) * 0.18);
        context.fillStyle = '#dceaff';
        context.beginPath();
        context.arc(
          star.x * width + viewX * 3,
          star.y * height + viewY * 3,
          star.radius,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
      context.globalAlpha = 1;

      // Client coordinates are remapped every frame so scrolling cannot leave a
      // phantom cursor behind in the hero. A swept segment catches fast gestures.
      const rect = scene.getBoundingClientRect();
      const px = pointer.clientX - rect.left;
      const py = pointer.clientY - rect.top;
      const inside =
        pointer.active && px >= 0 && px <= width && py >= 0 && py <= height;
      const startX = pointer.moved ? pointer.lastX - rect.left : px;
      const startY = pointer.moved ? pointer.lastY - rect.top : py;
      const sweepX = px - startX;
      const sweepY = py - startY;
      const sweepLength = sweepX * sweepX + sweepY * sweepY;
      const interactionRadius = mobileComposition ? 83 : 115;
      const targetViewX = inside ? (px / width - 0.5) * 2 : 0;
      const targetViewY = inside ? (py / height - 0.5) * 2 : 0;
      const easing = 1 - Math.exp(-delta * 3);
      viewX += (targetViewX - viewX) * easing;
      viewY += (targetViewY - viewY) * easing;
      const centerX = width * (mobileComposition ? 0.5 : 0.7) + viewX * 7;
      const centerY = height * (mobileComposition ? 0.27 : 0.43) + viewY * 5;
      const yaw = reducedMotion
        ? -0.08
        : -0.08 + Math.sin(elapsed * 0.12) * 0.06 + viewX * 0.045;
      const pitch = reducedMotion
        ? 0.04
        : 0.04 + Math.sin(elapsed * 0.09) * 0.035 + viewY * 0.025;
      const cosine = Math.cos(yaw);
      const sine = Math.sin(yaw);

      // A broad, restrained glow gives the sculpture depth without a hot core.
      const haze = context.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 1.05,
      );
      haze.addColorStop(0, 'rgba(80, 134, 210, 0.055)');
      haze.addColorStop(0.55, 'rgba(64, 113, 185, 0.025)');
      haze.addColorStop(1, 'rgba(64, 113, 185, 0)');
      context.fillStyle = haze;
      context.fillRect(
        centerX - radius * 1.05,
        centerY - radius * 1.05,
        radius * 2.1,
        radius * 2.1,
      );

      groups.forEach((stars, color) => {
        context.fillStyle = COLORS[color];
        context.beginPath();
        for (const star of stars) {
          const depth = 1 + star.z * 0.16;
          const baseX =
            centerX + (star.x * cosine + star.z * sine) * radius * depth;
          const baseY = centerY + (star.y + star.z * pitch) * radius * depth;
          let forceX = 0;
          let forceY = 0;
          if (inside && delta > 0) {
            const sx = baseX + star.dx;
            const sy = baseY + star.dy;
            const t =
              sweepLength > 0
                ? Math.max(
                    0,
                    Math.min(
                      1,
                      ((sx - startX) * sweepX + (sy - startY) * sweepY) /
                        sweepLength,
                    ),
                  )
                : 1;
            const offsetX = sx - (startX + sweepX * t);
            const offsetY = sy - (startY + sweepY * t);
            const distance = Math.hypot(offsetX, offsetY);
            if (distance < interactionRadius) {
              const falloff = (1 - distance / interactionRadius) ** 2;
              const nx =
                distance > 0.1 ? offsetX / distance : Math.cos(star.phase);
              const ny =
                distance > 0.1 ? offsetY / distance : Math.sin(star.phase);
              forceX = (nx - ny * 0.38) * falloff * 6400;
              forceY = (ny + nx * 0.38) * falloff * 6400;
              // Movement transfers momentum, visibly pulling stars along a pass.
              star.vx += Math.max(-50, Math.min(50, sweepX)) * falloff * 1.9;
              star.vy += Math.max(-50, Math.min(50, sweepY)) * falloff * 1.9;
            }
          }
          // A damped spring returns every star to its own three-dimensional home.
          // Small substeps keep the response stable after a slow animation frame.
          const steps = Math.max(1, Math.ceil(delta / (1 / 120)));
          const step = delta / steps;
          for (let i = 0; i < steps; i += 1) {
            star.vx += (forceX - star.dx * 24 - star.vx * 6.4) * step;
            star.vy += (forceY - star.dy * 24 - star.vy * 6.4) * step;
            star.dx += star.vx * step;
            star.dy += star.vy * step;
          }
          star.screenX = baseX + star.dx;
          star.screenY = baseY + star.dy;
          const size = star.size * (mobileComposition ? 0.8 : 1) * depth;
          context.rect(star.screenX, star.screenY, size, size);
        }
        context.fill();
      });
      for (const stars of groups) {
        for (const star of stars) {
          if (!star.luminous) continue;
          const size = (10 + star.size * 7) * (mobileComposition ? 0.8 : 1);
          context.globalAlpha = reducedMotion
            ? 0.8
            : 0.72 + Math.sin(elapsed * 0.7 + star.phase) * 0.22;
          context.drawImage(
            bloom,
            star.screenX - size / 2,
            star.screenY - size / 2,
            size,
            size,
          );
        }
      }
      context.globalAlpha = 1;
      pointer.lastX = pointer.clientX;
      pointer.lastY = pointer.clientY;
      pointer.moved = false;
    };

    const canAnimate = () =>
      !pausedRef.current && !reducedMotion && visible && !document.hidden;
    const animate = (time: number) => {
      animationFrame = 0;
      if (!canAnimate()) return;
      const delta = previousTime
        ? Math.min((time - previousTime) / 1000, 0.04)
        : 0;
      previousTime = time;
      elapsed += delta;
      draw(delta);
      animationFrame = window.requestAnimationFrame(animate);
    };
    const updatePlayback = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      previousTime = 0;
      pointer.active = false;
      pointer.moved = false;
      if (canAnimate()) animationFrame = window.requestAnimationFrame(animate);
    };
    updatePlaybackRef.current = updatePlayback;

    const resize = () => {
      const nextWidth = scene.clientWidth;
      const nextHeight = scene.clientHeight;
      if (!nextWidth || !nextHeight) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (
        width === nextWidth &&
        height === nextHeight &&
        canvas.width === Math.round(nextWidth * dpr)
      )
        return;
      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const nextMobileComposition = width <= 760;
      radius = nextMobileComposition
        ? Math.min(width * 0.6, 340)
        : Math.min(width * 0.33, height * 0.55, 600);
      if (nextMobileComposition !== mobileComposition) {
        mobileComposition = nextMobileComposition;
        groups = makeParticles(mobileComposition ? 4200 : 6200);
      }
      draw();
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!canAnimate()) return;
      if (!pointer.active) {
        pointer.lastX = event.clientX;
        pointer.lastY = event.clientY;
      }
      pointer.active = true;
      pointer.clientX = event.clientX;
      pointer.clientY = event.clientY;
      pointer.moved = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.moved = false;
    };
    const onPointerEnd = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') onPointerLeave();
    };
    const onMotionChange = () => {
      reducedMotion = motionPreference.matches;
      if (reducedMotion) {
        elapsed = 0;
        viewX = 0;
        viewY = 0;
        pointer.active = false;
        for (const stars of groups) {
          for (const star of stars) {
            star.dx = 0;
            star.dy = 0;
            star.vx = 0;
            star.vy = 0;
          }
        }
        draw();
      }
      updatePlayback();
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    });
    resizeObserver.observe(scene);
    intersectionObserver.observe(scene);
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerEnd, { passive: true });
    window.addEventListener('pointercancel', onPointerLeave, { passive: true });
    window.addEventListener('blur', onPointerLeave);
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', updatePlayback);
    motionPreference.addEventListener('change', onMotionChange);
    resize();
    updatePlayback();

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerMove);
      window.removeEventListener('pointerup', onPointerEnd);
      window.removeEventListener('pointercancel', onPointerLeave);
      window.removeEventListener('blur', onPointerLeave);
      document.documentElement.removeEventListener(
        'pointerleave',
        onPointerLeave,
      );
      document.removeEventListener('visibilitychange', updatePlayback);
      motionPreference.removeEventListener('change', onMotionChange);
      updatePlaybackRef.current = null;
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className={`galaxy-scene ${className}`.trim()}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default AnimatedBackground;
