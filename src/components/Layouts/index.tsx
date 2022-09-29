import Footer from '../Footer'
import Header from '../Header'
import { Container } from './styles'

export const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
