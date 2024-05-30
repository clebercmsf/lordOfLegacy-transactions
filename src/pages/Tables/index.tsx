import "./styles.scss";
import database from "../../databases/prices.json";
import TableItem from "../../components/TableItem";
import TableHeader from "../../components/TableHeader";

export default function Tables() {
  return (
    <section className="section__tables">
      <div className="tables">
        <TableHeader value1="Unidade" value2="Pack" />
        <div className="tables-content">
          {database.ores.map(item => (
            <TableItem key={item.id} name={item.name} unit={item.unit} pack={item.pack} />
          ))}
        </div>
      </div>
      <div className="tables">
        <TableHeader value1="Unidade" value2="Pack" />
        <div className="tables-content">
          {database.ingredients.map(item => (
            <TableItem key={item.id} name={item.name} unit={item.unit} pack={item.pack} />
          ))}
        </div>
      </div>
      <div className="tables">
        <TableHeader value1="Valor Min" value2="Valor Max" />
        <div className="tables-content">
          {database.mobDrop.map(item => (
            <TableItem key={item.id} name={item.name} unit={item.unit} pack={item.pack} />
          ))}
        </div>
      </div>
    </section>
  );
}