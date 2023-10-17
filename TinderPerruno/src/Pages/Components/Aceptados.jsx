import React from 'react'

const aceptados = () => {
  return (
    <div>
      <h2>Perros Aceptados</h2>
      <ul>
        {acceptedDogs.map((perro, index) => (
          <li key={index}>{perro}</li>
        ))}
      </ul>
    </div>
  );
}

export default aceptados