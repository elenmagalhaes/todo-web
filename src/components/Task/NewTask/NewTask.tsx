import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from 'phosphor-react'
import { useState, ChangeEvent } from 'react'
import { Task } from '../Task.types'

import './NewTask.scss'

interface NewTaskProps {
  onCreateTask: (task: Task) => void
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState<string>('')

  const handleCreateTask = (event: any) => {
    event.preventDefault()
    onCreateTask({
      id: uuidv4(),
      text: newTask,
      isCompleted: false,
    })
    event.target.task.value = ''
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  return (
    <form onSubmit={handleCreateTask} className="new-task-container">
      <input
        placeholder="Adicone uma nova tarefa"
        name="task"
        type="text"
        onChange={handleInputChange}
      />
      <button type="submit">
        <div className="btn-content">
          <span>Criar</span>
          <PlusCircle size={16} color="#FFFFFF" weight="bold" />
        </div>
      </button>
    </form>
  )
}
