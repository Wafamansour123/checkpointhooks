import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function SearchFilm() {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [results, setResults] = useState([]);

  const films = ["Titanic", "Inception", "Avatar", "Interstellar", "Gladiator", "Bright"];

  const handleSearch = (value) => {
    setQuery(value);
    if (value === "") {
      setResults([]);
    } else {
      const filtered = films.filter((film) =>
        film.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
  
      <div style={{ marginBottom: "10px" }}>
        {[1, 2, 3, 4].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray", marginRight: "5px" }}
            onClick={() => setRating(star)}
          />
        ))}
        <span style={{ marginLeft: "10px" }}>Note : {rating} / 4</span>
      </div>

    
      <input
        type="text"
        placeholder="Tape le nom du film"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ padding: "5px", width: "200px", marginBottom: "10px" }}
      />

     
      <ul>
        {results.map((film, index) => (
          <li key={index}>{film}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilm;
