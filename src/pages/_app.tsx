import { useEffect } from 'react'

import Context from '@/contexts'
import 'aos/dist/aos.css'

import AOS from 'aos'
import { AppProps } from 'next/app'

export default function App({
  Component: SsrComponent,
  pageProps: ssrPageProps
}: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Context>
      <SsrComponent {...ssrPageProps} />
    </Context>
  )
}
