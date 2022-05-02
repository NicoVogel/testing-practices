
export function hasElement(items: (number | string)[], value: number | string): boolean {
  return !!items.find(x => x === value)
}