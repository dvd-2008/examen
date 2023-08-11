import { data } from "../data";
import Mejorpeli from "./Mejorpeli";

const TablaCine = () => {
  const { peliculasE, peliculasA, peliculasC } = data;
  return (
    <div className="container mt-4 ">
      <div className="border border-4 border-primary shadow p-2">
        <h1 className="lead fs-2 text-center bg-primary text-white p-2">
          Películas de Estreno
        </h1>
        <div className="row">
          <div className="card text-white shadow lead fs-4">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCION</th>
                  <th>PAIS</th>
                  <th></th>
                  <th>VALORACION</th>
                </tr>
              </thead>
              <tbody>
                {peliculasE.map((pelicula) => (
                  <tr key={pelicula.id}>
                    <td>{pelicula.id}</td>
                    <td>{pelicula.nombre}</td>
                    <td>{pelicula.descripcion}</td>
                    <td>{pelicula.pais_de_origen}</td>
                    <td>
                      <img
                        src={pelicula.imagen}
                        alt="imagen"
                        className="img-thumbnail mx-auto d-block"
                        style={{ width: "25%" }}
                      />
                    </td>
                    <td>{pelicula.valoracion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h1 className="lead fs-2 text-center bg-danger text-white p-2">
          Películas de Accion
        </h1>
        <div className="row">
          <div className="card text-white shadow lead fs-4">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCION</th>
                  <th>PAIS</th>
                  <th></th>
                  <th>VALORACION</th>
                </tr>
              </thead>
              <tbody>
                {peliculasA.map((peliculaA) => (
                  <tr key={peliculaA.id}>
                    <td>{peliculaA.id}</td>
                    <td>{peliculaA.nombre}</td>
                    <td>{peliculaA.descripcion}</td>
                    <td>{peliculaA.pais_de_origen}</td>
                    <td>
                      <img
                        src={peliculaA.imagen}
                        alt="imagen"
                        className="img-thumbnail mx-auto d-block"
                        style={{ width: "25%" }}
                      />
                    </td>
                    <td>{peliculaA.valoracion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <h1 className="lead fs-2 text-center bg-warning text-white p-2">
          Películas de Comedia
        </h1>
        <div className="row">
          <div className="card text-white shadow lead fs-4">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCION</th>
                  <th>PAIS</th>
                  <th></th>
                  <th>VALORACION</th>
                </tr>
              </thead>
              <tbody>
                {peliculasC.map((peliculaC) => (
                  <tr key={peliculaC.id}>
                    <td>{peliculaC.id}</td>
                    <td>{peliculaC.nombre}</td>
                    <td>{peliculaC.descripcion}</td>
                    <td>{peliculaC.pais_de_origen}</td>
                    <td>
                      <img
                        src={peliculaC.imagen}
                        alt="imagen"
                        className="img-thumbnail mx-auto d-block"
                        style={{ width: "25%" }}
                      />
                    </td>
                    <td>{peliculaC.valoracion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-4 text-center">
       
                    <Mejorpeli peliculas={[...peliculasA,...peliculasC,...peliculasE]}/>

      

      </div>
    </div>
    
  );
};
export default TablaCine;
