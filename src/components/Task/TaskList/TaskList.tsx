import { useEffect, useState } from 'react'
import { Task } from '../Task.types'
import { TaskItem } from '../TaskItem/TaskItem'
import { EmptyState } from '../../EmptyState/EmptyState'

import './TaskList.scss'

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const [taskList, setTaskList] = useState<Task[]>(tasks)

  const filterDoneTasks = () => {
    const tasksCompleted = taskList.filter((task) => task.isCompleted).length
    return `${tasksCompleted} de ${taskList.length}`
  }

  const updateTask = (task: Task) => {
    const newList = taskList.map((item) => {
      if (item.id === task.id) {
        const updatedTask = {
          ...item,
          isCompleted: task.isCompleted,
        }
        return updatedTask
      }

      return item
    })

    setTaskList(newList)
  }

  useEffect(() => {
    if (tasks.length !== 0) {
      setTaskList(tasks)
    }
  }, [tasks])

  return (
    <div className="task-list-container">
      <header className="header-info">
        <div className="created-tasks">
          <span>Tarefas criadas</span>
          <span className="counter">{tasks.length}</span>
        </div>
        <div className="completed-tasks">
          <span>Concluídas</span>
          <span className="progress">{filterDoneTasks()}</span>
        </div>
      </header>

      <div className="task-list">
        {tasks.length > 0 &&
          tasks.map((task) => {
            return (
              <TaskItem key={task.id} task={task} onCheckedTask={updateTask} />
            )
          })}
        {tasks.length === 0 && <EmptyState />}
      </div>
    </div>
  )
}
