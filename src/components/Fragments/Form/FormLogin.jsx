import { useState } from "react";
import { login } from "../../../services/login.service";
import { Button } from "../../Elements/Button/Button";
import { InputForm } from "../../Elements/Input/Index";
import { getDataUser } from "../../../services/users.service";

export const FormLogin = () => {
  const [isLoginFailed, setIsLoginFailed] = useState("");
  const [dataUser, setDataUser] = useState(null);
  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        window.location.href = "/products";
        localStorage.setItem("token", res);
        getDataUser(username, res.token);
      }
      setIsLoginFailed(res.response.data);
    });
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
      {isLoginFailed && (
        <p className="mb-2 text-center text-red-600 font-Roboto">
          {isLoginFailed}
        </p>
      )}
    </form>
  );
};
