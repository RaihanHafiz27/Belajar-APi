import { Label } from "./Label";
import { Input } from "./Input";

export const InputForm = (props) => {
  const { name, type, placeholder, label } = props;
  return (
    <div className="flex flex-col mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};
