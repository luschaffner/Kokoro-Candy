import Navbar from './Componentes/Navbar';
import './App.css';
import {Cart} from "./Componentes/Cart/Cart";
import ItemListContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App () {
  return (
    <div className="App">

  <BrowserRouter>
  <Navbar/>


<Routes>
<Route path = "/"/>
<Route path ="/categoria/:id" element = {<ItemListContainer greeting={'Bienvenidos'} mensaje ={ 'amantes de las golosinas'}/>}/>
<Route path ="/producto/:id" element= {<ItemDetailContainer/>}/>
<Route path ="/shop" element= {<Cart/>}/>


</Routes>

</BrowserRouter>


    </div>
  );
}

export default App;