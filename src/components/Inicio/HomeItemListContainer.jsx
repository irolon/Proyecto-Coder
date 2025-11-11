import { useEffect, useState } from "react";
import { getProductos } from "../../assets/mock/AsyncService";
import ItemList from "../Cards/ItemList";
import CardImgCenter from "../Inicio/CardImgCenter";
import BtnVerMas from "../Btn/BtnVerMas";
import LoaderComponent from "../Cards/LoaderComponent";

const HomeListContainer = () => {
    const [prod, setProductos] = useState([]);
    const [mostrarMasPrimera, setMostrarMasPrimera] = useState(false);
    const [mostrarMasSegunda, setMostrarMasSegunda] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        setLoading(true);
        getProductos()
        .then((res)=>setProductos(res))
        .catch((err)=>console.log(err))
        .finally(() => setLoading(false));
    }, []);

    const primerosCuatro = prod.slice(0, 4);
    const segundosCuatro = prod.slice(8, 12);
    const primerosCuatroSmart = prod.slice(4, 8);
    const segundosCuatroSmart = prod.slice(12, 16);

    return (
    <div>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                <h2 className="text-center mb-5">Encontrá tu próximo reloj</h2>
                </div>
            </div>
            {loading ? <LoaderComponent /> : (
                <>
                    <ItemList productos={primerosCuatro}  />
                    <BtnVerMas   visible={!mostrarMasPrimera && prod.length > 4}
                                onClick={() => setMostrarMasPrimera(true)} />
                    {mostrarMasPrimera && (<ItemList productos={segundosCuatro}  />)}
                </>
            )}
        </div>

        <CardImgCenter />
        <div className="container my-5">

            <div className="row">
                <div className="col">
                    <h2 className="text-center mb-5">Encontra tu proximo reloj</h2>
                </div>
            </div>
            {loading ? <LoaderComponent /> : (
                <>
                    <ItemList productos={primerosCuatroSmart} />
                    <BtnVerMas   visible={!mostrarMasSegunda && prod.length > 4}
                                onClick={() => setMostrarMasSegunda(true)} />
                    { mostrarMasSegunda && (<ItemList productos={segundosCuatroSmart}  />)}
                </>
            )}
        </div>
    </div>
    )
}



export default HomeListContainer;
