import React from 'react'

import Favicon from '@/assets/favicon.png'
import { ClipboardIcon, ProfileIcon, ProfileLogoIcon } from '@/assets/icons'
import OgImage from '@/assets/images/ogImage.png'
import Button from '@/components/Button'
import { BasicLayout } from '@/components/Layouts'
import SEO from '@/components/SEO'
import { Content, Left, Right } from '@/styles/pages/Home'

export default function Home() {
  return (
    <BasicLayout>
      <SEO
        title="Página inicial"
        description="Página criada por Vinícius Miranda"
        icon={Favicon.src}
        image={OgImage.src}
      />
      <Content>
        <Left>
          <h2>
            <i>Hello World</i>, tudo bem?
          </h2>
          <h1>Vinícius M. Baptista</h1>
          <p>
            Fullstack developer, focado em :<br /> .NET | C# | React | React
            Native | JS | Jquery
          </p>
          <div>
            <Button
              colorType="primary"
              fontSize="medium"
              size="large"
              iconDirection="left"
              buttonIcon={<ProfileIcon />}
            >
              Sobre
            </Button>
            <Button
              colorType="outline"
              fontSize="medium"
              size="large"
              iconDirection="right"
              buttonIcon={<ClipboardIcon />}
            >
              Projetos
            </Button>
          </div>
        </Left>
        <Right>
          <ProfileLogoIcon />
        </Right>
      </Content>
    </BasicLayout>
  )
}
