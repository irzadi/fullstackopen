import { useState } from 'react'

const RandomButton = ({onClick}) => {
  return (
      <button onClick={onClick}>next anecdote</button>
  )
}

const VoteButton = ({onClick}) => {
  return (
      <button onClick={onClick}>Vote</button>
  )
}

const DisplayVote= ({votes}) => {
  return (
    <div>
      <p>has {votes} votes</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const votes = new Array(anecdotes.length).fill(0)
   
  const [selected, setSelected] = useState(0)
  const [currentVote, setCurrentVote] = useState(votes)
  const [mostVoted, setMostVoted] = useState(0)

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const randomAnecdote = () => {
    setSelected(randomNumber(1,anecdotes.length-1))
//    console.log(votes)
  }

  const voteAnecdote = () => {
    const newVotes = [...currentVote]
    newVotes[selected] = newVotes[selected]+1
    console.log(newVotes[selected])
    setCurrentVote(newVotes)
    bestAnecdote()
  }
  
  const bestAnecdote = () => {
    let max = 0;
    let selected = 0;
    for (let i = 0;i<(currentVote.length);i++) {
      if (currentVote[i] > max ) {
        max = currentVote[i]
        selected = i
      }
    }
    setMostVoted(selected)
  }  

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}    
      <DisplayVote selected={selected} votes={currentVote[selected]}/>      
      <div>
        <VoteButton onClick={voteAnecdote}/> 
        <RandomButton onClick={randomAnecdote}/>
      </div>
      <h2>Anecdote with most vote</h2>
      <p>{anecdotes[mostVoted]}</p>
      <DisplayVote votes={currentVote[mostVoted]}/>      
    </div>
  )
}

export default App