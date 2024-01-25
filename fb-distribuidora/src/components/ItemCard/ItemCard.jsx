import { Link } from "react-router-dom";
import Boton from "../../ejemplos/Boton";

const ItemCard = ({item}) => {
    return (
        <article className="w-80 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <img className="object-cover object-center group-hover:opacity-75 mt-4 text-sm my-2 h-60" src={item.img} alt={item.name} />
          <h3 className="text-2xl font-bold italic">{item.name}</h3>
          <hr />
            {item.stock <= 10 && <p className="font-bold text-red-500"> Quedan solo {item.stock} unidades ! </p> }
          <p className="mt-1 text-lg font-medium text-gray-900"> Precio: ${item.price}</p>
        <Boton className="bg-emerald-600" >
          <Link to={`/item/${item.id}`}> Ver más </Link>
        </Boton>
      </article>
      );
  
  
  
};

export default ItemCard;













