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
      <Part course={props.content[0].name} exercise={props.content[0].exercises} />
      <Part course={props.content[1].name} exercise={props.content[1].exercises} />
      <Part course={props.content[2].name} exercise={props.content[2].exercises} />
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
      <p>Number of exercises {props.total[0].exercises+props.total[1].exercises+props.total[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name}/>
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App