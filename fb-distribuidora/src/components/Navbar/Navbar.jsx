import logo from "../../assets/images/logoblack.svg"
import CartWidget from "./CartWidget"
import {  NavLink  } from "react-router-dom";
import TopBarfb from "./TopBarfb";


const links = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Trapos",
      href: "/productos/trapos",
    },
    {
      label: "Rejillas",
      href: "/productos/rejillas",
    },
    {
      label: "Esponjas",
      href: "/productos/esponjas",
    },
    {
      label: "Repasadores",
      href: "/productos/repasadores",
    },
    {
      label: "Microfibra",
      href: "/productos/microfibras",
    },
  ];
  
const Navbar = () => {
      
    return (
        <header className="bg-emerald-500">
           <TopBarfb/>
            <div className="container m-auto py-6 flex justify-between items-center">
        <img src={logo} alt="Logo FB Distribuidora" />

        <nav className="flex gap-4">
          {links.map((link) => (
            
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (
               `text-lg uppercase font-semibold ${isActive ? "text-green-800" : "text-white" } `
              )
             } 
            >
              {link.label}
            </NavLink>
          ))}

          <CartWidget />
        </nav>

      </div>
        </header>
        
    )
}

export default Navbar