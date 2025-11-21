const Header = ({text}) => <h1>{text}</h1>

const Content = ({content}) => content.map(contents => <Part key={contents.id} part={contents}/>)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({parts}) => {
  const total = parts.reduce((sum,part)=> {console.log("whats happening", sum, part)
   return part.exercises + sum},0)
   console.log("The total", total)
  return <h2>
      total of {total} exercises
    </h2>
  }

const Course = ({course}) => {
  return (
    <div>
      <Header text = {course.name}/>
      <Content content = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}
export default Course