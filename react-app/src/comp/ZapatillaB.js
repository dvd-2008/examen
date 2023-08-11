import { useParams } from "react-router-dom";
import { data } from "../data";

const ZapatillaB=()=>{
const {id}=useParams();
const {zapatillaZ}=data;
const zapatilla = zapatillaZ.find((z)=>z.id===Number(id));

return(
    <div className="alert alert-dark">
    <p className="lead fs-1">Precio S/. {zapatilla.precio}</p>
    <div className="card">
     <div className="card-header bg-primary text-white">
         {zapatilla.marca}
     </div>
     <div className="card-body">
         <img src={zapatilla.imagen} alt="imagen" className="img-fluid" style={{'width':'50%'}}/>
     </div>
     <div className="card-footer bg-primary text-white">
         Descripcion : {zapatilla.descripcion}
     </div>
    </div>     
 </div>




)
}
export default ZapatillaB;