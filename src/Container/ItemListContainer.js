import React from "react";
import ItemCount from "../Componentes/ItemCount/ItemCount";
export const ItemListContainer=({greeting, mensaje}) =>{
    const onAdd= (count) => {
        console.log( `El usuario quier agregar ${count}productos `);
    };
    return (
        <>
        <h1 className="mensaje">{greeting}</h1>
        <h1>{mensaje}</h1>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </>
    )
};
