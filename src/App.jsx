import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Inicio from './pages/Inicio';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import OfertaCursos from './pages/OfertaCursos';

function App() {
  return (
    <div className="text-light bg-dark min-vh-100 d-flex flex-column">
      <Header />
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ofertacurso" element={<OfertaCursos />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
