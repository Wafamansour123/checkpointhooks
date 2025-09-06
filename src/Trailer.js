import React from "react";
import { useParams } from "react-router-dom";

const Trailer = ({ movies }) => {
  const { id } = useParams(); // récupère l'id depuis l'URL
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return <h2>Film introuvable</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
