import {  useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Boton from "../../ejemplos/Boton";
import trashIcon from "../../assets/images/trash.svg";
import EmtpyCart from "./EmtpyCart";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);

  if (cart.length === 0) return <EmtpyCart />;

  return (
    <div>
      <section className="container m-auto mt-20 sm:mt-8 px-4 pt-20 sm:pt-0 text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6">Productos seleccionados</h2>
        <hr className="mx-auto mb-6 w-1/2 sm:w-1/4 border-emerald-500" />

        <ul className="space-y-3">
          {cart.map((item) => (
            <li key={item.id} className="flex flex-col sm:flex-row gap-4 border-b pb-4">
              <img src={item.img} alt="Imagen carrito" className="w-48 mx-auto sm:w-32 sm:mx-0 mb-4 sm:mb-0" />
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <h3 className="text-xl sm:text-2xl font-bold">{item.name}</h3>
                <p className="text-lg sm:text-2xl font-bold">${item.price * item.cantidad}</p>
                <p className="text-lg  font-semibold ">Cantidad: {item.cantidad}</p>
                <div className="mt-3">
                  <Boton className="bg-red-500 w-full sm:w-auto mx-auto" onClick={() => removeItem(item.id)}>
                    <img className="w-4 inline-block mr-2" src={trashIcon} alt="trash icon" />
                    Eliminar
                  </Boton>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <h4 className="mt-4 text-xl sm:text-2xl font-semibold">Total: ${totalCart()}</h4>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <Boton className="bg-red-500 w-full sm:w-auto" onClick={clearCart}>
            Vaciar carrito
          </Boton>
          <Boton className="w-full sm:w-auto">
            <Link to="/checkout">Terminar mi compra</Link>
          </Boton>
        </div>
      </section>
    </div>
  );
};

export default CartView;
