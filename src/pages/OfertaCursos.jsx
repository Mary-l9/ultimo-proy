import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const cursos = [
  {
    titulo: "Folklore",
    descripcion: "Descubre la riqueza cultural de Bolivia a través de sus danzas tradicionales.",
    imagen: "https://img.genially.com/5fb55672e40c6c0f37277500/e04c1df1-ee67-4365-881e-1ba0680ca2f9.jpeg",
    precio: "Bs 150 por mes",
  },
  {
    titulo: "K-pop",
    descripcion: "Aprende coreografías de tus grupos favoritos de K-pop con movimientos modernos y sincronizados.",
    imagen: "https://0.soompi.io/wp-content/uploads/sites/8/2018/02/23111725/bts-concert.jpg",
    precio: "Bs 140 por mes",
  },
  {
    titulo: "Reggaetón",
    descripcion: "Domina el estilo urbano con pasos intensos y sensuales característicos del reggaetón.",
    imagen: "https://www.centrededansedumarais.fr/wp-content/uploads/2018/08/ragga-dancehall-1.jpg",
    precio: "Bs 100 por mes",
  },
];

const OfertaCursos = () => {
  const [show, setShow] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const abrirModal = (curso) => {
    setCursoSeleccionado(curso);
    setShow(true);
  };

  const cerrarModal = () => setShow(false);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Nuestra Oferta de Cursos</h2>

      {cursos.map((curso, index) => (
        <div className="card mb-4" key={index}>
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img
                src={curso.imagen}
                alt={curso.titulo}
                className="img-fluid rounded-start"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{curso.titulo}</h5>
                <p className="card-text">{curso.descripcion}</p>
                <Button variant="primary" onClick={() => abrirModal(curso)}>
                  Ver Precio
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={show} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Precio del Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{cursoSeleccionado?.titulo}</h5>
          <p>{cursoSeleccionado?.precio}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OfertaCursos;
