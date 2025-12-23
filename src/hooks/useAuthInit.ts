'use client'

import { setCredentials } from '@/redux/slices/authSlice'
import { useEffect, useState } from 'react'
import { useAppDispatch } from './useAppDispatch'

export function useAuthInit() {
  const dispatch = useAppDispatch()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // roda apenas no client, uma única vez
    const saved = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    if (saved) {
      dispatch(setCredentials({ token: saved }))
    }

    // adiar o setReady para o próximo ciclo de renderização
    Promise.resolve().then(() => setReady(true))
  }, [dispatch])

  return { ready }
}
