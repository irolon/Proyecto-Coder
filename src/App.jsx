import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomeListContainer from './components/Inicio/HomeItemListContainer';
import '../src/css/style.css'
import CardForm from './components/Cards/CardForm';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Inicio/ItemListContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SeccionRelojes from './components/Navegacion/SeccionRelojes';


import relojClasico from './Assets/img/Img-reloj-clasico.jpg'
import relojInteligente from './Assets/img/img-div-centro.jpg'
import relojDeportivo from './Assets/img/img-reloj-deportivo.jpg'
import CardDetailContainer from './components/Cards/CardDetailContainer';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">   
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <>
              <ItemListContainer
                titulo="Relojes diseñados para quienes valoran el tiempo"
                subtitulo="Combiná elegancia y precisión en un solo accesorio."
              />
              <HomeListContainer />   
              <CardForm />   
            </>
          } />
          <Route path='/productos-clasicos' element={<SeccionRelojes titulo="Relojes Clasicos" bg={relojClasico} />} />
          <Route path='/productos-deportivos' element={<SeccionRelojes titulo="Relojes Deportivos" bg={relojDeportivo} />} />
          <Route path='/productos-inteligentes' element={<SeccionRelojes titulo="Relojes Inteligentes" bg={relojInteligente} />} />
          <Route path="/productos/:id" element={<CardDetailContainer />} />

          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
