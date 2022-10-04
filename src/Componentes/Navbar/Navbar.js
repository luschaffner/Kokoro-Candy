import React from "react"
import candy from '../../Asset/candy.png'
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
            <ShoppingCartIcon className="cart" color="primary" sx={{ fontSize: 40 }}/>
        </header>
    );
};

export default Navbar