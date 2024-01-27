import React, { useState, useEffect } from 'react';

const ApiExampleComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red - ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error durante la solicitud:', error);
      });
  }, []); // El array vacío como segundo argumento asegura que useEffect se ejecute solo una vez al montar el componente.

  return (
    <div>
      <h1>Información de Usuarios:</h1>
      {userData ? (
        <ul>
          {userData.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ApiExampleComponent;
