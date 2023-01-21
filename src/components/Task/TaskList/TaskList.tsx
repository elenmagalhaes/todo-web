import { TaskItem } from '../TaskItem/TaskItem'
import './TaskList.scss'

export function TaskList() {
  return (
    <div className="task-list-container">
      <header className="header-info">
        <div className="created-tasks">
          <span>Tarefas criadas</span>
          <span className="counter">0</span>
        </div>
        <div className="completed-tasks">
          <span>Concluídas</span>
          <span className="progress">1 de 5</span>
        </div>
      </header>

      <div className="task-list">
        <TaskItem />
      </div>
    </div>
  )
}
