import './Button.scss'

interface ButtonProps {
  text: string
}

export const Button = (props: ButtonProps) => {
  const { text } = props

  return <button className="pk-button pk-button--plain">{text}</button>
}
