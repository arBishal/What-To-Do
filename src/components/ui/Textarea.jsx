export const Textarea = ({ label, name, value, onChange, type, placeholder }) => {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea 
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
          rows={3}
        />
      </div>
    );
  };
  