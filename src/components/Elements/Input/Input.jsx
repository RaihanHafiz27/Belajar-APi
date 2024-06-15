export const Input = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="text-sm border-b border-gray-800 outline-none lg:text-md"
      placeholder={placeholder}
    />
  );
};
