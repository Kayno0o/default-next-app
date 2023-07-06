export function inRange(val: number, minOrMax: number, max?: number) {
  if (max)
    return val > minOrMax && val < max

  return val >= 0 && val < minOrMax
}

export function randomInt(minOrMax: number, max?: number): number {
  return Math.floor(max === undefined ? Math.random() * minOrMax : Math.random() * (max - minOrMax) + minOrMax)
}

export function randomString(length: number): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''

  for (let i = 0; i < length; i++)
    result += chars[randomInt(chars.length)]

  return result
}

export function randomUuid(): string {
  return `${randomString(8)}-${randomString(4)}-${randomString(4)}-${randomString(4)}-${randomString(12)}`
}
