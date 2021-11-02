import "./styles.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import NavLeft from "./components/NavLeft/NavLeft";
import Produtos from "./components/Produtos/Produtos";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="conteudo">
        <NavLeft />
        <Produtos />
      </div>
    </div>
  );
}
