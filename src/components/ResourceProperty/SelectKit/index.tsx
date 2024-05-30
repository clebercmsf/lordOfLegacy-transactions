type SelectKitProps = {
  kit: string;
  setKit: Function;
}

export default function SelectKit ({ kit, setKit }: SelectKitProps) {
  return (
    <select name="kit" id="kit" value={kit} onChange={(ev) => setKit(ev.target.value)} required>
      <option value="" disabled>Selecione um conjunto...</option>
      <option value="unidade/s">Unidade</option>
      <option value="pack/s">Pack</option>
    </select>
  );
}