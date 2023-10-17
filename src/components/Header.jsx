import React from 'react'
import Boton from './Boton'

function Header({titulo,showForm,onAdd}){
    return (
    <div className='header'>
        <h3>{titulo}</h3>
        <Boton color ={(showForm)?'':''} texto={(showForm)?'Cerrar':'Nueva'} onAdd={onAdd}/>
    </div>
    )
}

export default Header