import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Boton from "../../ejemplos/Boton"
import trashIcon from "../../assets/images/trash.svg"


const CartView = () => {
const { cart , totalCart , clearCart , removeItem} = useContext(CartContext)

   return (
    <div>
        <section className="container m-auto mt-8 ">
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

                            <Boton onClick={() => removeItem(item.id)} >
                                <img className="w-4" src={trashIcon} alt="trash icon" />
                            </Boton>
                        </div>
                    </li>
                    ))
                 }
            </ul>

            <h4 className="mt-4 text-4xl font-semibold "> Total: ${totalCart()} </h4>
            <Boton onClick={clearCart}> Vaciar carrito </Boton>
        </section>
    </div>
  )
}

export default CartView