import { useState } from 'react'
import LoginForm from './LoginForm'
import { useStore } from './store'



function App() {
  // import the initial data and updateRecords function from the store
  const { recordData, updateRecords } = useStore()

  function handleChange(index, e) {
    const label = e.target.name // name of field - must match store porperty name
    // Update the appropriate record
    const updatedRecords = recordData.map((record, i) => {
      if (i === index) {
        return { ...record, [label]: e.target.value }
      }
      return record
    })
    // Finally call our updateRecords function inside the store which will update the state
    updateRecords(updatedRecords)
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
            {recordData.map((record, index) => {
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
