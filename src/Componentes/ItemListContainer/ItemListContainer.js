import './ItemListContainer.css';
import React , { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';






export const ItemListContainer =() => {

  const [productos, setProductosFetch] = useState ([])
  const [loading, setLoading] = useState (true)
   
const {id} = useParams ();

const URL_BASE = 'https://fakestoreapi.com/products'
const URL_CATEGORIA =` https://fakestoreapi.com/products/category/${id}`
  useEffect (() => {

    const getItem = async () => {
   
  try {
    const res = await fetch (URL_CATEGORIA);
    const data = await res.json ();

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
   
  

    return(
     <div>
              <h1 className="mensaje">{greeting}</h1>
        <h1>{mensaje}</h1>
     {productos.map((e) =>{
      <ItemList title = {e.title} id = {e.id} image = {e.image}/>
    }
      )
      }
     
        



  

   </div>


   )

}


      export default ItemListContainer;










