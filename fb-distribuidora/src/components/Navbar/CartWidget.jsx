import { Link } from "react-router-dom";
import carrito from "../../assets/images/carrito.svg"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const CartWidget = ({ setOpen }) => {
  const { itemsInCart } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className={`flex px-5 gap-1 cursor-pointer font-semibold`}
      onClick={() => setOpen(false)} // Cierra el menú cuando se hace clic en el carrito
    >
      <img className="w-8" src={carrito} alt="Carrito de compras" />
      <span className="hover:text-emerald-800 duration-500 text-white text-2xl">{itemsInCart()}</span>
    </Link>
  );
};

export default CartWidget;




