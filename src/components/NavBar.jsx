import '../css/Navbar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container d-flex justify-content-between">

            <div className="logo">

                <a href="#" className="navbar-brand d-flex align-items-center">
                 <span className="logo-svg" aria-label="marca"></span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                    aria-controls="menu" aria-expanded="false" aria-label="Mostrar - Ocultar menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href="#" className="nav-link color-nav">Nosotros</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle color-nav" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="dropdown-menu">
                            Productos
                        </a>

                        <ul className="dropdown-menu mt-2" aria-labelledby="dropdown-menu" >
                            <li><a href="#" className="dropdown-item color-nav"> Relojes Clasicos</a></li>
                            <li><a href="#" className="dropdown-item color-nav"> Relojes Deportivos</a></li>
                            <li><a href="#" className="dropdown-item color-nav"> Relojes Inteligentes</a></li>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link color-nav">Novedades</a>
                    </li>

                </ul>
            </div>
            <div className="d-flex align-items-center gap-2 position-relative">
                <CartWidget />

                <button className="btn p-0 ms-3 position-relative btn-consulta" type="button" aria-label="Chat" id="btn-chat">
                <i className="bi bi-chat-dots fs-3 color-nav"></i>
                <span className="position-absolute top-0 start-100 translate-middle  chat-consulta rounded-pill bg-danger text-white p-1">
                    0 <span className="visually-hidden">mensajes en el chat</span>
                </span>
                </button>

                <div className="contenedor-consulta esconder-consulta">
                    <div className="carrito-consultas">
                            <div className="carrito-items-consultas">
                                <h3 className="text-center ">Consultas: </h3>

                                <div className="info-consultas">
                            </div>
                        </div>
                    </div>
                </div>
                
                <button className="btn p-0 ms-3" type="button" aria-label="Perfil">
                    <i className="bi bi-person-circle fs-3 color-nav"></i>
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
        </div>
    </nav>
    );
}

export default NavBar;
