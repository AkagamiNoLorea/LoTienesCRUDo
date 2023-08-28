import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './showCitas.css'

const url = "http://localhost:8080/Citas"

const EditCita = () => {
  const [cita, setCita] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { CitaId } = useParams(); 

  useEffect(() => {
    const fetchCita = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}/${citaId}`);
        setCita(response.data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchCita();
  }, [citaId]);

  const handleInputChange = (event) => {
    setCita({ ...cita, [event.target.name]: event.target.value });
  };

  const goBack = () => {
    navigate("/");
  }

  const handleEditCita = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`${url}/${citaId}`, cita);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="form">
      <h2>Editar Personaje</h2>
      <form onSubmit={handleEditCita}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={Cita.name || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="img">Imagen:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={Cita.img || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={Cita.description || ''}
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