import { getProductos } from "../../assets/mock/AsyncService";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import CardItem from "./CardItem";
import LoaderComponent from "./LoaderComponent";

const CardDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  
    const fetchProducto = async () => {
      try {
        const data = await getProductos();
        const found = data.find(item => item.id == id); 
        setProducto(found);
      } catch (error) {
        console.error("Error cargando producto:", error);
      }
    }  
    fetchProducto();
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