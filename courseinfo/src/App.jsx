const Header = ({text}) => <h1>{text}</h1>

const Content = ({content}) => (
  <div>
    {console.log(content)}
    <Part part={content[0]} />
    <Part part={content[1]} />
    <Part part={content[2]} />
  </div>
)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Course = ({course}) => {
  return (
    <div>
      <Header text = {course.name}/>
      <Content content = {course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3        
      }
    ]
  }
  console.log();
  

  return <Course course={course} />
}

export default App