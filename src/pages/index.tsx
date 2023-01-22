import Favicon from '@/assets/favicon.png'
import {
  CakeIcon,
  ClipboardIcon,
  CodeIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  ProfileIcon,
  ProfileLogoIcon
} from '@/assets/icons'
import OgImage from '@/assets/images/ogImage.png'
import Button from '@/components/Button'
import { BasicLayout } from '@/components/Layouts'
import SEO from '@/components/SEO'
import {
  BackgroundElipse,
  BasicInfos,
  Card,
  Content,
  Left,
  Right,
  SocialSection,
  TopContent
} from '@/styles/pages/Home'

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
        <TopContent>
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
        </TopContent>

        <BasicInfos>
          <h3>Informações básicas</h3>
          <div>
            <Card>
              <CakeIcon></CakeIcon>
              <p>Idade</p>
              <h5>18 anos</h5>
              <BackgroundElipse />
              <BackgroundElipse />
            </Card>
            <Card>
              <LocationIcon></LocationIcon>
              <p>Localização</p>
              <h5>Brasil</h5>
              <BackgroundElipse />
              <BackgroundElipse />
            </Card>
            <Card>
              <CodeIcon></CodeIcon>
              <p>Tempo</p>
              <h5>3 anos</h5>
              <p>FullStack</p>
              <BackgroundElipse />
              <BackgroundElipse />
            </Card>
            <Card>
              <GitHubIcon></GitHubIcon>
              <p>GitHub</p>
              <h5>Ver</h5>
              <BackgroundElipse />
              <BackgroundElipse />
            </Card>
          </div>
          <span className="background-filter">as</span>
        </BasicInfos>
        <SocialSection>
          <section>
            <h2>Gostou de algo?</h2>

            <p>Caso sim, vamos conversar!</p>
            <p className="primary">Minhas redes sociais:</p>
            <div>
              <a
                href="https://www.instagram.com/vmbdeveloper/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  colorType="primary"
                  fontSize="medium"
                  size="large"
                  iconDirection="left"
                  buttonIcon={<InstagramIcon />}
                >
                  @vmbdeveloper
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/viniciusmirandadev/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  colorType="blue"
                  fontSize="medium"
                  size="large"
                  iconDirection="right"
                  buttonIcon={<LinkedinIcon />}
                >
                  Vinícius M.B
                </Button>
              </a>
            </div>
          </section>
        </SocialSection>
      </Content>
    </BasicLayout>
  )
}
