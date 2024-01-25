import "./App.css";
import "./styles/styles.scss";
import { CartPorvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import AppRouter from "./router/AppRouter";

function App() {

  return (
    <UserProvider>
      <CartPorvider>
        <AppRouter/>
      </CartPorvider>
    </UserProvider>
  );
}

export default App;
