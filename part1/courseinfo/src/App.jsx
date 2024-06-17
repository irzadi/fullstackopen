//refactor to three new components:
//Header, Content, and Total.

const Header = (props) => {
  return (
  <div>
    <h1>{props.title}</h1>
  </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part course={props.content[0]} exercise={props.content[1]} />
      <Part course={props.content[2]} exercise={props.content[3]} />
      <Part course={props.content[4]} exercise={props.content[5]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.course} {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const contents=[part1,exercises1,part2,exercises2,part3,exercises3]

  return (
    <div>
      <Header title={course}/>
      <Content content={contents} />
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App