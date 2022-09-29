import React from 'react'

import Favicon from '@/assets/favicon.png'
import OgImage from '@/assets/images/ogImage.png'
import { BasicLayout } from '@/components/Layouts'
import SEO from '@/components/SEO'

const About: React.FC = () => {
  return (
    <BasicLayout>
      <SEO
        title="Página inicial"
        description="Página criada por Vinícius Miranda"
        icon={Favicon.src}
        image={OgImage.src}
      />
    </BasicLayout>
  )
}

export default About
