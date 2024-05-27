import "./styles.scss";

type ItemProps = {
  name: string;
  kit: string;
  quantity: number;
}

export default function Item ({ name, kit, quantity }: ItemProps) {
  return (
    <li>{quantity} {kit} de {name}</li>
  );
}