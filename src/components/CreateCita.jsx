import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const url = "http://localhost:8081/api/v1/citas"

const CreateCitas = () => {

  const [nombre, setNombre] = useState('')
  const [hora, setHora] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [dia, setDia] = useState('')

  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    console.log(e)
    await axios.post(url, { id: id, nombre: nombre, hora: hora, ciudad: ciudad, dia: dia })
    navigate("/")
  }

  const goBack = () => {
    navigate("/");
  }

  return (
    <>
      <div className="form">
        <h2>Registrar una cita</h2>
        <form onSubmit={store}>
          <div>
            <label>Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div>
            <label>Hora</label>
            <input type="text" value={hora} onChange={(e) => setHora(e.target.value)} />
          </div>
          <div>
            <label>Ciudad</label>
            <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
          </div>
          <div>
            <label>Dia</label>
            <input type="text" value={dia} onChange={(e) => setDia(e.target.value)} />
          </div>
          <button type="submit">Crear cita</button>
          <button type="button" onClick={goBack}>Cancelar</button>
        </form>
      </div>
    </>

  )
}

export default CreateCitas