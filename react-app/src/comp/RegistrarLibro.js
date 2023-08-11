import { useState } from "react";
import axios from "axios";

const RegistrarLibro=(props)=>{
    const { url, onListar } = props;

    const objLibro = {
        id: 0,
        nombre: '',
        genero: '',
        autor: '',
        precio:0
    }
    const [libro, setLibro]=useState(objLibro)
    const manejadorControles = (l) => {
        let name = l.target.name;
        let value = l.target.value;

        libro[name] = value;
        setLibro(libro);

    }
    const manejadorSubmit = (l) => {
        l.preventDefault();
        axios.post(`${url}`, libro)
        .then(resp=>{
            document.getElementById('form-emp').reset();
            onListar();
        })
    }
    return (
        <section>
            <p className="text-primary lead fs-4">Registro de Libro </p>
            <form onSubmit={manejadorSubmit} id="form-emp">
                <div className="form-group">
                    <label className="form-label text-primary">Nombre</label>
                    <input type="text" name="nombre" className="form-control" required onChange={manejadorControles} />
                </div>
                <div className="form-group">
                    <label className="form-label text-primary">Genero</label>
                    <input type="text" name="genero" className="form-control" required onChange={manejadorControles} />
                </div>
                <div className="form-group">
                    <label className="form-label text-primary">Autor</label>
                    <input type="text" name="autor" className="form-control" required onChange={manejadorControles} />
                </div>
                <div className="form-group">
                    <label className="form-label text-primary">Precio</label>
                    <input type="text" name="precio" className="form-control" required onChange={manejadorControles} />
                </div>
                <div className="form-group">
                    <button className="btn btn-sm btn-primary mt-3">Registrar</button>
                </div>
            </form>
        </section>
    )


}
export default RegistrarLibro;