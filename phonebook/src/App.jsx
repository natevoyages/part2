import { useState } from 'react'

const Persons = ({personsToShow}) =>  {     
  return ( 
  <div>
    {personsToShow.map((person) => <p key={person.id}>{person.name} {person.number}</p>) }
  </div>)}
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newSearch, setNewSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const addName = (event) =>  { 
    event.preventDefault()
    const names = persons.keys()
    for(const key of names){
      if (new RegExp(newName, 'i').test(persons[key].name) ){
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
    const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  // Filter
  const filterSearch = () =>  persons.filter(person => new RegExp(newSearch, 'i').test(person.name))
  const personsToShow = newSearch === ('') ? persons : filterSearch()

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with<input value={newSearch} onChange={handleSearchChange}></input>
      </div>
      <form onSubmit={addName}>
        <div>
          <h2>Add a new</h2>
          <div>name: <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}
export default App