import { Trash, Circle, CheckCircle } from 'phosphor-react'
import './TaskItem.scss'

export function TaskItem() {
  return (
    <>
      <div className="task-item">
        <div className="task-content">
          <Circle size={24} color="#FFFFFF" />
          <p className="task-text">
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <button title="deletar tarefa">
            <Trash size={24} />
          </button>
        </div>
      </div>

      <div className="task-item">
        <div className="task-content">
          <CheckCircle className="checked" size={24} color="#e75a7a" />
          <p className="task-text">
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <button title="deletar tarefa">
            <Trash size={24} />
          </button>
        </div>
      </div>
    </>
  )
}
