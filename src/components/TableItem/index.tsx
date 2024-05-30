import "./styles.scss";

type TableItemProps = {
  name: string;
  unit: string;
  pack: string;
}

export default function TableItem ({ name, unit, pack }: TableItemProps) {
  return (
    <div className="table-item">
      <label>{name}</label>
      <label><span>R$ </span>{unit}</label>
      <label><span>R$ </span>{pack}</label>
    </div>
  );
}