import { Button } from '../atoms/Button';

export const ButtonsSink = () => {

  const clicked = (): void => {
    console.log("clicked me!")
  }

  return (
      <>
        <Button
            text="My Button 1"
            onClick={(e) => console.log(e.target)}
        />
        <Button
            text="My Button 2"
            type="--blue"
            onClick={clicked}
        />
        <Button text="My Button 3"
                type="--green"
                onClick={(e) => console.log(e.target)}
        />
        <Button
            text="My Button 4"
            type="--red"
            onClick={(e) => console.log(e.target)}
        />
      </>
  )
}
