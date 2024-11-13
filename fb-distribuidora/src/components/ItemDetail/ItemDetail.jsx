import { useContext, useState } from "react";
import Boton from "../../ejemplos/Boton";
import QuantitySelector from "./QuantitySelector";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const { addToCart, isInCart } = useContext(CartContext);

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
    };

    addToCart(itemToCart);
  };

  const handleVolver = () => {
    navigate(-1);
  };

  const handleSeguirComprando = () => {
    navigate("/"); // O cambiar la ruta por la página de categoría que prefieras
  };

  return (
    <div className="container m-auto mt-8 px-4 sm:px-8" style={{ marginTop: '120px' }}>
      {/* Botón Volver */}
      <Boton
        className="bg-emerald-500 w-full sm:w-auto py-2 text-center mb-4"
        onClick={handleVolver}
      >
        Volver
      </Boton>

      <h3 className="mt-5 text-2xl font-semibold">{item.name}</h3>
      <hr className="mt-5" />

      <div className="flex flex-col sm:flex-row gap-8">
        <img
          className="object-cover object-center group-hover:opacity-75 mt-4 text-sm my-2 h-80 w-full sm:w-1/2"
          src={item.img}
          alt={item.name}
        />
        <div className="sm:w-1/2">
          <p>{item.description}</p>
          <p className="text-xl font-bold">Precio: ${item.price}</p>

          {isInCart(item.id) ? (
            <>
              <Boton>
                <Link to="/cart">Ver carrito</Link>
              </Boton>
              {/* Finalizar mi compra */}
            </>
          ) : (
            <>
              <QuantitySelector
                cantidad={cantidad}
                stock={item.stock}
                setCantidad={setCantidad}
              />
              <Boton
                className="bg-emerald-500"
                onClick={handleAgregar}
                disabled={item.stock === 0}
              >
                Agregar al carrito
              </Boton>
            </>
          )}

          {/* Botón Seguir comprando */}
          <Boton
            className="bg-emerald-500 w-full sm:w-auto py-2 text-center mt-4"
            onClick={handleSeguirComprando}
          >
            Seguir comprando
          </Boton>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
