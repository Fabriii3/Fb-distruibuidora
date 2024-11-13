import { Link } from "react-router-dom"
import Boton from "../../ejemplos/Boton"

const EmtpyCart = () => {
  return (
    <div>
      <section className="flex items-center justify-center min-h-screen px-4 pt-24"> 
        <div className="text-center"> {/* Contenedor adicional para el texto */}
          <h2 className="text-2xl sm:text-4xl font-semibold italic">
            Tu carrito está vacío
          </h2>
          <p className="text-lg sm:text-2xl italic my-4">
            Agrega algún producto a tu carrito
          </p>
          <div className="mt-4 flex justify-center text-center">
            <Boton className="w-full  sm:flex-col sm:w-auto">
              <Link to={"/"}>Volver al inicio</Link>
            </Boton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmtpyCart
