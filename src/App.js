import React from "react";
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';


const App = () => {
  const mensaje  = "Kokoro Candy, Los dulces más ricos 💗"
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting= {mensaje}/>
    </>
  );
};

export default App; 