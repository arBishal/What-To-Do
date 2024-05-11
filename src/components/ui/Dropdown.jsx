export const Dropdown = ({ label, name, value, onChange, options }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        {options.map((element, i) => (
          <option key={i} value={element.value}>
            {element.label}
          </option>
        ))}
      </select>
    </div>
  );
};
