import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import CardNavView from "./CardNavView";


const CartWidget = ({ onClick, isOpen }) => {
    const { cart, removeItem } = useContext(CartContext);
    
    const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    
    return (
        <div>
            <button className="btn position-relative p-0 btn-carrito" type="button" aria-label="Carrito" onClick={onClick}>
                <i className="bi bi-cart3 fs-3 color-nav"></i>
                {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle comprar rounded-pill bg-danger text-white p-1">
                        {totalItems} 
                    </span>
                )}
            </button>
            <CardNavView cart={cart} removeItem={removeItem} isOpen={isOpen} totalPrice={totalPrice} />
        </div>
        
        
        
    );
}

export default CartWidget;