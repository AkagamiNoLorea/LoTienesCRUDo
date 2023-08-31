import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const url= "http://localhost:8081/api/v1/citas"
const EditCita = () => {
  const [cita, setCita] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    const fetchCita = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        setCita(response.data);
        console.log(response.data); 
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCita();
  }, [id]);

  const handleInputChange = (event) => {
    setCita({ ...cita, [event.target.name]: event.target.value });
  };

  const goBack = () => {
    navigate("/");
  }

  const handleEditCita = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${url}/${id}`, cita);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="form">
        <h2>Editar Cita</h2>
        <form onSubmit={handleEditCita}>
      <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={cita.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dia">Dia:</label>
          <input
            type="text"
            id="dia"
            name="dia"
            value={cita.dia}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="ciudad">Ciudad:</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={cita.ciudad}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Guardar cambios</button>
        <button type="button" onClick={goBack}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default EditCita;