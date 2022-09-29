import SmoothScroll from '@/lib/react-smooth-scrolling'

import Footer from '../Footer'
import Header from '../Header'
import { Container } from './styles'
export const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <SmoothScroll skew>
        <Header />
        <main>{children}</main>
        <Footer />
      </SmoothScroll>
    </Container>
  )
}
