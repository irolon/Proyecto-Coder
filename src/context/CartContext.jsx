import { createContext, useState } from "react";



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const additem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.id === item.id && cartItem.cantidad < cartItem.stock) {
                    return { ...cartItem, cantidad: cartItem.cantidad + cantidad };
                }
                else {
                    alert("No hay suficiente stock disponible");
                    return cartItem;
                }
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const removeTItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    return (<CartContext.Provider value={{cart, additem, removeTItem, clearCart, isInCart}}>
        {children}
    </CartContext.Provider>);
};