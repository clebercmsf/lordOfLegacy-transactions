type TotalFeeProps = {
  totalPrice: number;
  priceFee: number;
  setPriceFee: Function;
}

export default function TotalFee ({ totalPrice, priceFee, setPriceFee }: TotalFeeProps) {
  return (
    <>
      <span>Total com taxa de serviço: <span className="total-price">R$ {(totalPrice + (totalPrice * (priceFee / 100))).toFixed(2)}</span></span>
      <select name="fee-price" id="fee-price" value={priceFee} onChange={(ev) => setPriceFee(+ev.target.value)}>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
        <option value="25">25%</option>
      </select>
    </>
  );
}