import { useState } from 'react'
import LoginForm from './LoginForm'

// Basic default data for the records array
const recordData = [
  { id: 1, firstName: 'Mark', lastName: 'Barton' },
  { id: 2, firstName: 'Steven', lastName: 'Chapman' },
  { id: 3, firstName: 'Will', lastName: 'Constable' },
]

// This simple version just uses state to store the records array and passes the handleChange function to the LoginForm component
// Its designed to demo how to use the onChangeHandler function to update the state of the records array

function App() {
  const [records, setRecords] = useState(recordData)

  function handleChange(index, e) {
    const label = e.target.name  // we rely on the field name to set the correct property on the record object
    // update the records array with the new value without mutating the original array - the map function returns a new array so no mutation occurs
    const updatedRecords = records.map((record, i) => {
      if (i === index) {
        return { ...record, [label]: e.target.value }
      }
      return record
    })
    // Finally set the state with the updated array
    setRecords(updatedRecords)
  }
  return (
    <div className="min-h-full">
      <div className="py-10">
        <header>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {records.map((record, index) => {
              return (
                < LoginForm key={record.id} index={index} lastName={record.lastName} firstName={record.firstName} onChangeHandler={handleChange} />
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
