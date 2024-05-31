import "./styles.scss";
import database from "../../databases/prices.json";
import TableItem from "../../components/TableItem";
import TableHeader from "../../components/TableHeader";
import CustomHeaderTable from "../../components/CustomTableHeader/index.tsx";
import CustomRowsTable from "../../components/CustomTableRows/index.tsx";
import { useState } from "react";

export default function Tables() {
  const [calcInAmount, setcalcInAmount] = useState(64);

  function handleSetAmount(amount:number) {
    setcalcInAmount(amount.target.value)
  }



  return (
    <section className="section__tables">
        <table className="table_ore_table">
        <CustomHeaderTable headers={[<th>Nome</th>, <th>Unidade</th>, <th>Pack <input placeholder="amount" onBlur={(e)=>handleSetAmount(e)}></input></th>]}/>
        { database.ores.map((item) => (
          <CustomRowsTable key={item.id} name={item.name} unit={item.unit} amount={calcInAmount * item.unit}/>
        ))
        }
        </table>

      <div className="tables">
        <TableHeader value1="Unidade" value2="Pack" />
        <div className="tables-content">
          {database.ingredients.map((item) => (
            <TableItem
              key={item.id}
              name={item.name}
              unit={item.unit}
              pack={item.pack}
            />
          ))}
        </div>
      </div>

      <div className="tables">
        <TableHeader value1="Valor Min" value2="Valor Max" />
        <div className="tables-content">
          {database.mobDrop.map((item) => (
            <TableItem
              key={item.id}
              name={item.name}
              unit={item.unit}
              pack={item.pack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
