import { Button } from "../Elements/Button/Button";
import { InputForm } from "../Elements/Input/Index";

export const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        name="email"
        type="email"
        label="Email"
        placeholder="KannaAnissa@gmail.com"
      />
      <InputForm
        name="username"
        type="text"
        label="Username"
        placeholder="Kanna"
      />
      <InputForm
        name="password"
        type="password"
        label="Password"
        placeholder="**********"
      />
      <InputForm
        name="password"
        type="password"
        label="Confirm Password"
        placeholder="**********"
      />
      <Button classname="mb-5">Register</Button>
    </form>
  );
};
