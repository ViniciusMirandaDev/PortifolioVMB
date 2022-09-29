import React from 'react'

import { NootebokIcon, PhoneIcon } from '@/assets/icons'

import { Container } from './styles'
const Footer: React.FC = () => {
  return (
    <Container>
      <PhoneIcon />
      <NootebokIcon />
    </Container>
  )
}

export default Footer
