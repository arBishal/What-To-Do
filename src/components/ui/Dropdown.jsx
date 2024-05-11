export const Dropdown = ({ label, name, value, onChange, options }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border-[1px] border-neutral-300 px-2 py-2 rounded-sm text-sm"
        required
      >
        <option hidden>
          Select Priority
        </option>
        {options.map((element, i) => (
          <option key={i} value={element.value}>
            {element.label}
          </option>
        ))}
      </select>
    </div>
  );
};
