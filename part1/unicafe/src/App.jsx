import { useState } from 'react'
import './App.css'

const Feedback = ({bad, neutral,good}) => {
    return (
      <div>give feedback</div>
    )
  }


const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({bad,neutral,good}) => {
  let total = bad+neutral+good
  console.log(total)
  if (total===0) {
    return (
      <div>Give feedback</div>
    )
  }

  
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="all" value={bad+neutral+good} />
          <StatisticsLine text="average" value={(good-bad)/(bad+neutral+good)} />
          <StatisticsLine text="positive" value={ good/(bad+neutral+good) * 100} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = ({text,value}) => {
  return (
    text==="positive" ?  <tr><td>{text} : {value} %</td></tr> :  <tr><td>{text} : {value}</td></tr>
  )
}

function App() {  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleBad = () => {
    setBad(bad+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleGood = () => {
    setGood(good+1)
  }

  return (
    <div>
      <Feedback/>
      <div style={{flex: 1 }}>    
      <Button text="bad"  onClick={handleBad}/>
      <Button text="neutral"  onClick={handleNeutral}/>
      <Button text="good"  onClick={handleGood}/>      
      </div>
      <Statistics bad={bad} neutral={neutral} good={good} />
    </div>
  )
}

export default App
