import './App.css'
import Header from './componentes/Header'
import TextArea from './componentes/TextArea'
import TaskList from './componentes/TaskList'
import NavPage from './componentes/NavPage'

function App() {
  

  return (
    <>
      <Header/>
      <div>
        <TextArea/>
        <TaskList/>
      </div>
      <div>
        <NavPage/>
      </div>
    </>
  )
}

export default App
