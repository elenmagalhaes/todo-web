import './EmptyState.scss'

export function EmptyState() {
  return (
    <div className="empty-state-container">
      <img src="./src/assets/clipboard.svg" alt="" />
      <div className="container-info">
        <p className="title">Você ainda não tem tarefas cadastradas</p>
        <p className="description">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}
