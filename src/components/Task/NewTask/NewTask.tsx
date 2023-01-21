import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from 'phosphor-react'
import { useState, ChangeEvent, InvalidEvent } from 'react'
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
    setNewTask('')
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  const handleInputInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  return (
    <form onSubmit={handleCreateTask} className="new-task-container">
      <input
        name="task"
        type="text"
        value={newTask}
        onChange={handleInputChange}
        onInvalid={handleInputInvalid}
        placeholder="Adicone uma nova tarefa"
        required
      />
      <button type="submit" disabled={newTask.length <= 0}>
        <div className="btn-content">
          <span>Criar</span>
          <PlusCircle size={16} color="#FFFFFF" weight="bold" />
        </div>
      </button>
    </form>
  )
}
