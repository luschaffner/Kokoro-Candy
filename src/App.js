import React from "react";
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import itemListConteiner from './Componentes/itemListConteiner/itemListConteiner';


const App = () => {
  const mensaje  = "Kokoro Candy, Los dulces más ricos 💗"
  return (
    <>
      <Navbar/>
      <itemListConteiner greeting= {mensaje}/>
    </>
  );
};

export default App; 