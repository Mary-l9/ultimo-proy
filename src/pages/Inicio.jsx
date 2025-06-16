import React, { useState } from "react";

const danzas = [
  {
    id: "collapseOne",
    titulo: "Diablada",
    descripcion:
      "La Diablada es una danza folklórica típica de Oruro, con máscaras y trajes coloridos que representan una lucha entre el bien y el mal.",
    imagen:
      "https://boliviatravelsite.com/Images/ArticlePhotos/diablada-oruro-carnival-02.jpg",
  },
  {
    id: "collapseTwo",
    titulo: "Morenada",
    descripcion:
      "La Morenada representa la cultura afroboliviana, con trajes elaborados y movimientos lentos y solemnes.",
    imagen:
      "https://ucsp.edu.pe/wp-content/uploads/2023/07/morenada.jpeg",
  },
  {
    id: "collapseThree",
    titulo: "Caporales",
    descripcion:
      "El Caporal es una danza alegre y enérgica, inspirada en los capataces de las haciendas coloniales.",
    imagen:
      "https://kataris26.com/wp-content/uploads/2023/02/caporal-rojo.jpg",
  },
  {
    id: "collapseFour",
    titulo: "Tinku",
    descripcion:
      "El Tinku es una danza ritual que simboliza la lucha y la fertilidad, originaria de la región de Potosí.",
    imagen:
      "https://folkloreboliviano.org/resources/media/picture/full/-20214.jpg",
  },
  {
    id: "collapseFive",
    titulo: "Saya",
    descripcion:
      "La Saya es una danza afroboliviana con ritmo alegre, popular en la región de los Yungas.",
    imagen:
      "https://i.ytimg.com/vi/abHh4sYQB5M/sddefault.jpg",
  },
];

const Inicio = () => {
  const [activeId, setActiveId] = useState("collapseOne");

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? "" : id)); // Cierra si clickeas el abierto
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Texto y acordeón */}
        <div className="col-md-6 text-start">
          <h2>Bienvenido a la Academia de Baile</h2>
          <p>Descubre nuestros cursos y aprende a bailar con los mejores instructores.</p>

          <div className="accordion" id="accordionDanzas">
            {danzas.map(({ id, titulo, descripcion }) => (
              <div className="accordion-item" key={id}>
                <h2 className="accordion-header" id={`heading-${id}`}>
                  <button
                    className={
                      "accordion-button " + (activeId === id ? "" : "collapsed")
                    }
                    type="button"
                    onClick={() => handleToggle(id)}
                    aria-expanded={activeId === id}
                    aria-controls={id}
                  >
                    {titulo}
                  </button>
                </h2>
                <div
                  id={id}
                  className={
                    "accordion-collapse collapse " + (activeId === id ? "show" : "")
                  }
                  aria-labelledby={`heading-${id}`}
                  data-bs-parent="#accordionDanzas"
                >
                  <div className="accordion-body">{descripcion}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen dinámica a la derecha */}
        <div className="col-md-6 text-center">
          <img
            src={
              danzas.find((d) => d.id === activeId)?.imagen ||
              "https://www.eldiario.net/noticias/2015/2015_09/nt150913/f_2015-09-13_10.jpg"
            }
            alt={danzas.find((d) => d.id === activeId)?.titulo || "Baile"}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
