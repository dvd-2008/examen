import { NavLink, Outlet } from "react-router-dom";
import { data } from "../data"

const ZapatillasB = ()=>{
    const {zapatillaZ} = data;
    const estiloPrendid={
        color:'green',
        textDecoration:'none'

    }
    const estiloApagad={
        textDecoration:'none'
    }
return (
    <main>
    <p className="lead fs-2 text-primary">Total de lista de zapatillas a la venta: {zapatillaZ.length}</p>
    <section className="row">
        <div className="col col-5 alert">
            <div className="border border-2 border-primary shadow p-2 alert alert-sucess">
                {
                    zapatillaZ.map((zap) => (
                        <div className="alert alert-dark" key={zap.id}>
                            <p className="lead fs-4 text-primary">
                                <NavLink to={`/p-zapa/${zap.id}`}
                                    style={({isActive})=>(isActive?estiloPrendid:estiloApagad)}
                                >
                                    {zap.marca}
                                </NavLink>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="col col-5">
            <div className="border border-2 border-primary shadow p-2 alert alert-primary">
                <Outlet />
            </div>
        </div>
    </section>

</main>

)


}
export default ZapatillasB