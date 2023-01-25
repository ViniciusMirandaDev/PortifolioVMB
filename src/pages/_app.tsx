import Context from '@/contexts'

import { AppProps } from 'next/app'

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
