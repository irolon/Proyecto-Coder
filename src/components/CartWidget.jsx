
const CartWidget = () => {
    return (
        <button className="btn position-relative p-0 btn-carrito" type="button" aria-label="Carrito">
            <i className="bi bi-cart3 fs-3 color-nav"></i>
            <span className="position-absolute top-0 start-100 translate-middle comprar rounded-pill bg-danger text-white p-1">
            0 <span className="visually-hidden">productos en el carrito</span>
            </span>
        </button>
    );
}

export default CartWidget;