import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'


const onAdd = (count) =>{
    console.log(`Agregaste ${count} al carrito`)
  }
  
export const ItemDetail = ({productos}) =>{

  return (

    <div className='candyCard'>
      
       <div> {productos.title} </div>
        <div> {productos.id} </div>
        <img src= {productos.image} />
        <ItemCount stock={8} initial={1} onAdd= {onAdd}></ItemCount>
      
    </div>


  )
}

export default ItemDetail;