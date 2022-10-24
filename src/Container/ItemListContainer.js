import React, { useEffect, useState} from "react";
import ItemCount from "../Componentes/ItemCount/ItemCount";

const productos = [
    {nombre:"Alfajor Havanna", id:0, categoria:"Chocolates", stock:75, precio:124, imagen:'../imagenes/Alfajor.png',},
    {nombre:"Chicle Boobaloo Tutti Frutti", id:1, categoria:"Caramelos", stock:150, precio:15, Image:'../imagenes/bubbalooT.png',},
    {nombre:"Chicle Boobaloo Menta", id:2, categoria:"Caramelos", stock:150, precio:15, Image:'../imagenes/bubbalooM.png',},
    {nombre:"Chicle Boobaloo Uva", id:3, categoria:"Caramelos", stock:50, precio:15, Image:'../imagenes/bubbalooU.png',},
    {nombre:"Paleta Chupetón", id:4, categoria:"Chupetines", stock:45, precio:105, Image:'../imagenes/chupeton.png',},
    {nombre:"Chupetín Pico Dulce", id:5, categoria:"Chupetines", stock:100, precio:25, Image:'../imagenes/picodulce.png',},
    {nombre:"Caramelos Flynn Paff", id:6, categoria:"Caramelos", stock:250, precio:78, Image:'../imagenes/flynnpaff.png',},
    {nombre:"Huevo Kinder", id:7, categoria:"Chocolates", stock:70, precio:240, Image:'../imagenes/kinder.png',},
    {nombre:"Kinder Bueno", id:8, categoria:"Chocolates", stock:50, precio:204, Image:'../imagenes/kinderB.png',},
    {nombre:"Kit-Kat", id:9, categoria:"Chocolates", stock:45, precio:140, Image:'../imagenes/kit-kat.png',},
    {nombre:"Kit-Kat Blanco", id:10, categoria:"Chocolates", stock:40, precio:124, Image:'../imagenes/kit-katB.png',},
    {nombre:"M&M Maní", id:11, categoria:"Chocolates", stock:11, precio:350, Image:'../imagenes/m&mP.png',},
    {nombre:"M&M Chocolate", id:12, categoria:"Chocolates", stock:12, precio:350, Image:'../imagenes/m&mC.png',},
    {nombre:"Mogul Ositos", id:13, categoria:"Caramelos", stock:13, precio:70, Image:'../imagenes/mogulM.png',},
    {nombre:"Mogul Extreme", id:14, categoria:"Caramelos", stock:14, precio:90, Image:'../imagenes/mogulE.png',},
    {nombre:"Mogul Moritas", id:15, categoria:"Caramelos", stock:15, precio:120, Image:'../imagenes/mogulMoritas.png',},
    {nombre:"Nerds Rainbow", id:16, categoria:"Caramelos", stock:16, precio:550, Image:'../imagenes/nerdsR.png',},
    {nombre:"Sugus Confitados", id:17, categoria:"Caramelos", stock:120, precio:130, Image:'../imagenes/SugusC.png',},
    {nombre:"Sugus", id:18, categoria:"Caramelos", stock:180, precio:230, Image:'../imagenes/Sugus.png',},
    {nombre:"Oreo", id:19, categoria:"Galletitas", stock:190, precio:180, Image:'../imagenes/oreo.png',},
];
const obtenerProductos= new Promise ((resolve, reject)=>{
    resolve(productos);
}); 

export const ItemListContainer=({greeting, mensaje}) =>{
    const [productos,setProductos]= useState([]);
    useEffect(()=>{
        obtenerProductos
        .them((data)=>{
            setProductos(data)
        })
        .catch((error)=>{
            console.log("algo salio mal");
            console.log(error);
        })
    }, []);

    const onAdd= (count) => {
        console.log( `El usuario quier agregar ${count}productos `);
    };
    return (
        <>
        <h1 className="mensaje">{greeting}</h1>
        <h1>{mensaje}</h1>
        {
            productos.map((producto)=>{
                return<h2 key={producto.id}>{producto.nombre}</h2>
            })
        }
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </>
    )
};
