import React from 'react'

function Tarea({ texto, fecha,terminada }) {
    return (
        <div className={`task ${(terminada) ? 'finished' : ''}`}>
            <h3>{texto}<span></span></h3>
            <p>{fecha}</p>
        </div>
    )
}

export default Tarea