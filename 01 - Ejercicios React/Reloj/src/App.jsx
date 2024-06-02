import './App.css'
import { Stopwatch } from './componets'
import { Countdown } from './componets/CountDownDate/CountDownDate'
import { DigitalClock } from './componets/DigitalClock/DigitalClock'



function App() {
  
  return (
    <>
      <DigitalClock  className="clock-container"/>
      <Countdown  className="countdown"/>
      <Stopwatch  className="stopwatch"/>
    </>
  )
}

export default App
