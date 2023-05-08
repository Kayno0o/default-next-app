export const inRange = (val: number, minOrMax: number, max?: number) => {
  if (max) return val > minOrMax && val < max;

  return val >= 0 && val < minOrMax;
};

export const randomInt = (minOrMax: number, max?: number): number => {
  return Math.floor(max === undefined ? Math.random() * minOrMax : Math.random() * (max - minOrMax) + minOrMax);
};
