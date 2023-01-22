import { Header } from './components/Header/Header'
import { NewTask } from './components/Task/NewTask/NewTask'
import { TaskList } from './components/Task/TaskList/TaskList'
import { useEffect, useState } from 'react'
import { Task } from './components/Task/Task.types'

import './App.scss'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const LOCAL_STORAGE_KEY = '@todoList::tasks'

  const createTask = (task: Task) => {
    setTasks([...tasks, task])
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...tasks, task]))
  }

  const updateTask = (task: Task) => {
    const tasksUpdated = tasks.map((item) => {
      if (item.id === task.id) {
        const updatedTask = {
          ...item,
          isCompleted: task.isCompleted,
        }
        return updatedTask
      }

      return item
    })

    setTasks(tasksUpdated)
  }

  const deleteTask = (task: Task) => {
    const tasksUpdated = tasks.filter((item) => {
      return item !== task
    })

    setTasks(tasksUpdated)
  }

  const loadTasks = () => {
    const storagedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (storagedTasks) {
      setTasks(JSON.parse(storagedTasks))
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <>
      <Header />
      <main className="wrapper">
        <NewTask onCreateTask={createTask} />
        <TaskList
          tasks={tasks}
          onCheckedTask={updateTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </>
  )
}

export default App
