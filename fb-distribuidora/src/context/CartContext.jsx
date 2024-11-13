import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";  // Asegúrate de importar el contexto de usuario

export const CartContext = createContext();

export const CartPorvider = ({ children }) => {
  const { user } = useContext(UserContext);  // Obtener el usuario autenticado
  const [cart, setCart] = useState(() => {
    // Si el usuario está autenticado, se obtiene el carrito del localStorage con la clave única del usuario
    const savedCart = user?.logged ? localStorage.getItem(`cart-${user.uid}`) : localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : []; // Si existe en localStorage, lo parseamos, sino inicializamos con un array vacío
  });

  // Efecto para guardar el carrito en localStorage cuando cambie
  useEffect(() => {
    if (user?.logged) {
      // Si el usuario está autenticado, se guarda el carrito en localStorage con una clave única
      localStorage.setItem(`cart-${user.uid}`, JSON.stringify(cart));
    } else {
      // Si el usuario no está autenticado, usamos una clave genérica
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, user]);  // Este efecto se ejecutará cada vez que el carrito cambie o el usuario cambie

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);  // Añadir un item al carrito
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);  // Verificar si un item ya está en el carrito
  };

  const clearCart = () => {
    setCart([]);  // Limpiar el carrito
    if (user?.logged) {
      localStorage.removeItem(`cart-${user.uid}`);  // Si está autenticado, eliminamos el carrito del localStorage
    } else {
      localStorage.removeItem("cart");  // Si no está autenticado, usamos la clave genérica
    }
  };

  const itemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);  // Contar los items en el carrito
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0);  // Calcular el total
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));  // Eliminar un item del carrito
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        clearCart,
        itemsInCart,
        totalCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
