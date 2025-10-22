const Item = ({ producto }) => {
 
    const imgUrl = new URL(`../assets/img/Img-reloj-${producto.id}.jpg`, import.meta.url).href;

    return (
        <div className="col-12 col-sm-6 col-md-3 mb-4 reloj"> 
            <div className="card h-100 border-0" >
                <img src={imgUrl} className="card-img-top" alt={producto.modelo} />
                <div className="card-body d-flex flex-column align-items-center ">
                    <h5 className="card-title">{producto.marca} - {producto.modelo}</h5>
                    <p className="card-text text-center">{producto.descripcion}</p>
                    <p className="card-text fw-bold">${producto.precio}</p>
                    <a href="#" className="btn btn-primary mt-auto">Ver detalle</a>
                </div>
            </div>
        </div>
        
   
);

};

export default Item;