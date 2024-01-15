import logo from "../../assets/images/logoblack.svg"
// import NavLink from "./NavLink"
import CartWidget from "./CartWidget"
import { Link , NavLink  } from "react-router-dom";

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
      label: "Reguillas",
      href: "/productos/reguillas",
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
        <header className="bg-green-400">
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