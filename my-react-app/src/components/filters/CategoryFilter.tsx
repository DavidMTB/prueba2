interface Props {
  value: string;
  onChange: (value: string) => void;
}

const CategoryFilter = ({ value, onChange }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
    >
      <option value="">Todas las categorías</option>
      <option value="1">Electrónica</option>
      <option value="2">Accesorios</option>
      <option value="3">Otros</option>
    </select>
  );
};

export default CategoryFilter;
