import { PlusCircle } from 'phosphor-react'
import { useState, ChangeEvent, FormEvent } from 'react'
import './NewTask.scss'

export function NewTask() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState<string>('')

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault()
    setTasks([...tasks, newTask])
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  return (
    <form onSubmit={handleCreateTask} className="new-task-container">
      <input
        placeholder="Adicone uma nova tarefa"
        name="tarefa"
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
