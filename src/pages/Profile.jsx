import { useEffect, useState } from "react";
import { dataUser } from "../services/login.service";
import { Navbar } from "../components/Fragments/Navbar/Navbar";
import { Button } from "../components/Elements/Button/Button";

export const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await dataUser();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error : {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const fields = [
    { label: "First Name", value: user.name.firstname },
    { label: "Last Name", value: user.name.lastname },
    { label: "Username", value: user.username },
    { label: "Email", value: user.email },
    { label: "Phone", value: user.phone },
    { label: "Kode Pos", value: user.address.zipcode },
    {
      label: "Address",
      value: `${user.address.city} ${user.address.street} ${user.address.number}`,
    },
  ];

  return (
    <div
      className="flex flex-col w-full min-h-screen bg-center bg-no-repeat bg-cover "
      style={{ backgroundImage: "url('/images/bg-profile.jpg')" }}
    >
      <Navbar />
      <div className="flex items-center justify-center flex-grow mt-16 2xl:mt-20 ">
        <div
          className="w-full mx-2 bg-white rounded-lg lg:p-6 lg:w-3/5"
          style={{
            boxShadow: "2px 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          <div className="">
            <div className="mb-6 border-b border-gray-900">
              <h1 className="mt-2 text-xl font-semibold text-center lg:mt-0 lg:text-start font-Roboto">
                My Profile
              </h1>
              <p className="pb-4 text-sm text-center lg:text-base lg:text-start">
                Update your account information to manage, protect and secure
                your data.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col border-r border-black lg:w-2/5 2xl:w-1/4">
                <div className="flex flex-col items-center justify-center w-full">
                  <img
                    src="/images/profile.png"
                    alt=""
                    className="w-20 h-20 pt-2 bg-gray-300 rounded-full hover:bg-gray-400"
                  />
                  <p className="capitalize font-Roboto">{user.username}</p>
                </div>
                <div className="my-2 text-sm text-center">
                  <p>Image Size : maks 1mb</p>
                  <p>Image Format : .JPEG, .PNG</p>
                </div>
                <div className="flex justify-center w-full">
                  <Button classname="w-1/4 lg:w-2/5 text-slate-200 2xl:py-2">
                    Choose
                  </Button>
                </div>
              </div>
              <div className="text-sm lg:w-3/5 2xl:w-3/4 font-Roboto">
                {fields.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 mx-2 lg:mx-0 lg:w-full 2xl:w-1/2 2xl:my-6"
                  >
                    <p className="w-1/4 text-gray-500 lg:text-end">
                      {item.label}
                    </p>
                    <p className="w-3/4 border-b border-gray-700 lg:ml-4 ">
                      {item.value}
                    </p>
                  </div>
                ))}
                <div className="flex justify-end mr-2 lg:mr-0">
                  <Button classname="px-2 text-slate-200 lg:px-0 2xl:py-2 lg:w-1/4 2xl:w-1/6">
                    Simpan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div>
<h1>Profile Page</h1>
<p>ID: {user.id}</p>
<p>Username: {user.username}</p>
<p>Phone: {user.phone}</p>
<p>Email: {user.email}</p>
<p>Address: {user.address.city}</p>
Tambahkan data user lainnya sesuai kebutuhan
</div> */
}
