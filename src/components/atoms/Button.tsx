import './Button.scss'

interface ButtonProps {
  text: string;
  type?: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const {
    text,
    type,
    onClick,
  } = props;

  return (
      <button
          onClick={onClick}
          className={`pk-button pk-button${type || '--plain'}`}
      >
        {text}
      </button>
  )
}
