import "./styles.scss";
import { useState } from "react";
import database from "../../database/prices.json";
import Item from "../../components/Item";

type ItemType = {
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

  const addItem = ({ name, kit, quantity }: ItemType) => {
    const item: ItemType = { name, kit, quantity };
    setItemList(items => {
      const newState = [...items, item];
      return newState;
    });
  };

  const handleClick = () => {
    if (resource === "" || kit === "" ) alert("Ops... parece que existem campos não preenchidos!");
    else {
      addItem({name: resource, kit, quantity});
      setResource("");
      setKit("");
      setQuantity(1);
    }
  };

  const renderContent = () => {
    if (resourceType === "ores") {
      return (
        <>
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
            <button className="updateBtn" onClick={handleClick}>Adicionar</button>
          </div>
        </>
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
          <select name="resourceType" id="resourceType" value={resourceType} onChange={(ev) => setResourceType(ev.target.value)} >
            <option value="" disabled>Selecione uma opção...</option>
            <option value="ores">Minérios</option>
            <option value="drops">Drops de Mob</option>
            <option value="ingredients">Ingredientes</option>
          </select>
        </div>
        {renderContent()}
        {itemList.length > 0
        ? itemList.map(item => (
          <ul className="items__list">
            <Item key={item.name} name={item.name} kit={item.kit} quantity={item.quantity} />
          </ul>
        )): null
        }
      </section>
      <section className="calculator__result"></section>
    </main>
  );
}
