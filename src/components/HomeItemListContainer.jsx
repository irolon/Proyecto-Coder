import { useEffect, useState } from "react";
import { getProductos } from "../assets/mock/AsyncService";
import ItemList from "./ItemList";
import CardImgCenter from "./CardImgCenter";
import BtnVerMas from "./BtnVerMas";

const HomeListContainer = () => {
    const [prod, setProductos] = useState([]);
    const [mostrarMasPrimera, setMostrarMasPrimera] = useState(false);
    const [mostrarMasSegunda, setMostrarMasSegunda] = useState(false);

    useEffect(() => { 
        getProductos()
        .then((res)=>setProductos(res))
        .catch((err)=>console.log(err))
    }, []);

    const primerosCuatro = prod.slice(0, 4);
    const segundosCuatro = prod.slice(8, 12);
    const primerosCuatroSmart = prod.slice(4, 8);
    const segundosCuatroSmart = prod.slice(12, 16);

    return (
  <div>
    {/* Sección 1 */}
    <div className="container my-5">
        <div className="row">
            <div className="col">
            <h2 className="text-center mb-5">Encontrá tu próximo reloj</h2>
            </div>
        </div>

        <ItemList productos={primerosCuatro}  />

        <BtnVerMas   visible={!mostrarMasPrimera && prod.length > 4}
                     onClick={() => setMostrarMasPrimera(true)} />
        {mostrarMasPrimera && (<ItemList productos={segundosCuatro}  />)}
    </div>

        <CardImgCenter />
        <div className="container my-5">

            <div className="row">
                <div className="col">
                    <h2 className="text-center mb-5">Encontra tu proximo reloj</h2>
                </div>
            </div>
            <ItemList productos={primerosCuatroSmart} />
            <BtnVerMas   visible={!mostrarMasSegunda && prod.length > 4}
                                onClick={() => setMostrarMasSegunda(true)} />
                    {mostrarMasSegunda && (<ItemList productos={segundosCuatroSmart}  />)}
        </div>
    </div>
    )
}



export default HomeListContainer;
