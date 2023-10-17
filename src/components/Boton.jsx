import React from 'react'

function Boton({texto,color,onAdd}) {
  return (
    <button className='btn' style={{background: color}} onClick={()=>onAdd()}>{texto}</button>
  )
}

export default Boton