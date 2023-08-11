import axios from "axios";
import { useEffect, useState } from "react";
import ListarLibros from "./ListarLibros";
import RegistrarLibro from "./RegistrarLibro";

const GestorLibros=()=>{

    const url="http://localhost:3001/libros";
    const[libros,setLibros]=useState([]);
    const listaLibro=()=>{
        axios.get(`${url}`)
        .then(resp=>{
            setLibros(
                resp.data
            )
        })
    }
useEffect(()=>{
    listaLibro()
},[])

const eliminarLibro=(libro)=>{
    let confirmar=window.confirm(`Desea Eliminar el libro ${libro.nombre} cuyo ${libro.precio}?`);
    if (confirmar){
        axios.delete(`${url}/${libro.id}`)
            .then(resp=>{
                listaLibro();
            })
    }
}
const editarLibro =(lib)=>{
    document.getElementById("id").value=lib.id;
    document.getElementById("nombre").value=lib.nombre;
    document.getElementById("genero").value=lib.genero;
    document.getElementById("autor").value=lib.autor;
    document.getElementById("precio").value=lib.precio;
}
const actualizarLibro=(l)=>{
    l.preventDefault();
    let id=document.getElementById("id").value;
    const objLibro={
        nombre:document.getElementById("nombre").value,
        genero:document.getElementById("genero").value,
        autor:document.getElementById("autor").value,
        precio:document.getElementById("precio").value
    }

    axios.put(`${url}/${id}`,objLibro)
    .then(resp=>{
        listaLibro();
    })
}


return(
    <main>
        <div className="row">
            <p className="lead fs-2 text-primary">Gestor de Libros</p>
            <div className="col col-7 border border-2 border-primary shadow m-2 p-2">
                <ListarLibros libros={libros} onEliminar={eliminarLibro} onEditar={editarLibro}/>
            </div>
            <div className="col col-4 border border-2 border-primary shadow m-2 p-2">
                <RegistrarLibro url={url} onListar={listaLibro}/>
            </div>
        </div>

        {/* modal */}
        <div className="modal fade" id="modal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="false">
            <div className="modal-dialog">
                <form onSubmit={actualizarLibro}>
                    <div className="modal-content">

                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Actualizar Libro</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <input type="hidden" id="id"/>
                                <label className="lead fs-4 text-primary">Nombre</label>
                                <input type="text" id="nombre" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label className="lead fs-4 text-primary">Genero</label>
                                <input type="text" className="form-control" id="genero"/>
                            </div>

                            <div className="form-group">
                                <label className="lead fs-4 text-primary">Autor</label>
                                <input type="text" className="form-control" id="autor"/>
                            </div>
                            <div className="form-group">
                                <label className="lead fs-4 text-primary">Precio: s/</label>
                                <input type="text" className="form-control" id="precio"/>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-sm btn-warning mt-2 mb-2" data-bs-dismiss="modal">Actualizar</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>


    </main>
)





}
export default GestorLibros;