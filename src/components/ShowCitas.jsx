import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CardCita from "./CardCita"


const url = "http://localhost:8080/citas"
const ShowCitas = () => {

  const [citas, setCitas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCitas()
  }, [])
 

  const getAllCitas = async () => {
    const response = await axios.get(url)
    let data = response.data;
    setCitas(data);
  }

  // create, read, upCita, delete 
  const handleEditCita = (cita) => {
    navigate(`/edit/${cita.id}`)
  };

  const handleDeleteCita = (cita) => {    
    navigate(`/delete/${cita.id}`);
  };

  const cards = Citas.map((Cita) => <CardCita 
                                                        key = {cita.id} 
                                                        Cita = {cita} 
                                                        editCita = { handleEditCita }
                                                        deleteCita = { handleDeleteCita }
                                                     /> );
  
  return (
    <>
      <div className="box">
        { 
          cards
        }
      </div>
    </>
  )
}

export default ShowCitas