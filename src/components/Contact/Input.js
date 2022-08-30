const Input = ({ placeholder, name, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      className="w-1/2 bg-primaryDark text-xs p-2"
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
