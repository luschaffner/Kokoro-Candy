import React from "react";

const Item = ({productos}) => {


return (

<div className='candyCard'>
        <div> {productos.title} </div>
        <div> {productos.id} </div>
        <img src={productos.image} />
        </div>

)


}

export default Item;