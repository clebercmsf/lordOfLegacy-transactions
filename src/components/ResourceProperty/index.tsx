type ResourcePropertyProps = {
  kit: string;
  setKit: Function;
  quantity: number;
  setQuantity: Function;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ResourceProperty ({ kit, setKit, quantity, setQuantity, handleClick }: ResourcePropertyProps) {
  return (
    <>
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
    </>
  );
}