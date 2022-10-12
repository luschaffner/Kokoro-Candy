import React from "react"
import candy from '../../Asset/candy.png'
import './Navbar.css'
import { CartWidget } from "../CartWidget/cartWidget";

const Navbar = () => {
    return (
        <header>
            <img src={candy} alt="tienda online"/>
            <h1>Kokoro Candy</h1>
            <nav>
                <a href="">Caramelos</a>
                <a href="">Chupetines</a>
                <a href="">Chocolates</a>
                <a href="">Galletitas</a>
            </nav>
            <CartWidget/>
        </header>
    );
};

export default Navbar