import './showDates.css'


export default function CardDate (props) {
    
    const date = props.date;
    
    return (
        <>
        <div className="card">
            <img src ={date.img} alt="" className="img"/> 
            <div className="contenedor-datos">
                <h3>{date.name}</h3>
                <p>{date.description}</p>
            </div>
            <div className="buttons">
                <button onClick={() => props.editDate(date) }> Editar </button>
                <button onClick={() => props.deleteDate(date) }> Eliminar </button>
            </div>
        </div>
        </>
    )
}
