import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomeListContainer from './components/HomeItemListContainer';
import '../src/css/style.css'
import CardForm from './components/CardForm';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        titulo="Relojes diseñados para quienes valoran el tiempo"
        subtitulo="Combiná elegancia y precisión en un solo accesorio."
      />
      <HomeListContainer />
      <CardForm />
      <Footer />
    </>
  );
}

export default App
