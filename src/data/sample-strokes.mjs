// Sample by distance along the pen path, so small loops and long flourishes
// receive the same star density. This is shared by the canvas and share card.
export function createStrokeSampler(strokes) {
  const segments = [];
  let totalLength = 0;
  for (const [a, b, c, d] of strokes) {
    let previous = a;
    for (let step = 1; step <= 64; step += 1) {
      const t = step / 64;
      const u = 1 - t;
      const point = [0, 1].map(
        (axis) =>
          u ** 3 * a[axis] +
          3 * u * u * t * b[axis] +
          3 * u * t * t * c[axis] +
          t ** 3 * d[axis],
      );
      const length = Math.hypot(point[0] - previous[0], point[1] - previous[1]);
      if (length > 0) {
        segments.push({ a: previous, b: point, start: totalLength, length });
        totalLength += length;
      }
      previous = point;
    }
  }
  if (!segments.length) throw new Error('The monogram needs a nonzero pen path.');

  return (progress) => {
    const distance = Math.max(0, Math.min(1, progress)) * totalLength;
    let low = 0;
    let high = segments.length - 1;
    while (low < high) {
      const middle = (low + high) >>> 1;
      const segment = segments[middle];
      if (segment.start + segment.length < distance) low = middle + 1;
      else high = middle;
    }
    const { a, b, start, length } = segments[low];
    const t = (distance - start) / length;
    return {
      x: a[0] + (b[0] - a[0]) * t,
      y: a[1] + (b[1] - a[1]) * t,
      // Taller strokes carry more ink; horizontal turns stay delicate.
      spread: 0.007 + (Math.abs(b[1] - a[1]) / length) * 0.012,
    };
  };
}
