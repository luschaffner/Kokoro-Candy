import React from 'react';
import './Navbar.css';
import candy from '../Asset/candy.png'
import { CartWidget } from "../Componentes/CartWidget/cartWidget";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const categorias = [
      {nombre:"Caramelos", id:0, ruta:""},
      {nombre:"Chupetines", id:1, ruta:""},
      {nombre:"Chocolates", id:2, ruta:""},
      {nombre:"Galletitas", id:3, ruta:""},
  ]
  return (
      <header>
        <Link to ="/">        
          <img src={candy} alt="tienda online"/>
          </Link>
          <h1>Kokoro Candy</h1>
          <nav>
              {
                  categorias.map((categoria)=>{
                      return <NavLink key={categoria.id} href={categoria.ruta}>{categoria.nombre}</NavLink>
                  })
              }
          </nav>
          <Link to ="/shop">
            <CartWidget/>
            </Link>
      </header>
  );
};

export default Navbar