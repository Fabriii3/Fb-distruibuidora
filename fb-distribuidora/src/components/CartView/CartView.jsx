import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Boton from "../../ejemplos/Boton"
import trashIcon from "../../assets/images/trash.svg"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import EmtpyCart from "./EmtpyCart"


const CartView = () => {
const { cart , totalCart , clearCart , removeItem} = useContext(CartContext)
const {user} = useContext(UserContext)

  if(!user.email)  return <h2>No hay usuario registrado </h2> ;
  if (cart.length === 0) return <EmtpyCart/>
  

   return (
    <div>
        <section className="container m-auto mt-8 ">
             <p>Bienvenido : {user.email} </p>
             <h2 className="text-4xl font-semibold"> Tu compra </h2>
             <hr />

            <ul>
                 {
                    cart.map((item) => (
                    <li key={item.id} className="flex gap-3 border-b my-4 ">
                        <img src={item.img} alt="Imagen carrito" className="w-32"/>
                        <div>
                            <h3 className="text-2xl font-bold"> {item.name} </h3>
                            <p className="text-2xl font-bold"> ${item.price * item.cantidad  } </p>
                            <p>Cantidad: {item.cantidad} </p>

                            <Boton className="bg-red-500 " onClick={() => removeItem(item.id)} >
                                <img className="w-4" src={trashIcon} alt="trash icon" />
                            </Boton>
                        </div>
                    </li>
                    ))}
            </ul>

            <h4 className="mt-4 text-4xl font-semibold "> Total: ${totalCart()} </h4>
            <Boton className="bg-red-500" onClick={clearCart}> Vaciar carrito </Boton>
            <Boton><Link to="/checkout">Terminar mi compra </Link> </Boton>

        </section>
    </div>
  );
};

export default CartView