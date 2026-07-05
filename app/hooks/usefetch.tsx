'use client'

import useSWR, { type SWRConfiguration } from 'swr'

const fetcher = async (url: string, options?: { signal?: AbortSignal }) => {
  const res = await fetch(url, { signal: options?.signal })
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
  return res.json()
}

const usefetch = <T,>(url: string, options?: SWRConfiguration<T>) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<T>(
    url,
    fetcher,
    options
  )

  return { data, error, isLoading, isValidating, mutate }
}

export default usefetch
