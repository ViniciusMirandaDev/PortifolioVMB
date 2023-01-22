import { FooterLogoIcon, NotebokIcon, PhoneIcon } from '@/assets/icons'

import { Container } from './styles'
const Footer: React.FC = () => {
  return (
    <Container>
      <PhoneIcon />
      <FooterLogoIcon></FooterLogoIcon>
      <NotebokIcon />
    </Container>
  )
}

export default Footer
