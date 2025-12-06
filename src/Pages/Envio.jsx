 // 1) Importamos React y useState para manejar estado local en el componente
import React, { useState } from "react";


export default function Envio() {{


  /**
   * 2) Estado "id":
   * - Guarda lo que escribe el usuario en el input (el ID del personaje).
   * - Es un string inicialmente vacío para controlar el input.
   */
  const [id, setId] = useState("");


  /**
   * 3) Estado "character":
   * - Guarda el objeto del personaje que devuelve la API.
   * - Comienza en null, así podemos saber si todavía no hay datos cargados.
   */
  const [character, setCharacter] = useState(null);


  /**
   * 4) Estado "error":
   * - Guarda un mensaje de error si algo sale mal (ID inválido, red, etc.).
   * - Nos permite mostrar feedback claro en la interfaz.
   */
  const [error, setError] = useState("");


  /**
   * 5) Función "fetchCharacter":
   * - Se ejecuta cuando el usuario hace clic en "Buscar".
   * - Valida el ID, construye la URL, consume la API y guarda la respuesta en el estado.
   * - Maneja errores (HTTP y de red) para mejorar la experiencia.
   */
  const fetchCharacter = async () => {
    // 5.1) Limpiamos errores previos
    setError("");


    // 5.2) Validamos que haya un ID y que sea un número positivo
    const parsedId = Number(id);
    if (!parsedId || parsedId <= 0) {
      setError("Por favor ingresa un ID válido (número mayor a 0).");
      setCharacter(null);
      return;
    }


    try {
      // 5.3) Construimos la URL usando el ID ingresado
      const url = `https://rickandmortyapi.com/api/character/${parsedId}`;


      // 5.4) Hacemos la petición GET a la API
      const response = await fetch(url);


      // 5.5) Si la respuesta no es OK (404, 500, etc.), lanzamos un error controlado
      if (!response.ok) {
        throw new Error(`No se encontró el personaje con ID ${parsedId}.`);
      }


      // 5.6) Convertimos la respuesta a JSON
      const data = await response.json();


      /**
       * 5.7) Guardamos los datos del personaje en el estado "character":
       * - data es un objeto con propiedades como id, name, status, species, image, gender, etc.
       * - Al actualizar el estado, React re-renderiza el componente y muestra la información.
       */
      setCharacter(data);
    } catch (err) {
      // 5.8) Si ocurre cualquier error, lo mostramos y limpiamos el personaje previo
      setError(err.message || "Ocurrió un error al cargar el personaje.");
      setCharacter(null);
    }
  };


  /**
   * 6) Render:
   * - Mostramos un input controlado para el ID, un botón para buscar y el resultado.
   * - Condicionalmente renderizamos mensajes de error y la tarjeta del personaje.
   */
  return (
    <div className= "titulo_breve"style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
      {/* 6.1) Título y breve descripción */}
      <h1>Buscar personaje por ID</h1>
      <p>Ingresa un número de ID y presiona "Buscar" para obtener un personaje.</p>


      {/* 6.2) Input controlado:
          - value está vinculado al estado "id"
          - onChange actualiza "id" con lo que escribe el usuario */}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          type="number"
          placeholder="Ingresa un ID (ej: 1)"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ padding: 8, width: 200 }}
        />


        {/* 6.3) Botón que dispara la búsqueda llamando a "fetchCharacter" */}
        <button onClick={fetchCharacter} style={{ padding: "8px 12px" }}>
          Buscar
        </button>
      </div>


      {/* 6.4) Mensaje de error (se muestra solo si "error" tiene contenido) */}
      {error && (
        <p style={{ color: "crimson", marginTop: 12 }}>
          {/* Mostramos el texto de error para guiar al usuario */}
          {error}
        </p>
      )}


      {/* 6.5) Renderizado condicional del personaje:
          - Solo se muestra si "character" no es null (ya se cargó uno) */}
      {character && (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            border: "1px solid #ddd",
            borderRadius: 8,
          }}
        >
          {/* 6.6) Mostramos campos relevantes del objeto devuelto por la API */}
          <h2 style={{ marginBottom: 8 }}>{character.name}</h2>
          <img
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
            style={{ borderRadius: 8, objectFit: "cover" }}
          />
          <ul className="lista">
            <li>
              <strong>Estado:</strong> {character.status}
            </li>
            <li>
              <strong>Especie:</strong> {character.species}
            </li>
            <li>
              <strong>Género:</strong> {character.gender}
            </li>
            <li>
              <strong>Origen:</strong> {character.origin?.name}
            </li>
            <li>
              <strong>Ubicación:</strong> {character.location?.name}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
}

