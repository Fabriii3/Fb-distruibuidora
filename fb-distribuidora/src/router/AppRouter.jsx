// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CartView from "../components/CartView/CartView";
import Checkout from "../components/Checkout/Checkout";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
// import LoginScreen from "../components/LoginScreen/LoginScreen";
import Navbar from "../components/Navbar/Navbar";

import Footerfb from "../components/Footerfb/Footerfb";
// import NotFound from "../components/NotFound/NotFound";


const AppRouter = () => {
  // const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />

     
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/productos/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />


          {/* <Route path="/not-found" element={<NotFound/>} /> */}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      

       <Footerfb/>

    </BrowserRouter>
  );
};

export default AppRouter;

// {user.logged ? (

// ) : (
//   <Routes>
//      <Route path="/login" element={<LoginScreen />} />
//      <Route path="*" element={<Navigate to="/login" />} />
//    </Routes>
//  )}