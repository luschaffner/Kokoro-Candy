import React from "react";
import cartWidget from './cartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const cartWidget = () => {
    return (
    <ShoppingCartIcon className="cart" color="primary" sx={{ fontSize: 40 }}/>
    )
};