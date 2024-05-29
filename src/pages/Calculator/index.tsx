import "./styles.scss";
import Item from "../../components/Item";
import useCalculator from "../../hooks/useCalculator";
import TotalPrice from "../../components/TotalPrice";
import TotalFee from "../../components/TotalFee";

export default function Calculator () {
  const c = useCalculator();
  
  return (
    <main>
      <section className="calculator__items">
        <div className="items__select-type">
          <label htmlFor="resourceType">Tipo de Recurso: </label>
          <select name="resourceType" id="resourceType" value={c.resourceType} onChange={(ev) => c.changeResourceType(ev)} >
            <option value="" disabled>Selecione uma opção...</option>
            <option value="ores">Minérios</option>
            <option value="mob-drop">Drops de Mob</option>
            <option value="ingredients">Ingredientes</option>
          </select>
        </div>
        {c.renderResourceProperty()}
        <section className={c.totalPrice > 0 ? "items" : ""}>
          <div className="items-list">
            {c.itemList.length > 0
            ? c.itemList.map(item => (
                <Item key={item.id} name={item.name} kit={item.kit} quantity={item.quantity} removeItem={() => c.removeItem(item)}/>
            )): null
            }
          </div>
          {c.totalPrice > 0
          ? <>
              <div className="items-total">
                <TotalPrice price={c.totalPrice} fee={c.fee} setFee={c.setFee} />
              </div>
              {c.fee
              ? <div className="total-fee">
                  <TotalFee totalPrice={c.totalPrice} priceFee={c.priceFee} setPriceFee={c.setPriceFee} />
                </div>
              : null}
            </>
          : null}
        </section>
      </section>
    </main>
  );
}