export const Button = (props) => {
  const {
    children = "...",
    type = "button",
    onClick = () => {},
    classname,
  } = props;
  return (
    <button
      className={`py-1 my-2 mb-5 lg:py-2 bg-amber-600 hover:bg-amber-700 text-slate-200 ${classname} w-full`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
