import React from 'react';
import './App.css';
import backgroundImage from './backgroundImage.jpg';
import Card from './Card.js';
import Ajout from './Ajout.js';
import Rech from './Rech.js';
import Trailer from './Trailer.js';   // ✅ import Trailer
import movies from './Movies.js';     // ✅ import movies
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Ajout />
      <Rech />

      <Routes>
        {/* Trailer avec les films */}
        <Route path="/trailer/:id" element={<Trailer movies={movies} />} />

        {/* Page principale */}
        <Route path="/home" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
