import { AuthLayouts } from "../components/Layouts/AuthLayouts";
import { FormLogin } from "../components/Fragments/Form/FormLogin";

export const LoginPage = () => {
  return (
    <AuthLayouts>
      <FormLogin />
    </AuthLayouts>
  );
};
