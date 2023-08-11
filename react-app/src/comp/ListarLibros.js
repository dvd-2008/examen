const ListarLibros=(props)=>{
    const {libros,onEliminar,onEditar}=props;

    return(
        <section>
        <p className="lead fs-4 text-primary">Listado de Libros: {libros.length}</p>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>LIBRO</th>
                    <th>GENERO</th>
                    <th>AUTOR</th>
                    <th>PRECIO</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    libros.map((lib) => (
                        <tr key={lib.id}>
                            <td>{lib.nombre}</td>
                            <td>{lib.genero}</td>
                            <td>{lib.autor}</td>
                            <td>{lib.precio}</td>
                            <td>
                                <button className="btn btn-sm btn-warning"
                                    data-bs-toggle="modal" data-bs-target="#modal"
                                   onClick={()=>onEditar(lib)} >
                                    Editar
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => onEliminar(lib)} >Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </section>








    )


}
export default ListarLibros;