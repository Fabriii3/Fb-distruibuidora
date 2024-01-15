
const NavLink= ({href, text}) => {
      return (
      <a
         className ="text-white hover: text-purple-400 text-1g uppercase font-semibold"
         href={href}
      >
            {text}
      </a>
   );
};
   export default NavLink;