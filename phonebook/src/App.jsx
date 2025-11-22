import { useState } from 'react'

const People = ({persons}) =>  <p>{persons.name}</p>


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1
     }
  ]) 
  const [newName, setNewName] = useState('')
  const addName = (event) =>  { 
    event.preventDefault()
    const names = persons.keys()
    for(const key of names){
      if (newName === persons[key].name ){
        window.alert(`${newName} is already added to phonebook` )
        return
      }
    }
    console.log(newName)
    const updatedList = persons.concat({
      name: newName,
      id: persons.length + 1,
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
        { persons.map((person) => <People persons={person} key={person.id} />) }
      </div>
    </div>
  )
}

export default App