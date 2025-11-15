import React from 'react'
import { Link } from 'react-router-dom';

const CardNavView = ({cart, removeItem, isOpen, totalPrice}) => {
  return (
      <div className={`contenedor-carrito ${isOpen ? '' : 'esconder-carrito'}`}>
          <div className="carrito">
              <div className="carrito-productos">
                  <div className="carrito-items-contenedor">
                      <h3 className="text-center my-3">Carrito de Compras</h3>
                      <div className="info-carrito d-flex flex-column gap-3 px-3">
                          {cart.length === 0 ? (
                              <p className="text-center text-muted">Tu carrito está vacío</p>
                          ) : (
                              cart.map((item) => (
                                  <div key={item.id} className="item-carrito mb-3">
                                      <div className="d-flex justify-content-between align-items-center w-100">
                                          <div className='m-3'>
                                                <img src={new URL(`../../assets/img/Img-reloj-${item.id}.jpg`, import.meta.url).href} alt={item.modelo} className="img-carrito" style={{width:'90px'}}/> 
                                          </div>
                                          <div>
                                            <p className="mb-0 text-muted">{item.modelo}</p>
                                          </div>
                                          <div className='m-3 d-flex flex-column'>
                                              <p className="text-muted m-3 text-center">Cantidad: <strong>{item.cantidad}</strong></p>
                                          </div>
                                          <div className="d-flex align-items-center m-3">
                                              <span className="fw-bold">${item.precio * item.cantidad}</span>
                                              <button 
                                                  className="btn btn-sm btn-outline-danger ms-3"
                                                  onClick={() => removeItem(item.id)}>
                                                  <i className="bi bi-trash"></i>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              ))
                          )}
                      </div>
                  </div>
              </div>
          </div>
          {cart.length > 0 && (
              <div className="carrito-total">
                  <div className="carrito-comprar">
                      <p>Total: <strong className="total-pagar fw-bold">${totalPrice.toFixed(2)}</strong></p>
                  </div>
                  <Link to="/cart" className="btn btn-dark">Comprar</Link>
              </div>
          )}
      </div>






  )
}

export default CardNavView