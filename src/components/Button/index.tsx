import { Container } from './styles'
import { ButtonProps } from './types'

function Button({ ...props }: ButtonProps) {
  return (
    <Container disabled={props.loading} {...props}>
      {props.iconDirection === 'left' && props.buttonIcon}
      {props.children}
      {props.iconDirection === 'right' && props.buttonIcon}
    </Container>
  )
}

export default Button
