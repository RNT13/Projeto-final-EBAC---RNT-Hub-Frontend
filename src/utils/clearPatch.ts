const isEmptyValue = (value: unknown) => value === '' || value === null || value === undefined

export function cleanPatchPayload<T extends Record<string, any>>(data: T) {
  return Object.fromEntries(Object.entries(data).filter(([, value]) => !isEmptyValue(value))) as Partial<T>
}
