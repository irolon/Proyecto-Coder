import { getProductos } from "../../assets/mock/AsyncService";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import CardItem from "./CardItem";

const CardDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await getProductos();
        const found = data.find(item => item.id == id); 
        setProducto(found);
      } catch (error) {
        console.error("Error cargando producto:", error);
      }
    };
    fetchProducto();
  }, [id]);



  return (
    <div className="container my-5">
      {producto ? (
        <div className="row justify-content-center">
          <CardItem producto={producto} />
        </div>
      ) : (
        <p className="text-center p-5">Cargando producto...</p>
      )}
    </div>
  );
};

export default CardDetailContainer;