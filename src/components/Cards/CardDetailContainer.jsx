import { getProductos } from "../../assets/mock/AsyncService";
import { use, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import CardItem from "./CardItem";
import LoaderComponent from "./LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../service/firebase";


const CardDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);


  // useEffect(() => {
  
  //   const fetchProducto = async () => {
  //     try {
  //       const data = await getProductos();
  //       const found = data.find(item => item.id == id); 
  //       setProducto(found);
  //     } catch (error) {
  //       console.error("Error cargando producto:", error);
  //     }
  //   }  
  //   fetchProducto();
  // }, [id]);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "Producto", id);
    getDoc(docRef)
    .then((res) => {
      if(res.data()){
        console.log("Producto encontrado:", res.data());
        setProducto({ id: res.id, ...res.data() });
      }else{
        console.log("No se encontró el producto con ID:", id);
      }
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container my-5">
      {producto ? (
        <div className="row justify-content-center">
          <CardItem producto={producto} />
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
};

export default CardDetailContainer;