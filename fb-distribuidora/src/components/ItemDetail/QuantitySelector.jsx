import Boton from "../../ejemplos/Boton";

const QuantitySelector = ({cantidad , stock , setCantidad}) => {

    const handleSumar = () => {
        cantidad < stock &&  setCantidad(cantidad + 1 )
      }
    
      const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1 )
      }
    

   return (
    <div className="flex gap-4 items-center">
    <Boton className="bg-emerald-500" onClick={handleRestar}>-</Boton>
    <span>{cantidad}</span>
    <Boton className="bg-emerald-500" onClick={handleSumar}>+</Boton>
    </div>
  )
}

export default QuantitySelector