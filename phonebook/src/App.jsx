import { useState } from 'react'

const People = ({persons}) =>  <p>{persons.name} {persons.number}</p>


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
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
      number: newNumber,
      id: persons.length + 1,
    })
    setPersons(updatedList)

  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          <div>name: <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
          <div>debug: {newName} {newNumber}</div>
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