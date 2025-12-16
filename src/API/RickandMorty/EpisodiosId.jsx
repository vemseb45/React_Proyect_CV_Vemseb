import { useState } from "react";
import { Link } from "react-router-dom";
import { Film, AlertTriangle } from "lucide-react";
import './EpisodioId.css'; 

const EpisodeById = () => {
  const [id, setId] = useState("");
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");

  const buscar = async () => {
    if (!id) return;
    setError("");
    setEpisode(null);
    setCharacters([]);

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);

      if (!res.ok) throw new Error("No existe un episodio con ese ID");

      const data = await res.json();
      setEpisode(data);

      const charRequests = data.characters.map((url) => fetch(url).then((r) => r.json()));
      const chars = await Promise.all(charRequests);
      setCharacters(chars);

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="episode-wrapper">
      <div className="episode-container">

        <Link to="/" style={{ display: 'block', marginBottom: '1rem', color: '#333', textDecoration: 'none' }}>
           ⬅ Volver
        </Link>

        <h1 className="api-title">
          Buscar <span className="highlight">Episodio</span>
        </h1>

        {/* Tarjeta de Búsqueda */}
        <div className="search-card">
          <label>Ingresa el ID del episodio</label>
          <div className="input-group">
            <input
              type="number"
              placeholder="Ej: 1, 28..."
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button onClick={buscar} className="search-btn">
              <Film size={18} /> Buscar
            </button>
          </div>
        </div>

        {error && (
          <div className="error-msg">
            <AlertTriangle size={20} />
            {error}
          </div>
        )}

        {/* Resultados */}
        {episode && (
          <div className="result-card">
            <div className="episode-header">
              <h2>{episode.name}</h2>
              <p>{episode.air_date} • {episode.episode}</p>
            </div>

            <h3 className="chars-title">Personajes en este episodio:</h3>

            <div className="chars-grid">
              {characters.map((char) => (
                <div key={char.id} className="char-card">
                  <img
                    src={char.image}
                    alt={char.name}
                  />
                  <div className="char-info">
                    <p className="char-name">{char.name}</p>
                    <p className="char-species">{char.species}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeById;