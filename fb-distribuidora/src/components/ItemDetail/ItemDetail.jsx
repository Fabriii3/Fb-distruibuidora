import { useState } from "react";
import Boton from "../../ejemplos/Boton";
import QuantitySelector from "./QuantitySelector";

 
const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState (1)


  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad
    }

    
  }

  return (
  <div className="container m-auto mt-8">
      <h3 className="text-2x1 font-semibold">{item.name}</h3>
    <hr/>

    <div className="flex gap-8">
        <img src={item.img} alt={item.name} />
      <div>
        <p> {item.description}</p>
        <p className="text-xl font-bold"> Precio: ${item.price}</p>
       
        <QuantitySelector
        cantidad={cantidad}
        stock={item.stock}
        setCantidad={setCantidad}
        />
      

        <Boton className="bg-emerald-500" onClick={handleAgregar}> Agregar al carrito</Boton>
      </div>
    </div>
  </div>
  );
};

export default ItemDetail;