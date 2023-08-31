


export default function CardCita (props) {
    
    const cita = props.cita;
    
    return (
        <>
        <div className="card">
            <div className="contenedor-datos">
                <h3>{cita.nombre}</h3>
                <p>{cita.hora}</p>
                <p>{cita.ciudad}</p>
                <p>{cita.dia}</p>
            </div>
            <div className="buttons">
                <button onClick={() => props.editCita(cita) }> Editar </button>
                <button onClick={() => props.deleteCita(cita) }> Eliminar </button>
            </div>
        </div>
        </>
    )
}
