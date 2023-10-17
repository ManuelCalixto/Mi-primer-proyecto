import React from 'react'
import Tarea from './Tarea'

function Tareas({ tareas }) {
    return (
        <>
            {tareas.map((tarea) => <Tarea key={tarea.id} texto={tarea.texto} fecha={tarea.fecha} terminada={tarea.terminada} />)}
        </>
    )
}

export default Tareas