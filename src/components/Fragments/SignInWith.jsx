import { FacebookIcon } from "../../assets/Icons/Facebook";
import { GoogleIcon } from "../../assets/Icons/GoogleIcon";

export const SignInWith = () => {
  return (
    <div className="flex items-center mb-2 md:mb-4">
      <a href="" className="mx-2">
        <GoogleIcon />
      </a>
      <a href="" className="mx-2">
        <FacebookIcon />
      </a>
    </div>
  );
};
