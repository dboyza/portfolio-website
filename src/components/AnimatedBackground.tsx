import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  paused?: boolean;
  className?: string;
}

interface GalaxyParticle {
  x: number;
  y: number;
  z: number;
  size: number;
}

interface LuminousStar extends GalaxyParticle {
  warm: boolean;
  phase: number;
}

const COLORS = [
  'rgba(108, 154, 205, 0.18)',
  'rgba(133, 180, 222, 0.28)',
  'rgba(171, 209, 240, 0.38)',
  'rgba(193, 223, 248, 0.52)',
  'rgba(225, 239, 255, 0.74)',
  'rgba(249, 250, 255, 0.95)',
  'rgba(215, 200, 180, 0.38)',
];

// A fixed seed keeps the composition stable through resizes and React remounts.
function makeRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function makeParticles(count: number) {
  const random = makeRandom(8192);
  const gaussian = () =>
    Math.sqrt(-2 * Math.log(Math.max(random(), 0.00001))) *
    Math.cos(random() * Math.PI * 2);
  const groups: GalaxyParticle[][] = COLORS.map(() => []);
  const luminousStars: LuminousStar[] = [];

  for (let index = 0; index < count; index += 1) {
    const distribution = random();
    const core = distribution < 0.13;
    const radius = core ? Math.abs(gaussian()) * 0.13 : Math.pow(random(), 0.7);
    const arm = Math.floor(random() * 3);
    const angle =
      distribution > 0.94 || core
        ? random() * Math.PI * 2
        : (arm * Math.PI * 2) / 3 +
          radius * 5.2 +
          gaussian() * (0.055 + radius * 0.11);
    const brightness = random();
    const color =
      random() > 0.963
        ? 6
        : Math.min(5, Math.floor(Math.pow(brightness, 2.1) * 6));
    const particle = {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      z: gaussian() * (core ? 0.05 : 0.007 + (1 - radius) * 0.007),
      size:
        color > 3 && color < 6 ? 0.75 + random() * 0.85 : 0.55 + random() * 0.8,
    };
    groups[color].push(particle);
    if (!core && distribution <= 0.94 && random() > 0.982) {
      luminousStars.push({
        ...particle,
        size: 1.3 + Math.pow(random(), 3) * 2.3,
        warm: random() > 0.84,
        phase: random() * Math.PI * 2,
      });
    }
  }

  return { groups, luminousStars };
}

function makeBloom(warm: boolean) {
  const sprite = document.createElement('canvas');
  sprite.width = 64;
  sprite.height = 64;
  const context = sprite.getContext('2d');
  if (context) {
    const color = warm ? '255, 211, 159' : '168, 212, 255';
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.08, 'rgba(248, 251, 255, 0.95)');
    gradient.addColorStop(0.18, `rgba(${color}, 0.5)`);
    gradient.addColorStop(0.4, `rgba(${color}, 0.12)`);
    gradient.addColorStop(1, `rgba(${color}, 0)`);
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
    const fieldStars = Array.from({ length: 180 }, () => ({
      x: random(),
      y: random(),
      radius: 0.3 + Math.pow(random(), 3) * 1.15,
      opacity: 0.15 + random() * 0.55,
      phase: random() * Math.PI * 2,
    }));
    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    const pointerPreference = window.matchMedia('(pointer: fine)');
    let reducedMotion = motionPreference.matches;
    let visible = true;
    let width = 0;
    let height = 0;
    let radius = 0;
    let groups: GalaxyParticle[][] = [];
    let luminousStars: LuminousStar[] = [];
    let mobileComposition: boolean | null = null;
    let animationFrame = 0;
    let previousTime = 0;
    let elapsed = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    const coolBloom = makeBloom(false);
    const warmBloom = makeBloom(true);

    const halo = document.createElement('canvas');
    halo.width = 256;
    halo.height = 256;
    const haloContext = halo.getContext('2d');
    if (haloContext) {
      const gradient = haloContext.createRadialGradient(
        128,
        128,
        0,
        128,
        128,
        128,
      );
      gradient.addColorStop(0, 'rgba(255, 245, 224, 0.90)');
      gradient.addColorStop(0.08, 'rgba(245, 232, 215, 0.48)');
      gradient.addColorStop(0.3, 'rgba(144, 184, 231, 0.12)');
      gradient.addColorStop(0.65, 'rgba(73, 115, 175, 0.025)');
      gradient.addColorStop(1, 'rgba(73, 115, 175, 0)');
      haloContext.fillStyle = gradient;
      haloContext.fillRect(0, 0, 256, 256);
    }

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (const star of fieldStars) {
        const twinkle = reducedMotion
          ? 1
          : 0.82 + Math.sin(elapsed * 0.48 + star.phase) * 0.18;
        context.globalAlpha = star.opacity * twinkle;
        context.fillStyle = '#dceaff';
        context.beginPath();
        context.arc(
          star.x * width + pointerX * 4,
          star.y * height + pointerY * 3,
          star.radius,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
      context.globalAlpha = 1;

      const centerX = width * (mobileComposition ? 0.5 : 0.7) + pointerX * 13;
      const centerY = height * (mobileComposition ? 0.27 : 0.43) + pointerY * 9;
      const rotation = elapsed * 0.017 + 0.3;
      const cosine = Math.cos(rotation);
      const sine = Math.sin(rotation);
      const tilt = 0.6 + pointerY * 0.018;

      context.save();
      context.translate(centerX, centerY);
      context.rotate(-0.37 + pointerX * 0.015);
      context.save();
      context.scale(1, tilt);
      context.drawImage(
        halo,
        -radius * 0.9,
        -radius * 0.9,
        radius * 1.8,
        radius * 1.8,
      );
      context.restore();

      // Batch tiny stars into a handful of paths, keeping the disk genuinely
      // three-dimensional without thousands of individual draw calls.
      groups.forEach((particles, color) => {
        context.fillStyle = COLORS[color];
        context.beginPath();
        for (const particle of particles) {
          const x = particle.x * cosine - particle.y * sine;
          const y = particle.x * sine + particle.y * cosine;
          const depth = 1 + y * 0.1;
          const screenX = x * radius * depth;
          const screenY = (y * tilt + particle.z) * radius;
          const size = particle.size * (mobileComposition ? 0.8 : 1) * depth;
          context.rect(screenX, screenY, size, size);
        }
        context.fill();
      });

      for (const star of luminousStars) {
        const x = star.x * cosine - star.y * sine;
        const y = star.x * sine + star.y * cosine;
        const depth = 1 + y * 0.1;
        const screenX = x * radius * depth;
        const screenY = (y * tilt + star.z) * radius;
        const size = star.size * 6 * (mobileComposition ? 0.8 : 1) * depth;
        context.globalAlpha = reducedMotion
          ? 0.9
          : 0.8 + Math.sin(elapsed * 0.65 + star.phase) * 0.2;
        context.drawImage(
          star.warm ? warmBloom : coolBloom,
          screenX - size / 2,
          screenY - size / 2,
          size,
          size,
        );
      }

      context.globalAlpha = 0.8;
      context.drawImage(
        halo,
        -radius * 0.2,
        -radius * 0.12,
        radius * 0.4,
        radius * 0.24,
      );
      context.restore();
    };

    const canAnimate = () =>
      !pausedRef.current && !reducedMotion && visible && !document.hidden;

    const animate = (time: number) => {
      animationFrame = 0;
      if (!canAnimate()) return;
      const delta = previousTime
        ? Math.min((time - previousTime) / 1000, 0.05)
        : 0;
      previousTime = time;
      elapsed += delta;
      const easing = 1 - Math.exp(-delta * 2.5);
      pointerX += (targetX - pointerX) * easing;
      pointerY += (targetY - pointerY) * easing;
      draw();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const updatePlayback = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      previousTime = 0;
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
        ? Math.min(370, Math.max(width * 0.67, 240))
        : Math.min(width * 0.37, height * 0.6, 650);
      if (nextMobileComposition !== mobileComposition) {
        mobileComposition = nextMobileComposition;
        ({ groups, luminousStars } = makeParticles(
          mobileComposition ? 7000 : 14000,
        ));
      }
      draw();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (
        reducedMotion ||
        pausedRef.current ||
        !visible ||
        !pointerPreference.matches
      )
        return;
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const onMotionChange = () => {
      reducedMotion = motionPreference.matches;
      if (reducedMotion) {
        pointerX = 0;
        pointerY = 0;
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
