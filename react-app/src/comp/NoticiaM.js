import { useEffect, useState } from "react";

const NoticiaM=({noticias})=>{
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % noticias.length);
        }, 5000);
    
        return () => clearInterval(timer);
      }, [noticias.length]);

return(

    <div className="card">
        <div className="card-body card text-dark shadow lead fs-4 text-center">
         
        <h5 className=" lead fs-1 card-title ">Noticias </h5>
        {noticias.length > 0 && (
            <div>
             <table className="table table-striped">
            <p className="lead fs-4 card-text text-dark text-center"> {noticias[index].tipo}</p>
            <p className="lead fs-4 card-text text-dark">TITULAR:<br/> {noticias[index].titulo}</p>
            
            <p className="lead fs-4 card-text text-primary"> {noticias[index].argumento}</p>
           
            </table>
            <tr/>
            <p className="lead fs-4 card-text text-primary"> <img src={noticias[index].imagen} alt="imagen" className="img-fluid" /></p>
            

            </div>





        )}


        </div>

    </div>
)

}
export default NoticiaM;