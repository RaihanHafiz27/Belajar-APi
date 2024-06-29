import { dataUser } from "../services/login.service";
import { getDataUser } from "../services/users.service";

export const ProfilePage = () => {
  getDataUser();
  dataUser();
  return (
    <div>
      <h1>Hello Profile</h1>
    </div>
  );
};
