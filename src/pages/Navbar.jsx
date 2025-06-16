import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container justify-content-center">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item mx-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : ''}`}
              >
                INICIO
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink 
                to="/ofertacurso" 
                className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : ''}`}
              >
                OFERTA DE CURSOS
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
