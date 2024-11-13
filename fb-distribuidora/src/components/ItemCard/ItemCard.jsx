import { Link } from "react-router-dom";
import Boton from "../../ejemplos/Boton";

const ItemCard = ({ item }) => {
  return (
    <article className="flex flex-col items-center w-full max-w-sm sm:w-80 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl duration-300 mt-16 sm:mt-24">
      {/* Imagen ajustada con bordes redondeados y animación de opacidad */}
      <img 
        className="object-cover object-center group-hover:opacity-90 mt-4 rounded-lg transition-opacity duration-300 w-full h-48 sm:h-60 lg:h-80" 
        src={item.img} 
        alt={item.name} 
      />
      <div className="p-4">
        {/* Nombre del producto con mayor estilo */}
        <h3 className="text-xl sm:text-2xl font-bold italic text-center text-gray-800 hover:text-emerald-600 transition-colors duration-300 mt-4">
          {item.name}
        </h3>
        <hr className="my-2 border-t-2 border-emerald-500 w-24 mx-auto" />
        
        {/* Disponibilidad del producto */}
        {item.stock <= 10 && 
          <p className="font-bold text-red-500 text-sm sm:text-base text-center mt-2">
            Quedan solo {item.stock} unidades!
          </p>
        }
        
        {/* Precio */}
        <p className="mt-1 text-lg sm:text-xl font-semibold text-gray-900 text-center"> 
          Precio: <span className="text-emerald-600">${item.price}</span>
        </p>
        
        {/* Botón de "Ver más" con un efecto suave */}
        <div className="flex justify-center mt-4">
          <Boton className="bg-emerald-600 px-6 py-2 rounded-lg text-white font-semibold text-sm sm:text-base hover:bg-emerald-700 transition-colors duration-300">
            <Link to={`/item/${item.id}`}>Ver más</Link>
          </Boton>
        </div>
      </div>
    </article>
  );
  
  
  
};

export default ItemCard;













