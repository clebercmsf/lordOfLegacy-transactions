import "./styles.scss";

type TableHeaderProps = {
  value1: string;
  value2: string;
}

export default function TableHeader ({ value1, value2 }: TableHeaderProps) {
  return (
    <div className="tables-header">
      <label>Nome</label>
      <label>{value1}</label>
      <label>{value2}</label>
    </div>
  );
}