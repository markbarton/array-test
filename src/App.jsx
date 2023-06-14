import { useState } from 'react'
import LoginForm from './LoginForm'
import { useStore } from './store'



function App() {

  const { recordData, updateRecords } = useStore()

  const [records, setRecords] = useState(recordData)
  function handleChange(index, e) {
    const label = e.target.name
    // Update the appropriate record without mutating state
    const updatedRecords = records.map((record, i) => {
      if (i === index) {
        return { ...record, [label]: e.target.value }
      }
      return record
    })
    setRecords(updatedRecords)
  }
  function updateStore() {
    updateRecords(records)
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
            <button onClick={updateStore} className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo">
              Update Store</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
