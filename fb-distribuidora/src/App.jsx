import './App.css'
import "./styles/styles.scss"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartPorvider } from './context/CartContext';
import CartView from './components/CartView/CartView';
import { UserProvider } from './context/UserContext';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <UserProvider>
    
    <CartPorvider>    

    <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />

          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={<CartView/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>


          <Route path="/not-found" element={ <h2>Not found</h2> }/>
          <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
        </Routes>
        
      </BrowserRouter>

  </CartPorvider>  

  </UserProvider>

  );
}



export default App


