import { queryOptions, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/api/client'

export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  detail: (id: number) => [...postKeys.all, 'detail', id] as const,
}

export const postsQuery = () =>
  queryOptions({
    queryKey: postKeys.lists(),
    queryFn: () => api<Post[]>('/posts?_limit=6'),
  })

export const postQuery = (id: number) =>
  queryOptions({
    queryKey: postKeys.detail(id),
    queryFn: () => api<Post>(`/posts/${id}`),
  })

export function useCreatePost() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: (input: Pick<Post, 'title' | 'body'>) =>
      api<Post>('/posts', {
        method: 'POST',
        body: JSON.stringify({ ...input, userId: 1 }),
      }),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: postKeys.lists() })
    },
  })
}
