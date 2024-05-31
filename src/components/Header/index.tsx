import "./styles.scss";
import { Link } from "react-router-dom";

export default function Header () {
  return (
    <header>
      <h1>Assistente de Player - Lord of Legacy</h1>
      <div className="nav-item">
        <div>
          <Link to={"/"}>Calculadora</Link>
          <Link to={"/table"}>Tabelas</Link>
        </div>
        <hr />
      </div>
    </header>
  );
}