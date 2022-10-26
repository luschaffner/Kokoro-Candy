import React , {useState} from 'react';




export const ItemCount = ({stock, initial , onAdd}) => {


const [count,setCount] = useState (initial);


 

const handlerClickSum = () =>{

     if (count < stock) {
    setCount (count + 1 )
 
 
}
  
};

const handlerClickRest = () => {
    if (count > initial) {
        setCount (count - 1);
     
     
    }
 
  


};

const handlerClickReset = () => {
     
    setCount (1);
 

};

const handlerClickAddtoCart = () => {
    onAdd (count) ;
 
   


};




return (
    <div className="buttonClickCount">
        <h1>{count}</h1>
        <button onClick={handlerClickSum}> sumar</button>
        <button onClick={handlerClickRest}> restar</button>
        <button onClick={handlerClickReset}> resetear</button>
        <button disabled = {stock === 0} onClick={handlerClickAddtoCart}> 
        <span>
        {stock === 0 ? 'No hay más stock ' : 'Agregar al carrito'

        }
        </span>
        </button>


    </div>
);



};
