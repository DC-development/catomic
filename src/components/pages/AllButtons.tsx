import { Master } from '../templates/master/Master'
import { ButtonsSink } from '../../kitchensink/ButtonsSink'

export const AllButtons = () => (
  <Master
    leftCol={<p>left col gedöns</p>}
    stage={
      <>
        <h1>
          Kittensink{' '}
          <span role="img" aria-label="face of cat">
            😺
          </span>
        </h1>
        <h2>Buttons</h2>
        <ButtonsSink />
      </>
    }
  />
)
