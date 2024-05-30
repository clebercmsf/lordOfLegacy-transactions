import { useState } from "react";
import database from "../databases/prices.json";
import { v4 as uuid } from 'uuid';
import ResourceProperty from "../components/ResourceProperty";

export type ItemType = {
  id: string;
  name: string;
  kit: string;
  quantity: number;
};

export default function useCalculator () {
  const [resourceType, setResourceType] = useState("");
  const [resource, setResource] = useState("");
  const [kit, setKit] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [itemList, setItemList] = useState<ItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fee, setFee] = useState(false);
  const [priceFee, setPriceFee] = useState(10);

  const addItem = ({ id, name, kit, quantity }: ItemType) => {
    const item: ItemType = { id, name, kit, quantity };
    setItemList(items => {
    const newState = [...items, item];
    return newState;
    });
  };

  const findResource = (name: string) => {
    let resource = database.ores.find(res => res.name === name) || database.mobDrop.find(res => res.name === name) || database.ingredients.find(res => res.name === name);
    if (!resource) throw new Error("Recurso não localizado.");

    return resource;
  }

  const removeItem = ({ id, name, kit, quantity }: ItemType) => {
    const resource = findResource(name);
    
    let newTotal: number = 0;
    kit === "unidade/s" ? newTotal += +resource.unit * quantity : newTotal += +resource.pack * quantity;

    setTotalPrice(total => {
      return total - newTotal;
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
        setFee(false);
      } else {
        alert("Ops.. parece que você está tentando adicionar o mesmo conjunto de recurso.");
      }
    }
  };

  const changeResourceType = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setItemList([]);
    setTotalPrice(0);
    setFee(false);
    setResourceType(ev.target.value);
  }

  const calculate = ({ name, kit, quantity }: {name: string, kit: string, quantity: number}) => {
    const resource = findResource(name);

    let newTotal: number = 0;
    kit === "unidade/s" ? newTotal += +resource.unit * quantity : newTotal += +resource.pack * quantity;

    setTotalPrice(total => {
      return total + newTotal;
    });
  };

  const renderResourceProperty = () => {
    if (resourceType === "ores") {
      return (
        <div className="resources">
          <div>
            <label htmlFor="resource">Minério: </label>
            <select name="resource" id="resource" value={resource} onChange={(ev) => setResource(ev.target.value)} required>
              <option value="" disabled>Selecione o minério...</option>
              {database.ores.map(resource => (
                <option key={resource.id} value={resource.name}>{resource.name}</option>
              ))}
            </select>
          </div>
          <ResourceProperty kit={kit} setKit={setKit} quantity={quantity} setQuantity={setQuantity} handleClick={handleClick} mobDrop={false} />
        </div>
      );
    } if (resourceType === "mob-drop") {
        return (
          <div className="resources">
            <div>
              <label htmlFor="resource">Drop: </label>
              <select name="resource" id="resource" value={resource} onChange={(ev) => setResource(ev.target.value)} required>
                <option value="" disabled>Selecione o drop...</option>
                {database.mobDrop.map(resource => (
                  <option key={resource.id} value={resource.name}>{resource.name}</option>
                ))}
              </select>
            </div>
            <ResourceProperty kit={kit} setKit={setKit} quantity={quantity} setQuantity={setQuantity} handleClick={handleClick} mobDrop={true} />
          </div>
        );
    } if (resourceType === "ingredients") {
      return (
        <div className="resources">
          <div>
            <label htmlFor="resource">Ingrediente: </label>
            <select name="resource" id="resource" value={resource} onChange={(ev) => setResource(ev.target.value)} required>
              <option value="" disabled>Selecione o ingrediente...</option>
              {database.ingredients.map(resource => (
                <option key={resource.id} value={resource.name}>{resource.name}</option>
              ))}
            </select>
          </div>
          <ResourceProperty kit={kit} setKit={setKit} quantity={quantity} setQuantity={setQuantity} handleClick={handleClick} mobDrop={false} />
        </div>
      );
  } else {
      return null;
    }
  };

  return {
          resourceType, setResourceType, kit, setKit, quantity, setQuantity, itemList, setItemList, totalPrice, setTotalPrice, 
          fee, setFee, priceFee, setPriceFee, addItem, removeItem, handleClick, changeResourceType, calculate, renderResourceProperty
        };
}