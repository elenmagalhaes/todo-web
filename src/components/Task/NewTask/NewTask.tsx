import './NewTask.scss'
import { PlusCircle } from 'phosphor-react'

export function NewTask() {
  return (
    <div className="new-task-container">
      <input placeholder="Adicone uma nova tarefa" type="text" name="tarefa" />
      <button type="submit">
        <div className="btn-content">
          <span>Criar</span>
          <PlusCircle size={16} color="#FFFFFF" weight="bold" />
        </div>
      </button>
    </div>
  )
}
