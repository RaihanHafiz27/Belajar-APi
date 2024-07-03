export const Button = (props) => {
  const {
    children = "...",
    type = "button",
    onClick = () => {},
    classname = "w-full text-slate-200 lg:py-2",
  } = props;
  return (
    <button
      className={`py-1 my-2 font-Roboto  bg-amber-600 hover:bg-amber-700  ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
