import { Link } from "react-router-dom"
import Boton from "../../ejemplos/Boton"


const EmtpyCart = () => {
  return (
    <div>
      <section className="container m-auto mt-16 px-4 pt-24"> {/* Añadido padding-top */}
        <h2 className="text-2xl sm:text-4xl font-semibold italic text-center">
          Tu carrito está vacío
        </h2>
        <p className="text-lg sm:text-2xl italic my-4 text-center">
          Agrega algún producto a tu carrito
        </p>
        <div className="mt-4 flex justify-center">
          <Boton className="w-full sm:w-auto">
            <Link to={"/"}>Volver</Link>
          </Boton>
        </div>
      </section>
    </div>
  );
}




export default EmtpyCart