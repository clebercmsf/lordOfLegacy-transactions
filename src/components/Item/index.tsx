import "./styles.scss";

type ItemProps = {
  name: string;
  kit: string;
  quantity: number;
  removeItem: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Item ({ name, kit, quantity, removeItem }: ItemProps) {
  return (
    <span>{quantity} {kit} de {name} <button className="deleteBtn" onClick={removeItem}>Remover</button></span>
  );
}