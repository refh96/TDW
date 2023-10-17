// ListaPerrosAceptados.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { LoremIpsum } from "lorem-ipsum";  // Importa la librería de esta manera
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
function generarDescripcion() {
  return lorem.generateParagraphs(1);  // Utiliza la función generateParagraphs
}
function ListaPerrosAceptados({ perrosAceptados, onMoverPerro }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
  const [descripcion, setDescripcion] = useState('');

  const toggleDescripcion = () => {
    if (!mostrarDescripcion) {
      setDescripcion(generarDescripcion());
    } else {
      setDescripcion('');
    }
    setMostrarDescripcion(!mostrarDescripcion);
  };

  return (
    <div>
      <h2>Perros Aceptados</h2>
      <ul>
        {perrosAceptados.map((perro, index) => (
          <li key={index}>
            <img src={perro.imagen} alt={perro.nombre} />
            <p>{perro.nombre}</p>
            <Button onClick={() => onMoverPerro(perro)}>Rechazar</Button>
            <Button onClick={toggleDescripcion}>Mostrar/Ocultar Descripcion</Button>
            {mostrarDescripcion && <p>{descripcion}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPerrosAceptados;

