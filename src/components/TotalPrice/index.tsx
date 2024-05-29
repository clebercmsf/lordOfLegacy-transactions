import "./styles.scss";

type TotalPriceProps= {
  price: number;
  fee: boolean;
  setFee: Function;
}

export default function TotalPrice ({ price, fee, setFee }: TotalPriceProps) {
  return (
    <>
      <span>Total: <span className="total-price">R$ {price}</span></span>
      <div>
        <label htmlFor="fee">Adicionar taxa de serviço:</label>
        <input type="checkbox" name="fee" checked={fee} onChange={() => fee === true ? setFee(false) : setFee(true)} />
      </div>
    </>
  );
}