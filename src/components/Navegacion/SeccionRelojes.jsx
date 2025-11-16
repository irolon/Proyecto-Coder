import '../../css/Seccion-2.css';
import ItemList from '../Cards/ItemList';
import { useEffect, useState } from 'react';
import LoaderComponent from '../Cards/LoaderComponent';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../service/firebase';
import { useParams } from 'react-router-dom';



const SeccionRelojes = ({ titulo, bg }) => {
    const [prod, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {type} = useParams();
 
    useEffect(() => {
        setLoading(true);

        const prodCollection = collection(db, "Producto");

        getDocs(prodCollection)
            .then((res) => {
            const productos = res.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProductos(productos);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    let productosFiltrados = [];
    let backgroundImage = '';
    
    if (type === 'clasicos') {
        productosFiltrados = prod.filter(producto => producto.categoria === "Relojes Clasicos");
        backgroundImage = 'https://i.ibb.co/sds3s9Lr/Img-reloj-clasico.jpg';
    } else if (type === 'deportivos') {
        productosFiltrados = prod.filter(producto => producto.categoria === "Relojes Deportivos");
        backgroundImage = 'https://i.ibb.co/GLYLDT2/Img-reloj-deportivo.jpg';
    } else if (type === 'inteligentes') {
        productosFiltrados = prod.filter(producto => producto.categoria === "Relojes Inteligentes");
        backgroundImage = 'https://i.ibb.co/GvP3VmRK/Img-div-centro.jpg';
    }    
    else {
        productosFiltrados = prod;
    }

    return (
        <>
            {type === "clasicos" && (
                <section className="hero2" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
                    <div className="container d-flex justify-content-center align-items-center hero-div-2" >
                        <div className="text-end me-5 mt-5" >
                            <h1 className="display-3 fw-bold mb-3">
                                Relojes Clásicos
                            </h1>
                        </div>
                    </div>
                </section>
            )}
            {type === "deportivos" && (
                <section className="hero2" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
                    <div className="container d-flex justify-content-center align-items-center hero-div-2" >
                        <div className="text-end me-5 mt-5" >
                            <h1 className="display-3 fw-bold mb-3">
                                Relojes Deportivos
                            </h1>
                        </div>
                    </div>
                </section>
            )}
            {type === "inteligentes" && (
                <section className="hero2" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
                    <div className="container d-flex justify-content-center align-items-center hero-div-2" >
                        <div className="text-end me-5 mt-5" >
                            <h1 className="display-3 fw-bold mb-3">
                                Relojes Inteligentes
                            </h1>
                        </div>
                    </div>
                </section>
            )}

  
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                    <h2 className="text-center mb-5">Encontrá tu próximo reloj</h2>
                    </div>
                </div>

                {loading ? <LoaderComponent /> : (
                    <ItemList productos={productosFiltrados}  />
                )}
                

            </div>
        </>
    )
}

export default SeccionRelojes;