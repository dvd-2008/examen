import { data } from "../data";
import NoticiaM from "./NoticiaM";

const TablaNoticia=()=>{
const {noticiaD,noticiaI,noticiaN}=data
    return(
        <main className="container">
            <div className="row">
            <div className="col col-4 border border-2 border-primary shadow me-2 alert alert-primary">
               <NoticiaM noticias={[...noticiaN]}/>
            </div>
            <div className="col col-4 border border-2 border-primary shadow me-2 alert alert-danger">
               <NoticiaM noticias={[...noticiaD]}/>
            </div>
            <div className="col col-3 border border-2 border-primary shadow me-2 alert alert-warning">
               <NoticiaM noticias={[...noticiaI]}/>
            </div>

            </div>
        </main>
        
    )


};
export default TablaNoticia;