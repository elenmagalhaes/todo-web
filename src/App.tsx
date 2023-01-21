import { Header } from './components/Header/Header'
import { NewTask } from './components/Task/NewTask/NewTask'
import { TaskList } from './components/Task/TaskList/TaskList'
import { useState } from 'react'
import { Task } from './components/Task/Task.types'

import './App.scss'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const createTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  return (
    <>
      <Header />
      <main className="wrapper">
        <NewTask onCreateTask={createTask} />
        <TaskList tasks={tasks} />
      </main>
    </>
  )
}

export default App
