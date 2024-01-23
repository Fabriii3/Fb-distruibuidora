
const NavLink= ({href, text}) => {
      return (
      <a
         className ="text-white text-1g uppercase font-semibold"
         href={href}
      >
            {text}
      </a>
   );
};
   export default NavLink;