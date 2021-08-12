import './Button.scss'

interface ButtonProps {
  text: string;
  type?: string;
  onClick: (e: Event) => void;
}

export const Button = (props: ButtonProps) => {
  const {
    text,
    type,
    onClick,
  } = props;

  return (
      <button
          onClick={(e) => onClick(e)}
          className={`pk-button pk-button${type || '--plain'}`}
      >
        {text}
      </button>
  )
}
