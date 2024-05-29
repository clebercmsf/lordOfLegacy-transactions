import "./styles.scss";
import { Link } from "react-router-dom";

export default function Header () {
  return (
    <header>
      <h1>Transações - Lord of Legacy</h1>
      <div className="nav-item">
        <div>
          <Link to={"/"}>Calculadora</Link>
          <Link to={"/tabelas"}>Tabelas</Link>
        </div>
        <hr />
      </div>
    </header>
  );
}