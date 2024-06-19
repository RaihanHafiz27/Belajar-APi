import { Button } from "../Elements/Button/Button";
import { InputForm } from "../Elements/Input/Index";

export const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        type="text"
        label="Username"
        placeholder="Kanna Anissa"
      />
      <InputForm
        name="password"
        type="password"
        label="Password"
        placeholder="**********"
      />
      <Button type="submit" classname="mb-5">
        Login
      </Button>
    </form>
  );
};
