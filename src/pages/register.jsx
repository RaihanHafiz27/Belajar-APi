import { FormRegister } from "../components/Fragments/Form/FromRegister";
import { AuthLayouts } from "../components/Layouts/AuthLayouts";

export const RegisterPage = () => {
  return (
    <AuthLayouts>
      <FormRegister />
    </AuthLayouts>
  );
};
