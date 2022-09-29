import React from 'react'

import { LogoIcon } from '@/assets/icons'

import { useRouter } from 'next/router'

import Button from '../Button'
import { Link } from '../Link'
import { Container, Navbar, NavItems } from './styles'

const Navs = [
  { title: 'Home', path: '/' },
  { title: 'Tecnologias', path: '/tech' },
  { title: 'Experiências', path: '/career' },
  { title: 'Sobre', path: '/about' }
]

const Header: React.FC = () => {
  const router = useRouter()
  return (
    <Container>
      <Link href="/">
        <LogoIcon />
      </Link>

      <Navbar>
        <NavItems>
          {Navs.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${
                router.pathname === item.path && 'active'
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </NavItems>
        <Button colorType={'white'} size={'medium'} fontSize={'large'}>
          Contato
        </Button>
      </Navbar>
    </Container>
  )
}

export default Header
