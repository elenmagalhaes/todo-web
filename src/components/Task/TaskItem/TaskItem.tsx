import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { useState } from 'react'
import { Task } from '../Task.types'

import './TaskItem.scss'

interface TaskItemProps {
  task: Task
  onCheckedTask: (task: Task) => void
}

export function TaskItem({ task, onCheckedTask }: TaskItemProps) {
  const [taskItem, setTaskItem] = useState<Task>(task)

  const handleCheckTask = () => {
    const newTask = {
      ...task,
      isCompleted: !taskItem.isCompleted,
    }

    setTaskItem(newTask)
    onCheckedTask(newTask)
  }

  return (
    <>
      <div className="task-item">
        <div className="task-content">
          {taskItem.isCompleted ? (
            <CheckCircle
              onClick={handleCheckTask}
              className="checked"
              size={24}
              color="#e75a7a"
            />
          ) : (
            <Circle onClick={handleCheckTask} size={24} color="#FFFFFF" />
          )}
          <p className="task-text">{taskItem.text}</p>
          <button title="deletar tarefa">
            <Trash size={24} />
          </button>
        </div>
      </div>
    </>
  )
}
