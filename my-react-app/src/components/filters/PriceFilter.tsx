interface Props {
  min: number;
  max: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

const PriceFilter = ({ min, max, onMinChange, onMaxChange }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <input
        type="number"
        placeholder="Precio min"
        value={min}
        onChange={(e) => onMinChange(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Precio max"
        value={max}
        onChange={(e) => onMaxChange(Number(e.target.value))}
      />
    </div>
  );
};

export default PriceFilter;
