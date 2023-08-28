import './showCitas.css'


export default function CardCita (props) {
    
    const cita = props.cita;
    
    return (
        <>
        <div className="card">
            <div className="contenedor-datos">
                <h3>{cita.name}</h3>
                <p>{cita.description}</p>
            </div>
            <div className="buttons">
                <button onClick={() => props.editCita(cita) }> Editar </button>
                <button onClick={() => props.deleteCita(cita) }> Eliminar </button>
            </div>
        </div>
        </>
    )
}
