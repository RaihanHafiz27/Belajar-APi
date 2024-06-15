import { AuthLayouts } from "../components/Layouts/AuthLayouts";
import { FormLogin } from "../components/Fragments/FormLogin";

export const LoginPage = () => {
  return (
    <AuthLayouts>
      <FormLogin />
    </AuthLayouts>
  );
};
