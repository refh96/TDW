import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const cargarImagenRandom = async () => {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random');
  return response.data.message;
};

function Candidato() {
  const [PerroCandidato, setPerroCandidato] = useState(generarNombre()); // Generar nombre aleatorio inicial
  const [PerroAceptado, setPerroAceptado] = useState([]);
  const [PerroRechazado, setPerroRechazado] = useState([]);
  const { data, isLoading, refetch } = useQuery('PerroRandom', cargarImagenRandom);

  const PerroA = () => {
    if (PerroCandidato) {
      setPerroAceptado([...PerroAceptado, PerroCandidato]);
      setPerroCandidato(generarNombre()); // Generar un nuevo nombre aleatorio
      refetch(); // Cargar una nueva imagen
    }
  };

  const PerroR = () => {
    if (PerroCandidato) {
      setPerroRechazado([...PerroRechazado, PerroCandidato]);
      setPerroCandidato(generarNombre()); // Generar un nuevo nombre aleatorio
      refetch(); // Cargar una nueva imagen
    }
  };

  const moverPerro = (perro, fromList, toList) => {
    const updatedFromList = fromList.filter((d) => d !== perro);
    toList.push(perro);
    fromList === PerroAceptado ? setPerroAceptado(updatedFromList) : setPerroRechazado(updatedFromList);
  };

  return (
    <div>
      <h1>Adopta un Perro</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <img src={data} alt="Perro Candidato" />
      )}
      <div>
        <button onClick={PerroA}>
          Aceptar
        </button>
        <button onClick={PerroR}>
          Rechazar
        </button>
        <button onClick={() => moverPerro(PerroCandidato, PerroAceptado, PerroRechazado)}>
          Arrepentirse
        </button>
      </div>
    </div>
  );
}

function generarNombre() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomName = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomName += characters.charAt(randomIndex);
  }
  return randomName;
}

export default Candidato;
