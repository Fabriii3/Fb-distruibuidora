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
    <div className="container m-auto mt-10 px-4 sm:px-8" style={{ marginTop: '120px' }}>
      {/* Botón Volver */}
      <Boton
        className="bg-emerald-500 text-white w-full sm:w-auto py-2 px-6 rounded-lg shadow-md hover:bg-emerald-600 transition-all mb-6"
        onClick={handleVolver}
      >
        Volver hacia atrás
      </Boton>

      <h3 className="text-3xl font-bold text-gray-800 text-center sm:text-left mb-6">{item.name}</h3>
      <hr className="border-t-2 border-emerald-500 w-24 mx-auto sm:mx-0 mb-6" />

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
        {/* Imagen del producto */}
        <div className="sm:w-1/2 flex justify-center sm:justify-start">
          <img
            className="object-cover object-center rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-[400px] h-auto"
            src={item.img}
            alt={item.name}
          />
        </div>

        {/* Detalles del producto */}
        <div className="sm:w-1/2 flex flex-col justify-between space-y-6">
          <p className="text-base sm:text-lg text-gray-700">{item.description}</p>
          <p className="text-2xl font-semibold text-emerald-600">Precio: ${item.price}</p>

          {/* Disponibilidad y Agregar al carrito */}
          {isInCart(item.id) ? (
            <div className="flex flex-col gap-4">
              <Boton className="bg-bla  py-2 rounded-lg" disabled>
                Producto agregado
              </Boton>
              <Boton className="bg-emerald-600 hover:bg-emerald-700 py-2 rounded-lg">
                <Link to="/cart" className="text-white">Ver carrito</Link>
              </Boton>
              
            </div>
          ) : (
            <>
              <QuantitySelector
                cantidad={cantidad}
                stock={item.stock}
                setCantidad={setCantidad}
              />
              <Boton
                className="bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 disabled:opacity-50 transition-all"
                onClick={handleAgregar}
                disabled={item.stock === 0}
              >
                {item.stock === 0 ? "Sin stock" : "Agregar al carrito"}
              </Boton>
            </>
          )}

          {/* Botón Seguir comprando */}
          <Boton
            className="bg-emerald-500 w-full sm:w-auto py-2 rounded-lg hover:bg-emerald-600 transition-all"
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
