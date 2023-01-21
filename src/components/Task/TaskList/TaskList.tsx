import { useEffect, useState } from 'react'
import { Task } from '../Task.types'
import { TaskItem } from '../TaskItem/TaskItem'
import { EmptyState } from '../../EmptyState/EmptyState'

import './TaskList.scss'

interface TaskListProps {
  tasks: Task[]
  onCheckedTask: (task: Task) => void
  onDeleteTask: (task: Task) => void
}

export function TaskList({
  tasks,
  onCheckedTask,
  onDeleteTask,
}: TaskListProps) {
  const filterDoneTasks = () => {
    const tasksCompleted = tasks.filter((task) => task.isCompleted).length
    return `${tasksCompleted} de ${tasks.length}`
  }

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
              <TaskItem
                key={task.id}
                task={task}
                onCheckedTask={onCheckedTask}
                onDeleteTask={onDeleteTask}
              />
            )
          })}
        {tasks.length === 0 && <EmptyState />}
      </div>
    </div>
  )
}
