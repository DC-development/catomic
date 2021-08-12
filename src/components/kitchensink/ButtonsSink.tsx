import { Button } from '../atoms/Button';

export const ButtonsSink = () => {

  const clicked = (): void => {
    console.log("clicked me!")
  }

  return (
      <>
        <Button text="My Button 1" />
        <Button
            text="My Button 2"
            type="--blue"
            onClick={clicked}
        />
        <Button text="My Button 3" type="--green" />
        <Button text="My Button 4" type="--red" />
      </>
  )
}
