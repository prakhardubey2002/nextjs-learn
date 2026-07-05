'use client'

import { useCallback, useState } from 'react'
import { useSWRConfig } from 'swr'

async function postJson<TResponse, TBody>(url: string, body: TBody): Promise<TResponse> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Post failed: ${res.status}`)
  return res.json()
}

const usepost = <TResponse, TBody>(url: string) => {
  const { mutate } = useSWRConfig()
  const [data, setData] = useState<TResponse>()
  const [error, setError] = useState<Error>()
  const [isMutating, setIsMutating] = useState(false)

  const post = useCallback(
    async (body: TBody, revalidate?: string | string[]) => {
      setIsMutating(true)
      setError(undefined)
      try {
        const result = await postJson<TResponse, TBody>(url, body)
        setData(result)
        if (revalidate) {
          const keys = Array.isArray(revalidate) ? revalidate : [revalidate]
          await Promise.all(keys.map((key) => mutate(key)))
        }
        return result
      } catch (err) {
        const postError = err instanceof Error ? err : new Error('Post failed')
        setError(postError)
        throw postError
      } finally {
        setIsMutating(false)
      }
    },
    [url, mutate]
  )

  return { post, data, error, isMutating }
}

export default usepost
