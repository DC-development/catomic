import { ButtonsSink } from './kitchensink/ButtonsSink'
import { NavigationSink } from './kitchensink/NavigationSink'
import './App.scss'

export const App = () => {
  return (
    <section className="main">
      <NavigationSink />
      <h1>
        Kittensink <span role="image">😺</span>
      </h1>
      <h2>Buttons</h2>
      <ButtonsSink />
    </section>
  )
}
