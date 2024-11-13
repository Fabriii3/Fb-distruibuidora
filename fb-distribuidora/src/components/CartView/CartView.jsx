import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Boton from "../../ejemplos/Boton"
import trashIcon from "../../assets/images/trash.svg"
// import { Link } from "react-router-dom"
// import { UserContext } from "../../context/UserContext"
import EmtpyCart from "./EmtpyCart"


const CartView = () => {
const { cart , totalCart , clearCart , removeItem} = useContext(CartContext)
// const {user} = useContext(UserContext)

 
if (cart.length === 0) return <EmtpyCart />

return (
    <div>
      <section className="container m-auto mt-8 px-4">
        <h2 className="text-2xl sm:text-4xl font-semibold">Tu compra</h2>
        <hr />
  
        <ul className="space-y-3"> {/* Reducido espacio entre los elementos */}
          {
            cart.map((item) => (
              <li key={item.id} className="flex flex-col sm:flex-row gap-4 border-b pb-4">
                {/* Imagen más grande en móviles */}
                <img src={item.img} alt="Imagen carrito" className="w-48 mx-auto sm:w-32 sm:mx-0" /> {/* Aumenté el tamaño a w-48 */}
                <div className="text-center sm:text-left mt-2 sm:mt-0">
                  <h3 className="text-xl sm:text-2xl font-bold">{item.name}</h3>
                  <p className="text-lg sm:text-2xl font-bold">${item.price * item.cantidad}</p>
                  <p className="text-lg m:text-lg">Cantidad: {item.cantidad}</p>
  
                  {/* Botón de remover debajo de la información */}
                  <div className="mt-3">
                    <Boton className="bg-red-500 w-full sm:w-auto mx-auto" onClick={() => removeItem(item.id)}>
                      <img className="w-4 inline-block mr-2" src={trashIcon} alt="trash icon" />
                      Eliminar
                    </Boton>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
  
        {/* Total ajustado con márgenes menores */}
        <h4 className="mt-4 text-xl sm:text-2xl font-semibold">Total: ${totalCart()}</h4>
        <div className="mt-4 flex flex-col sm:flex-row gap-2"> {/* Reducido espacio entre botones */}
          <Boton className="bg-red-500 w-full sm:w-auto" onClick={clearCart}>
            Vaciar carrito
          </Boton>
          {/* <Boton className="w-full sm:w-auto">
            <Link to="/checkout">Terminar mi compra</Link>
          </Boton> */}
        </div>
      </section>
    </div>
  );
  
  
  
};

export default CartView;


// if(!user.email)  return <p className="text-4xl font-semibold italic py-12 text-center">No hay usuario registrado </p> ;
{/* <p>Bienvenido : {user.email} </p> */}