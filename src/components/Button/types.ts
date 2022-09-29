export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  fontSize: 'medium' | 'large'
  colorType: 'primary' | 'blue' | 'white' | 'outline'
  size: 'medium' | 'large'
  iconDirection?: 'left' | 'right'
  buttonIcon?: React.ReactElement
}
