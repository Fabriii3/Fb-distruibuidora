import { Link } from "react-router-dom";
import Boton from "../../ejemplos/Boton";

const ItemCard = ({ item }) => {
  return (
    <article className="flex flex-col items-center w-full max-w-sm sm:w-80 px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-12 sm:mt-20 sm:transform sm:transition-all sm:hover:scale-105 sm:hover:shadow-xl sm:duration-300">
      {/* Imagen ajustada con bordes redondeados y animación de opacidad */}
      <img 
        className="object-cover object-center mt-3 rounded-lg w-full h-40 sm:h-52 lg:h-72 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-90" 
        src={item.img} 
        alt={item.name} 
      />
      <div className="p-4 sm:p-6">
        {/* Nombre del producto con mayor estilo */}
        <h3 className="text-lg sm:text-2xl font-bold italic text-center text-gray-800 sm:hover:text-emerald-600 sm:transition-colors sm:duration-300 mt-3 sm:mt-4">
          {item.name}
        </h3>
        <hr className="my-2 border-t-2 border-emerald-500 w-20 mx-auto" />
  
        {/* Disponibilidad del producto */}
        {item.stock <= 10 && 
          <p className="font-bold text-red-500 text-xs sm:text-base text-center mt-2">
            ¡Quedan solo {item.stock} unidades!
          </p>
        }
        
        {/* Precio */}
        <p className="mt-1 text-base sm:text-lg font-semibold text-gray-900 text-center"> 
          Precio: <span className="text-emerald-600">${item.price}</span>
        </p>
        
        {/* Botón de "Ver más" con un efecto suave */}
        <div className="flex justify-center mt-3 sm:mt-4">
          <Boton className="bg-emerald-600 px-4 py-2 rounded-lg text-white font-medium text-sm sm:text-base sm:hover:bg-emerald-700 sm:transition-colors sm:duration-300">
            <Link to={`/item/${item.id}`}>Agregar al carrito</Link>
          </Boton>
        </div>
      </div>
    </article>
  );
  
  
  
  
};

export default ItemCard;













