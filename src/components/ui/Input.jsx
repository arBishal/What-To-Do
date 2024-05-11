export const Input = ({ label, name, value, onChange, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
      />
    </div>
  );
};
