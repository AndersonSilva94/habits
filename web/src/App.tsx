import { Habit } from './components/Habit'
import "./styles/global.css"

function App() {

  return (
    <>
      <h1>Hello World!</h1>
      <Habit completed={13} />
      <Habit completed={2} />
      <Habit completed={24} />
      <Habit completed={57} />
      <Habit completed={94} />
      <Habit completed={0} />
    </>
  )
}

export default App
