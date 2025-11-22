import { useState } from 'react'

const People = ({persons}) =>  <p>{persons.name}</p>


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      key: 1
     }
  ]) 
  const [newName, setNewName] = useState('')
  const addName = (event) =>  { 
    event.preventDefault()
    console.log(newName)
    const updatedList = persons.concat({
      name: newName,
      key: persons.length + 1,
    })
    setPersons(updatedList)
  }
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
          <div>debug: {newName}</div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        { persons.map((person) => <People persons={person} key={person.key} />) }
      </div>
    </div>
  )
}

export default App