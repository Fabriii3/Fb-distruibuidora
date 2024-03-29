import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const LoginScreen = () => {
  const { login, register, googleLogin } = useContext(UserContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(values);
  };


  return (
    <div className="login-container">
      <div className="p-8 rounded bg-white">
        <h2 className="text-center text-4xl font-bold italic w-96 "> Ingreso </h2>
      

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          <input
            className=" border border-black rounded-2xl p-2"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
          <input
            className="border border-black rounded-2xl p-2"
            type="password"
            placeholder="Contraseña"
            value={values.password}
            onChange={handleInputChange}
            name="password"
          />

          <button type="submit" className="border rounded-2xl p-2 bg-emerald-500 text-white py-2">
            Ingresar
          </button>
        </form>

        <button
           onClick={() => register(values)}
          className="border rounded-2xl p-2 bg-emerald-500 text-white p-2 mt-4"
        >
          Registrarse
        </button>
            <br/>
        <button
          onClick={googleLogin}
          className="border rounded-2xl p-2 bg-emerald-500 text-white p-2 mt-4"
        >
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
