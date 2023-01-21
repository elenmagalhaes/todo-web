import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { useState } from 'react'
import { Task } from '../Task.types'

import './TaskItem.scss'

interface TaskItemProps {
  task: Task
  onCheckedTask: (task: Task) => void
  onDeleteTask: (task: Task) => void
}

export function TaskItem({ task, onCheckedTask, onDeleteTask }: TaskItemProps) {
  const [taskItem, setTaskItem] = useState<Task>(task)

  const handleCheckTask = () => {
    const newTask = {
      ...task,
      isCompleted: !taskItem.isCompleted,
    }

    setTaskItem(newTask)
    onCheckedTask(newTask)
  }

  const handleDeleteTask = () => {
    onDeleteTask(task)
  }

  return (
    <>
      <div className="task-item">
        <div className="task-content">
          <div className="check-container" onClick={handleCheckTask}>
            {taskItem.isCompleted ? (
              <CheckCircle className="checked" size={24} color="#e75a7a" />
            ) : (
              <Circle size={24} color="#FFFFFF" />
            )}
            <p className={`task-text ${task.isCompleted ? 'scratched' : ''}`}>
              {taskItem.text}
            </p>
          </div>

          <button onClick={handleDeleteTask} title="deletar tarefa">
            <Trash size={24} />
          </button>
        </div>
      </div>
    </>
  )
}
