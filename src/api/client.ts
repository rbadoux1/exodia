const BASE_URL = import.meta.env.VITE_API_URL ?? 'https://jsonplaceholder.typicode.com'

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  })

  if (!res.ok) {
    throw new ApiError(`Request failed: ${res.statusText}`, res.status)
  }

  return res.json() as Promise<T>
}
