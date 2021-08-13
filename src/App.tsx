import { ButtonsSink } from './kitchensink/ButtonsSink'
import { NavigationSink } from './kitchensink/NavigationSink'
import './App.scss'

export const App = () => {
  return (
    <>
      <h1>Kitchensink</h1>
      <h2>Buttons</h2>
      <ButtonsSink />
      <h2>Navigation</h2>
      <NavigationSink />
    </>
  )
}
