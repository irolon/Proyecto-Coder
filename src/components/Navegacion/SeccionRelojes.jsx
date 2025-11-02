import '../../css/Seccion-2.css';
import ItemList from '../Cards/ItemList';
import { useEffect, useState } from 'react';
import { getProductos } from '../../assets/mock/AsyncService';


const SeccionRelojes = ({ titulo, bg }) => {
    const [prod, setProductos] = useState([]);

    useEffect(() => { 
        getProductos()
        .then((res)=>setProductos(res))
        .catch((err)=>console.log(err))
    }, []);    
    
    const productosFiltrados = prod.filter((producto) => producto.categoria === titulo);

    return (
        <div>
            <section className="hero2" style={{ background: `url(${bg}) center/cover no-repeat` }}>
                <div className="container d-flex justify-content-center align-items-center hero-div-2" >
                    <div className="text-end me-5 mt-5" >
                        <h1 className="display-3 fw-bold mb-3">
                            {titulo}
                        </h1>
                    </div>
                </div>

            </section>   
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                    <h2 className="text-center mb-5">Encontrá tu próximo reloj</h2>
                    </div>
                </div>

                <ItemList productos={productosFiltrados}  />

            </div>                     
        </div>



    )
}

export default SeccionRelojes;