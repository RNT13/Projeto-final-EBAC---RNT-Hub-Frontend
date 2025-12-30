
'use client'

import Loading from '@/app/loading'
import { persistor, store } from '@/redux/store'
import { theme } from '@/styles/theme'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
