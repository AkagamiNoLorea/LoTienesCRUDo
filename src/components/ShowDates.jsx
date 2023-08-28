import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './showDates.css'
import CardDate from "./CardDate"


const url = "http://localhost:8080/dates"
const ShowDates = () => {

  const [dates, setDates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllDates()
  }, [])
 

  const getAllDates = async () => {
    const response = await axios.get(url)
    let data = response.data;
    setDates(data);
  }

  // create, read, update, delete 
  const handleEditDate = (date) => {
    navigate(`/edit/${date.id}`)
  };

  const handleDeleteDate = (date) => {    
    navigate(`/delete/${date.id}`);
  };

  const cards = Dates.map((date) => <CardDate 
                                                        key = {date.id} 
                                                        Date = {date} 
                                                        editDate = { handleEditDate }
                                                        deleteDate = { handleDeleteDate }
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

export default ShowDates