import { Link, Route, Routes } from "react-router-dom";

import TablaCine from "./TablaCine";
import ZapatillasB from "./ZapatillasB";
import ZapatillaB from "./ZapatillaB";
import NumeroPrimo from "./NumeroPrimo";
import TablaNoticia from "./TablaNoticia";
import GestorLibros from "./GestorLibros";
import Home from "./Home";
const Menu = () => {
    
    return (
        <header className="container">
            <p className="text-primary text-center lead fs-1 card-title">PROYECTOS DE DAVID HUAMAN</p>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                           
                          
                           
                            <li className="nav-item">
                                <Link className="nav-link active" to="/LIBROS">LIBROS</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link active" to="/p-zapa">zapatillas</Link>
                            </li>
                        
                            <li className="nav-item">
                                <Link className="nav-link active" to="/cine">cine</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/numero-primo">Primo</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link active" to="/noticias">noticias   </Link>
                            </li>
                        

                            
                        </ul>
                    </div>
                </div>
            </nav>

        {/* rutas */}
        <Routes>
           
            <Route path="cine" element={<TablaCine/>}/>

          
            <Route path="LIBROS" element={<GestorLibros/>}/>

           
            <Route path="noticias" element={<TablaNoticia/>}/>
          


            <Route path="p-zapa" element={<ZapatillasB/>}>
                <Route path=":id" element={<ZapatillaB/>}/>
            </Route>
          
            <Route path="numero-primo" element={<NumeroPrimo/>}/>
           
        
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<p className="alert alert-danger mt-2 lead fs-2">Pagina no encontrada</p>}/>
        </Routes>

        </header>
    )

}
export default Menu;