import "./styles.scss";

type ItemProps = {
  name: string;
  kit: string;
  quantity: number;
  removeItem: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Item ({ name, kit, quantity, removeItem }: ItemProps) {
  return (
    <div className="item">
      <span>{quantity} - {kit} de {name}</span>
      <button className="deleteBtn" onClick={removeItem}>Remover</button>
    </div>
  );
}