import "./styles.scss";
import { useState } from "react";
import database from "../../database/prices.json";
import Item from "../../components/Item";
import { v4 as uuid } from 'uuid';

type ItemType = {
  id: string;
  name: string;
  kit: string;
  quantity: number;
};

export default function Calculator () {
  const [resourceType, setResourceType] = useState("");
  const [resource, setResource] = useState("");
  const [kit, setKit] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [itemList, setItemList] = useState<ItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = ({ id, name, kit, quantity }: ItemType) => {
    const item: ItemType = { id, name, kit, quantity };
    setItemList(items => {
    const newState = [...items, item];
    return newState;
    });
  };

  const removeItem = ({ id, name, kit, quantity }: ItemType) => {
    const resource = database.minerios.find(res => res.name === name);
    if (!resource) throw new Error("fudeu");
    
    let newTotal: number = 0;
    kit === "unidade/s" ? newTotal += +resource.unit * quantity : newTotal += +resource.pack * quantity;

    setTotalPrice(total => {
      return total -= newTotal;
    });
    
    setItemList(() => {
      const newItemList = itemList.filter(item => item.id !== id);
      return newItemList;
    });
  }

  const handleClick = () => {
    if (resource === "" || kit === "" ) alert("Ops... parece que existem campos não preenchidos.");
    else {
      const itemExists = itemList.find(i => i.name === resource && i.kit === kit);
      if (!itemExists) {
        addItem({id: uuid(), name: resource, kit, quantity});
        calculate({ name: resource, kit, quantity});
        setResource("");
        setKit("");
        setQuantity(1);
      } else {
        alert("Ops.. parece que você está tentando adicionar o mesmo conjunto de item.");
      }
    }
  };

  const changeResourceType = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setItemList([]);
    setTotalPrice(0);
    setResourceType(ev.target.value);
  }

  const calculate = ({ name, kit, quantity }: {name: string, kit: string, quantity: number}) => {
    const resource = database.minerios.find(res => res.name === name);
    if (!resource) return alert("Recurso não encontrado!");

    let newTotal: number = 0;
    kit === "unidade/s" ? newTotal += +resource.unit * quantity : newTotal += +resource.pack * quantity;

    setTotalPrice(total => {
      return total += newTotal;
    });
  };

  const renderContent = () => {
    if (resourceType === "ores") {
      return (
        <div className="resources">
          <div>
            <label htmlFor="resource">Minério: </label>
            <select name="resource" id="resource" value={resource} onChange={(ev) => setResource(ev.target.value)} required>
              <option value="" disabled>Selecione o minério...</option>
              {database.minerios.map(resource => (
                <option key={resource.id} value={resource.name}>{resource.name}</option>
              ))}
            </select>
          </div>
          <div>
          <label htmlFor="kit">Conjunto: </label>
            <select name="kit" id="kit" value={kit} onChange={(ev) => setKit(ev.target.value)} required>
              <option value="" disabled>Selecione um conjunto...</option>
              <option value="unidade/s">Unidade</option>
              <option value="pack/s">Pack</option>
            </select>
          </div>
          <div>
            <label htmlFor="quantity">Quantidade: </label>
            <input type="number" id="quantity" min={1} value={quantity} onChange={(ev) => setQuantity(+ev.target.value)} required />
          </div>
          <button className="addBtn" onClick={handleClick}>Adicionar</button>
        </div>
      );
    } else {
      return null;
    }
  };
  
  return (
    <main>
      <section className="calculator__items">
        <div className="items__select-type">
          <label htmlFor="resourceType">Tipo de Recurso: </label>
          <select name="resourceType" id="resourceType" value={resourceType} onChange={(ev) => changeResourceType(ev)} >
            <option value="" disabled>Selecione uma opção...</option>
            <option value="ores">Minérios</option>
            <option value="drops">Drops de Mob</option>
            <option value="ingredients">Ingredientes</option>
          </select>
        </div>
        {renderContent()}
        <section className={totalPrice > 0 ? "items" : ""}>
          <div>
            {itemList.length > 0
            ? itemList.map(item => (
                <Item key={item.id} name={item.name} kit={item.kit} quantity={item.quantity} removeItem={() => removeItem(item)}/>
            )): null
            }
          </div>
          {totalPrice > 0 ? <span className="items-total">Total: R$ {totalPrice}</span> : null}
        </section>
      </section>
    </main>
  );
}
