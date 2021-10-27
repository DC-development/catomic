import './Button.scss'

interface ButtonProps {
  text: string
  type?: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: ButtonProps) => {
  const { text, type, handleClick } = props

  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`pk-button pk-button${type || '--plain'}`}
    >
      {text}
    </button>
  )
}
