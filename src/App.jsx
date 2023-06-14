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
