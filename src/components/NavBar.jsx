import '../css/Navbar.css';
import CartWidget from './CartWidget';
import ChatWidget from './ChatWidget';
import UserWidget from './UserWidget';

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
                <ChatWidget />
                <UserWidget />
            </div>
        </div>
    </nav>
    );
}

export default NavBar;
