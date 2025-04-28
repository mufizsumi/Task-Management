import React from 'react'
import TaskList from './Components/TaskList'
import AddTask from './Components/AddTask'

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-100 p-4'>
        <div className='max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-2xl font-bold text-center text-indigo-600 mb-4'>Task Management</h1>
        <AddTask/>
        <TaskList/>
        </div>
      </div>
    </>
  )
}

export default App