import { Header } from './components/Header/Header'
import { NewTask } from './components/Task/NewTask/NewTask'
import { TaskList } from './components/Task/TaskList/TaskList'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <NewTask />
        <TaskList />
      </main>
    </>
  )
}

export default App
