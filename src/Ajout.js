import React, { useState } from 'react';
import './Card.css';
import './Ajout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHeart, faComment, faPlay } from '@fortawesome/free-solid-svg-icons';

const HeartIcon = () => {
  const [liked, setLiked] = useState(false);
  return (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={() => setLiked(!liked)}
      style={{ color: liked ? 'red' : 'gray', cursor: 'pointer' }}
    />
  );
};

const Card = () => {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);

  const [newMovie, setNewMovie] = useState({
    title: '',
    year: '',
    director: '',
    duration: '',
    type: '',
    image: '',
    description: '',
    trailer: '' // 🎯 Nouveau champ pour la bande-annonce
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = () => {
    if (!newMovie.title) return;
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
    setNewMovie({
      title: '',
      year: '',
      director: '',
      duration: '',
      type: '',
      image: '',
      description: '',
      trailer: ''
    });
    setShowList(true);
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)} style={{ margin: '10px 0' }}>
        {showForm ? 'Fermer' : 'Ajouter un film'}
      </button>

      {showForm && (
        <div className="add_movie_form">
          <input name="title" placeholder="Titre" value={newMovie.title} onChange={handleChange} />
          <input name="director" placeholder="Réalisateur" value={newMovie.director} onChange={handleChange} />
          <input name="year" placeholder="Année" value={newMovie.year} onChange={handleChange} />
          <input name="duration" placeholder="Durée" value={newMovie.duration} onChange={handleChange} />
          <input name="type" placeholder="Type" value={newMovie.type} onChange={handleChange} />
          <input name="image" placeholder="URL Image" value={newMovie.image} onChange={handleChange} />
          <input name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} />
          <input name="trailer" placeholder="Lien bande-annonce (YouTube...)" value={newMovie.trailer} onChange={handleChange} /> {/* 🎯 Champ bande-annonce */}
          <button onClick={handleAddMovie}>Ajouter</button>
        </div>
      )}

      {showList && (
        <div className="movie_list">
          {movies.map(movie => (
            <div key={movie.id} className="movie_card">
              <div className="info_section">
                <div className="movie_header">
                  <img className="locandina" src={movie.image} alt={movie.title} />
                  <h1>{movie.title}</h1>
                  <h4>{movie.year}, {movie.director}</h4>
                  <span className="minutes">{movie.duration}</span>
                  <p className="type">{movie.type}</p>
                  <p className="text">{movie.description}</p>
                </div>

                {}
                {movie.trailer && (
                  <div style={{ margin: '10px 0' }}>
                    <a
                      href={movie.trailer}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '8px 12px',
                        backgroundColor: '#ff4c4c',
                        color: 'white',
                        borderRadius: '5px',
                        textDecoration: 'none'
                      }}
                    >
                      <FontAwesomeIcon icon={faPlay} /> Voir la bande-annonce
                    </a>
                  </div>
                )}

                <div className="movie_social">
                  <ul>
                    <li><FontAwesomeIcon icon={faShare} /></li>
                    <li><HeartIcon /></li>
                    <li><FontAwesomeIcon icon={faComment} /></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
