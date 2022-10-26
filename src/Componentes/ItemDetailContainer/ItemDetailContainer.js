import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState,useEffect } from 'react';



const ItemDetailContainer = () => {


    const [productos, setProductosFetch] = useState ([])
    const [loading, setLoading] = useState (true)
     
  
     
     useEffect (() => {
     
       const getItem = async () => {
     
    try {
     
     const res = await fetch ('https://fakestoreapi.com/products/1');
     const data = await res.json ();
     console.log(data);
     
     
    setProductosFetch (data);
       }
       catch {
         console.log("error");
     
       }finally {
         setLoading("false");
       }
     };
     getItem ();
    },[]);
     

return (

    <div> 

      <ItemDetail productos = {productos}/> 
      
    </div>
)






}

export default ItemDetailContainer;
