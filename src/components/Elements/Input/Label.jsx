export const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="text-sm lg:text-md">
      {children}
    </label>
  );
};
