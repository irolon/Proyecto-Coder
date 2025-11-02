const ChatWidget = () => {
    return (
        <div>
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
        </div>

    )
};

export default ChatWidget;