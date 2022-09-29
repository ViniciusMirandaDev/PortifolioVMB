import { AppProps } from 'next/app'

import Context from '@/contexts'
import Header from '@/components/Header'

export default function App({
  Component: SsrComponent,
  pageProps: ssrPageProps
}: AppProps) {
  return (
    <Context>
      <SsrComponent {...ssrPageProps} />
    </Context>
  )
}
