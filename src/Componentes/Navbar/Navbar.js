import React from "react"
import candy from '../../Asset/candy.png'
import './Navbar.css'
import { CartWidget } from "../CartWidget/cartWidget";

const Navbar = () => {
    const categorias = [
        {nombre:"Caramelos", id:0, ruta:""},
        {nombre:"Chupetines", id:1, ruta:""},
        {nombre:"Chocolates", id:2, ruta:""},
        {nombre:"Galletitas", id:3, ruta:""},
    ]
    return (
        <header>
            <img src={candy} alt="tienda online"/>
            <h1>Kokoro Candy</h1>
            <nav>
                {
                    categorias.map((categoria)=>{
                        return <a key={categoria.id} href={categoria.ruta}>{categoria.nombre}</a>
                    })
                }
            </nav>
            <CartWidget/>
        </header>
    );
};

export default Navbar