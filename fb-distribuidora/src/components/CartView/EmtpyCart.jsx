import { Link } from "react-router-dom"
import Boton from "../../ejemplos/Boton"



const EmtpyCart = () => {
   return (
    <div>
         <section className="container m-auto mt-8 ">
                   <h2 className="text-4xl font-semibold italic"> Tu carrito esta vacio </h2>
                   <p  className="text-4xl italic my-4 " >Agrega algun producto a tu carrito </p>
                   <Boton><Link to={"/"}>Volver</Link></Boton>  
          </section>
    </div>
  )
}

export default EmtpyCart