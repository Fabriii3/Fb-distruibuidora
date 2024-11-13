import { useContext, useState } from "react"; 
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart, totalCart, clearCart } = useContext(CartContext); // Ahora importamos clearCart

  // Estados para los datos del cliente
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
    telefono: "",
  });

  // Estado para verificar si el formulario es válido
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = () => {
    return values.nombre !== "" && values.email !== "" && values.telefono !== "";
  };

  // Genera el texto del mensaje con los productos del carrito y los datos del cliente
  const generateWhatsAppMessage = () => {
    let message = `¡Hola! Me gustaría realizar una compra:\n\n`;
    message += `Nombre: ${values.nombre}\nCorreo electrónico: ${values.email}\nTeléfono: ${values.telefono}\nDirección: ${values.direccion}\n\n`;

    cart.forEach((item) => {
      message += `Producto: ${item.name}\nCantidad: ${item.cantidad}\nPrecio unitario: $${item.price}\nTotal: $${item.price * item.cantidad}\n\n`;
    });

    message += `Total: $${totalCart()}`;
    return encodeURIComponent(message); // Codifica el mensaje para que sea compatible con la URL
  };

  // Número de teléfono al que se enviará el mensaje (incluye el código del país)
  const phoneNumber = '541122869113'; // Reemplaza con el número deseado

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      // Aquí podrías realizar alguna acción con la orden, como enviarla a una base de datos o a un servidor.
      setOrderId(Date.now()); // Simulación de ID de orden

      // Vaciar el carrito
      clearCart();

      // Aquí podrías enviar el mensaje por WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`, '_blank');
    }
  };

  return (
    <div className="container m-auto mt-10 px-4 sm:px-6 lg:px-8">
      <hr className="mb-6" />

      {/* Formulario para capturar los datos del cliente */}
      <h4 className="text-lg sm:text-xl font-semibold mb-4 text-center w-full">Ingresa tus datos:</h4>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto mt-4"
      >
        <input
          className="border p-2 w-full rounded-md"
          type="text"
          placeholder="Nombre"
          value={values.nombre}
          onChange={handleInputChange}
          name="nombre"
          required
        />

        <input
          className="border p-2 w-full rounded-md"
          type="text"
          placeholder="Dirección"
          value={values.direccion}
          onChange={handleInputChange}
          name="direccion"
          required
        />

        <input
          className="border p-2 w-full rounded-md"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
          required
        />

        <input
          className="border p-2 w-full rounded-md"
          type="tel"
          placeholder="Teléfono"
          value={values.telefono}
          onChange={handleInputChange}
          name="telefono"
          required
        />

        {/* Botón de envío de los datos y de la compra */}
        <button
          type="submit"
          className={`bg-emerald-500 text-white py-2 rounded-md ${!isFormValid() ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!isFormValid()}
        >
          Enviar mi compra
        </button>
      </form>

      {/* Mensaje aclaratorio sobre el pago */}
      <p className="mt-4 text-sm text-gray-500 text-center">
        El pago se realizará fuera de la página, una vez que confirmemos tu compra. Te enviaremos los detalles de pago por WhatsApp.
      </p>

      {/* Mostrar la orden cuando se haya enviado correctamente */}
      {orderId && (
        <div className="mt-8 text-center">
          <p className="text-lg">¡Gracias por tu elegirnos!</p>
          <p className="text-sm">Si enviaste la compra por WhatsApp, en breve estaremos en contacto.</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
