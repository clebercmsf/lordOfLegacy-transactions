import "./styles.scss";
import database from "../../databases/prices.json";

export default function Tables () {
  return (
    <section className="tables">
      <div className="tables-header">
        <h4>Nome</h4>
        <h4>Valor Unidade</h4>
        <h4>Valor Pack</h4>
      </div>
      <div className="tables-content">
        {database.ores.map(item => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.unit}</span>
            <span>{item.pack}</span>
          </div>
        ))}
      </div>
    </section>
  );
}