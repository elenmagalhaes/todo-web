import { Header } from './components/Header/Header'
import { NewTask } from './components/Task/NewTask/NewTask'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <NewTask />
      </main>
    </>
  )
}

export default App
