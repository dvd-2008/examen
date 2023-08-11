
import React, { useState, useEffect } from "react";

const Mejorpeli = ({ peliculas }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % peliculas.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [peliculas.length]);

  return (
    <div className="card">
      <div className="card-body card text-dark shadow lead fs-4">
        <h5 className=" lead fs-1 card-title ">Pelicula con mayor valoración</h5>
        {peliculas.length > 0 && (
          <div>
            <table className="table table-striped">
            <th className="lead fs-4 card-text text-primary">Nombre: {peliculas[index].nombre}</th>
            
            <th className="lead fs-4 card-text text-primary">País: {peliculas[index].pais_de_origen}</th>
            <th className="lead fs-4 card-text text-primary">Valoración: {peliculas[index].valoracion}</th>
            </table>
            <tr/>
            <p className="lead fs-4 card-text text-primary"> <img src={peliculas[index].imagen} alt="imagen" className="img-fluid" /></p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Mejorpeli;
