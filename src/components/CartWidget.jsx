
const CartWidget = () => {
    return (
        <div>
            <button className="btn position-relative p-0 btn-carrito" type="button" aria-label="Carrito">
                <i className="bi bi-cart3 fs-3 color-nav"></i>
                <span className="position-absolute top-0 start-100 translate-middle comprar rounded-pill bg-danger text-white p-1">
                0 <span className="visually-hidden">productos en el carrito</span>
                </span>
            </button>
            <div className="contenedor-carrito esconder-carrito">
                <div className="carrito">
                    <div className="carrito-productos">
                        <div className="carrito-items-contenedor">
                            <h3 className="text-center my-3">Carrito de Compras</h3>
                            <div className="info-carrito">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carrito-total">
                    <div className="carrito-comprar">
                    <h3>Total:</h3>
                    <span className="total-pagar"></span>
                    </div>
                    <button className="btn btn-dark">Comprar</button>
                </div>
            </div>
        </div>
        
        
        
    );
}

export default CartWidget;