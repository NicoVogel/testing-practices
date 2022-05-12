export async function backendCall<T>(input: T) {
  return new Promise<T>((resolve) => setTimeout(() => resolve(input), 50));
}
