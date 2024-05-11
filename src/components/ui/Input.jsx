export const Input = ({ label, name, value, onChange, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
        className="border-[1px] border-neutral-300 px-2 py-2 rounded-sm text-sm"
      />
    </div>
  );
};
