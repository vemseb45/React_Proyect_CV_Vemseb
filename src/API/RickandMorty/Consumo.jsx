import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 
import './Consumo.css';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCharacters = async () => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error al cargar personajes", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="consumo-wrapper">
      
      {/* Botón de volver simple */}
      <Link to="/" style={{ textDecoration: 'none', color: '#333', marginBottom: '20px', display: 'inline-block' }}>
         ⬅ Volver al Inicio
      </Link>

      <h1 className="consumo-title">Lista de Personajes</h1>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Cargando personajes...</p>
      ) : (
        <div className="personajes-grid">
          {characters.map((char) => (
            <div key={char.id} className="personaje-card">
              <img
                src={char.image}
                alt={char.name}
              />
              
              <div className="personaje-info">
                <h3>{char.name}</h3>
                <p><strong>Especie:</strong> {char.species}</p>
                <p style={{ color: char.status === 'Alive' ? 'green' : 'red' }}>
                  {char.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharactersList;