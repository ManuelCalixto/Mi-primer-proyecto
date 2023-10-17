import {useState}from'react'

function AddForm({ onAdd }) {
    const [texto, setTexto] = useState('')
    const [fecha, setFecha] = useState('')
    const [terminada, setTermida] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        if (!texto) {
            alert('Ingresa alguna informacion')
        } else {
            onAdd({ texto, fecha, terminada })
            setTexto('')
            setFecha('')
            setTermida(false)
        }
    }

    return (

        <form onSubmit={submit}>
            <div className="form-control">
                <label>Tarea</label>
                <input type="text" name="task" placeholder="Tarea" value={texto} onChange={(e) => setTexto(e.target.value)} />
            </div>
            <div className="form-control ">
                <label>Fecha</label>
                <input type="text" name="date" placeholder="Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>
            <div className="form-control check">
                <label>Terminada</label>
                <input type="checkbox" name="status" checked={terminada} value={terminada} onChange={(e) => setTermida(e.currentTarget.checked)} />
            </div>
            <button className="btn block">Agregar Tarea</button>
        </form>
    )
}

export default AddForm