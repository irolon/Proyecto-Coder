import { Link } from "react-router-dom";

const CardImgCenter = () => {

const bg = new URL('../../assets/img/img-div-centro.jpg', import.meta.url).href;
    return (
    <section
        className="coleccion position-relative d-flex align-items-center justify-content-center text-center text-white mt-5"
        style={{ background: `url(${bg}) center/cover no-repeat`, minHeight: "60vh" }}>

        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.4)" }}></div>

        <div className="position-relative z-1">
            <h2 className="display-5 fw-bold mb-3">Colección SmartWatch</h2>
            <Link to="/productos-inteligentes" className="btn btn-light btn-lg rounded-pill px-5 py-2 mt-5">DESCUBRIR</Link>
        </div>

    </section>
    );
}

export default CardImgCenter;