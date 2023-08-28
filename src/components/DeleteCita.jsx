import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './showCitas.css'

const url = "http://localhost:8080/Citas"
const DeleteCita = () => {

  const [cita, setCita] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { citaId } = useParams();

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

  const goBack = () => {
    navigate("/");
  }
  const handleDeleteCita = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${url}/${citaId}`);
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
        <h2>Eliminar el personaje {Cita.name} </h2>
        <p>¿Estás seguro de que quieres eliminar este personaje?</p>
        <button onClick={handleDeleteCita}>Eliminar</button>
        <button type="button" onClick={goBack}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteCita;