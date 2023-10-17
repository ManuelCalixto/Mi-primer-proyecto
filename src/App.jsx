import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import AddForm from './components/AddForm'
import Tareas from './components/Tareas'
function App() {
  const [showForm, setShowForm] = useState(false)
  const [task, setTask] = useState([
    {
      id: 1,
      texto: 'Correr',
      fecha: '25 de Febrero de 2023',
      terminada: false,

    }
  ])

  const addTarea = (tarea) => {
    const id = task.length + 1;
    const newTask = { id, ...tarea }
    setTask([...task, newTask]);

  }

  return (
    <div className="container">
      <Header titulo={"Administrador de tareas"} showForm={showForm} onAdd={() => setShowForm(!showForm)} />
      {showForm && <AddForm onAdd={addTarea} />}

      <Tareas tareas={task} />
    </div>

  )
}

export default App
