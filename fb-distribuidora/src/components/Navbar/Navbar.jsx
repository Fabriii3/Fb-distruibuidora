import logo from "../../assets/images/logoblack.svg"
import NavLink from "./NavLink"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

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
        <header className="bg-green-600">
            <div className="container m-auto py-6 flex justify-between items-center">
        <img src={logo} alt="Logo" />

        <nav className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white hover:text-purple-400 text-lg uppercase font-semibold"
            >
              {link.label}
            </Link>
          ))}

          <CartWidget />
        </nav>

      </div>
        </header>
    )
}

export default Navbar