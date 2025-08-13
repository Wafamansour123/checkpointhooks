import React from 'react';
import './App.css';
import backgroundImage from './backgroundImage.jpg';
import Card from './Card.js'
import Ajout from './Ajout.js'


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
      <Ajout/>
     <Card/> 
     
    </div>
     
  );
}

export default App;
