import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className="text-white text-center py-5"
      style={{
        backgroundImage: 'url("https://vinilonegro.com/wp-content/uploads/2018/08/BTS-23-e1534783706576.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}
    >
      <div className="container">
        <h1 className="display-3">ACADEMIA DE BAILE</h1>
        <p className="lead">Desarrollado por Mary Luz Choque Copa</p>
        <p className="fst-italic">"Cuando las cosas se pongan dificiles, detengase por un momento y vea lo lejos que ha llegado."</p>
      </div>
    </div>
  );
};

export default Header;


