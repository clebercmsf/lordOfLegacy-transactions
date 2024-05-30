import SelectKit from "./SelectKit";

type ResourcePropertyProps = {
  kit: string;
  setKit: Function;
  quantity: number;
  setQuantity: Function;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  mobDrop: boolean;
}

export default function ResourceProperty ({ kit, setKit, quantity, setQuantity, handleClick, mobDrop }: ResourcePropertyProps) {
  return (
    <>
      <div>
        <label htmlFor="kit">Conjunto: </label>
        {mobDrop ? <SelectKit kit={kit} setKit={setKit} /> : <SelectKit kit={kit} setKit={setKit} />}
      </div>
      <div>
        <label htmlFor="quantity">Quantidade: </label>
        <input type="number" id="quantity" min={1} max={63} value={quantity} onChange={(ev) => setQuantity(+ev.target.value)} required />
      </div>
      <button className="addBtn" onClick={handleClick}>Adicionar</button>
    </>
  );
}