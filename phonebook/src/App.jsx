import { useState,useEffect } from 'react'
import axios from 'axios'

const Persons = ({personsToShow}) =>  {     
  return ( 
  <div>
    {personsToShow.map((person) => <p key={person.id}>{person.name} {person.number}</p>) }
  </div>)}

 const PersonForm = ({addName, newName,handleNameChange,handleNumberChange, newNumber}) => {

  return (
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
    )
 }
const Filter = ({newSearch, handleSearchChange}) => {
      return (
      <div>
        filter shown with<input value={newSearch} onChange={handleSearchChange}></input>
      </div>)
}



const App = () => {

  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

   useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    }, [])
    console.log('render', persons.length, 'Persons')




  const addName = (event) =>  { 
    event.preventDefault()
    const names = persons.keys()
    for(const key of names){
      if (new RegExp(newName, 'i').test(persons[key].name) ){
        window.alert(`${newName} is already added to phonebook` )
        return
      }
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    console.log(newName)
    axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      console.log(response)
    })
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
      <Filter
        newSearch={newSearch} 
        handleSearchChange={handleSearchChange}
      />
      <PersonForm 
        addName={addName}
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}
export default App