export function createStrokeSampler(
  strokes: readonly (readonly (readonly number[])[])[],
): (progress: number) => { x: number; y: number; spread: number };
