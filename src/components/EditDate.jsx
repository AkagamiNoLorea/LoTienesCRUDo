import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './showDates.css'

const url = "http://localhost:8080/Dates"

const EditDate = () => {
  const [date, setDate] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { DateId } = useParams(); 

  useEffect(() => {
    const fetchDate = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}/${dateId}`);
        setDate(response.data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchDate();
  }, [dateId]);

  const handleInputChange = (event) => {
    setDate({ ...Date, [event.target.name]: event.target.value });
  };

  const goBack = () => {
    navigate("/");
  }

  const handleEditDate = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`${url}/${DateId}`, dateate);
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
      <form onSubmit={handleEditDate}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={date.name || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="img">Imagen:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={date.img || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={date.description || ''}
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

export default EditDate;