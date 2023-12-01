import logo from "../../assets/images/react.svg"
import NavLink from "./NavLink"
import CarWidget from "./CarWidget"

const Navbar = () => {
   
    return (
        <header className="bg-yellow-900">
            <div className="container m-auto py-6 flex justify-between items-center">
             <img src={logo} alt="logo" />

            <nav className="flex gap-4">
               <NavLink href={"#"} text={"Inicio"}/>   
               <NavLink href={"#"} text={"Comprar"}/> 
               <NavLink href={"#"} text={"Contacto"}/>
               <CarWidget/>         
            </nav>
          </div>
        </header>
    )
}

export default Navbar