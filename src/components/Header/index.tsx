import React, { useEffect, useState } from 'react'

import { LogoIcon } from '@/assets/icons'

import { Spin as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router'

import Button from '../Button'
import { Link } from '../Link'
import { Container, Navbar, NavItems, NavItemsMobile } from './styles'

const Navs = [
  { title: 'Home', path: '/' },
  { title: 'Tecnologias', path: '/tech' },
  { title: 'Experiências', path: '/career' },
  { title: 'Sobre', path: '/about' }
]

const Header: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number[]>()
  const [isOpen, setOpen] = useState(false)
  const [fixWindowSize, setFixWindowSize] = useState(0)

  useEffect(() => {
    if (fixWindowSize === 0) {
      setWindowSize([window.innerWidth, window.innerHeight])
      setFixWindowSize(1)
    }
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  const router = useRouter()

  return (
    <Container>
      <Link href="/">
        <LogoIcon data-aos="fade-right" />
      </Link>

      <Navbar data-aos="fade-left">
        {windowSize !== undefined && windowSize[0] > 1150 && isOpen === false && (
          <>
            {' '}
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
          </>
        )}

        {windowSize !== undefined && windowSize[0] < 1150 && isOpen === true && (
          <>
            <NavItemsMobile>
              {' '}
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
            </NavItemsMobile>
          </>
        )}

        {windowSize !== undefined && windowSize[0] < 1150 && (
          <Hamburger toggled={isOpen} toggle={setOpen} />
        )}
      </Navbar>
    </Container>
  )
}

export default Header
