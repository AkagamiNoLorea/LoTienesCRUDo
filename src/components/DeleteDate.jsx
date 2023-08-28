import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './showDates.css'

const url = "http://localhost:8080/Dates"
const DeleteDate = () => {

  const [Date, setDate] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { DateId } = useParams();

  useEffect(() => {
    const fetchDate = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}/${DateId}`);
        setDate(response.data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchDate();
  }, [DateId]);

  const goBack = () => {
    navigate("/");
  }
  const handleDeleteDate = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${url}/${DateId}`);
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
        <h2>Eliminar el personaje {Date.name} </h2>
        <p>¿Estás seguro de que quieres eliminar este personaje?</p>
        <button onClick={handleDeleteDate}>Eliminar</button>
        <button type="button" onClick={goBack}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteDate;