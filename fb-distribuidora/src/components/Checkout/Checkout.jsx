import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import {collection , addDoc } from  "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
    const {cart , totalCart , clearCart } = useContext(CartContext)

     const [values , setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
     });
     
  const [orderId , setOrderId]= useState(null) 

  const habdleImputChange = (e) => {
   setValues({
        ...values,
        [e.target.name]: e.target.value
    });
  };

    const handleSubmit = (e) => {
     e.preventDefault();

     const orden = {
        cliente: values,
        items: cart,
        total: totalCart(),
        fecha: new Date()
     };

     const ordersRef = collection(db, "orders");

   

     addDoc(ordersRef , orden)
       .then(doc => setOrderId(doc.id))

        clearCart()

        Swal.fire({
          title: "Exelente!",
          text: "Gracias por tu compra !",
          icon: "success"
        });
    };

    if (orderId) {
       return(
         <div className="container m-auto mt-10">
          <p className="text-4xl font-semibold"> Recibo de compra </p>
          <p className="text-2xl mt-4  font-semibold "> Tu número de orden es : {orderId}</p>
       </div>
      );
    }

   return (
    <div className="container m-auto mt-10">
        <h2 className="text-4xl font-semibold">Checkout</h2>
        <hr />
          
        <h4>Ingresa tus datos </h4>

          <form onSubmit={handleSubmit} 
               className="flex flex-col gap-4 max-w-md mt-4">

             <input className="border p-2" 
                    type="text"
                    placeholder="Nombre"
                    onChange={habdleImputChange}
                    value={values.nombre}
                    name="nombre"
                    />
                

             <input className="border p-2"
                    type="text" 
                    placeholder="Direccion"
                    onChange={habdleImputChange}
                    value={values.direccion}
                    name="direccion" />

             <input className="border p-2"
                    type="email" 
                    placeholder="Email"
                    onChange={habdleImputChange}  
                    value={values.email}
                    name="email" />

             <button type="submit" className="bg-emerald-500 text-white py-4 rounded"> Enviar </button>
          </form>
    </div>
  )
}

export default Checkout


