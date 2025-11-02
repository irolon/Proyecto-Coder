const CardForm = () => {
    return (
    <div className="container my-5 ">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 div-form">
                <h3 className="text-center mb-4">Consultanos sobre tu producto</h3>
                <form id="formulario-consulta">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tema" className="form-label">Tema</label>
                        <input type="text" className="form-control" id="tema" name="tema" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="consulta" className="form-label">Consultanos sobre las dudas que tengas</label>
                        <textarea className="form-control" id="consulta" name="consulta" rows="4" required></textarea>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-outline-dark rounded-pill fw-bold" >Enviar consulta</button>
                    </div>
                </form>
            </div>
        </div>
    </div>      


    );
}

export default CardForm;