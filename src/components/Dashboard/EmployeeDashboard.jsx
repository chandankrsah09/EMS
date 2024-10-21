import React from 'react'
import Header from '../other/Header'
import TaskListNo from '../other/TaskListNo'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className=' p-10 bg-[#1C1C1C] h-screen'>
        < Header />
        <TaskListNo />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard
