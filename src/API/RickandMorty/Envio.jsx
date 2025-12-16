import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import './Envio.css';

const CharacterById = () => {
  const [id, setId] = useState("");
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState("");

  const buscar = async () => {
    if(!id) return;
    setError("");
    setCharacter(null);

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      
      if (!res.ok) throw new Error("No existe un personaje con ese ID");

      const data = await res.json();
      setCharacter(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="envio-wrapper">
      
      <Link to="/" style={{ alignSelf: 'flex-start', marginBottom: '1rem', color: '#333', textDecoration: 'none' }}>
         ⬅ Volver
      </Link>

      <h1 style={{ marginBottom: '2rem', color: '#1e293b' }}>Buscar Personaje por ID</h1>

      {/* Sección del Buscador */}
      <div className="search-section">
        <input
          type="number"
          placeholder="Ej: 1, 2, 100..."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={buscar}>
          <Search size={16} style={{ marginRight: '5px' }}/> Buscar
        </button>
      </div>

      {error && (
        <div style={{ color: 'red', marginTop: '1rem', fontWeight: 'bold' }}>
          ⚠️ {error}
        </div>
      )}

      {/* Tarjeta de Resultado Grande */}
      {character && (
        <div className="resultado-card">
          <img
            src={character.image}
            alt={character.name}
          />

          <div className="resultado-info">
            <h2>{character.name}</h2>
            <div>
                <span className="info-tag">{character.species}</span>
                <span className="info-tag">{character.gender}</span>
            </div>
            <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#2563eb' }}>
                Estado: {character.status}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterById;