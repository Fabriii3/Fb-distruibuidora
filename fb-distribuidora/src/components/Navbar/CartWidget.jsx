import { Link } from "react-router-dom";
import carrito from "../../assets/images/carrito.svg"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget =  () => {
const {itemsInCart} = useContext(CartContext)

    return (
    <Link to="/cart" className="flex items-center gap-1 cursor-pointer"> 
        <img className="w-6" src={carrito}   alt="Carrito de compras" />
        <span className="text-white text-2xl">{itemsInCart()}</span>
    </Link>
   
)
}

export default CartWidget ;



