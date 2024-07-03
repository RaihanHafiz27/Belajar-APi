import { useEffect, useState } from "react";
import { dataUser } from "../services/login.service";
import { getDataUser } from "../services/users.service";
import { Navbar } from "../components/Fragments/Navbar/Navbar";
import { ProfileChsImg } from "../assets/Icons/ProfileChsImg";

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
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log(user);

  return (
    <div
      className="flex flex-col w-full min-h-screen bg-bottom bg-no-repeat bg-cover border-2 border-pink-500"
      style={{ backgroundImage: "url('/images/bg-profile.jpg')" }}
    >
      <Navbar />
      <div className="flex items-center justify-center flex-grow mt-16 border-2 border-black 2xl:mt-20 ">
        <div className="w-full p-6 bg-white lg:w-3/5">
          <div className="border-2 border-red-400 ">
            <div className="pb-2 border-b border-gray-900">
              <h1 className="text-xl font-semibold font-Roboto">My Profile</h1>
              <p>
                Perbarui informasi akun Anda untuk mengelola, melindungi, dan
                mengamankan data Anda.
              </p>
            </div>
            <div className="flex mt-2">
              <div className="flex flex-col w-1/4">
                <div className="flex flex-col items-center justify-center w-full border">
                  <img
                    src="/images/profile.png"
                    alt=""
                    className="w-20 h-20 pt-2 bg-gray-300 rounded-full hover:bg-gray-400"
                  />
                  <p className=" font-Roboto">Kanna Anissa</p>
                </div>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere beatae consequatur nemo natus ea? Nemo eligendi
                    maxime unde consectetur minus.
                  </p>
                </div>
              </div>
              <div className="w-3/4 px-4 text-sm border-l border-black font-Roboto">
                <div className="flex items-center border-2 border-black">
                  <div className="flex items-center justify-between w-full py-2 border-2 border-red-600 ">
                    <p className="">First Name</p>
                    <p className="w-3/4 ml-4 border-b border-gray-700">Kanna</p>
                  </div>
                  <div className="flex items-center justify-between w-full py-2 border-2 border-red-600 ">
                    <p className="">Last Name</p>
                    <p className="w-3/4 ml-4 border-b border-gray-700">
                      Annisa Syifa
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-1/2 py-2 my-2 border-2 border-red-600 ">
                  <p className="">Username</p>
                  <p className="w-3/4 ml-4 border-b border-gray-700">
                    Kanna Anissa
                  </p>
                </div>
                <div className="flex items-center justify-between w-1/2 py-2 my-2 border-2 border-red-600 ">
                  <p className="">Email</p>
                  <p className="w-3/4 ml-4 border-b border-gray-700">
                    KannaAnissa@gmail.com
                  </p>
                </div>
                <div className="flex items-center justify-between w-1/2 py-2 my-2 border-2 border-red-600 ">
                  <p className="">Kode Pos</p>
                  <p className="w-3/4 ml-4 border-b border-gray-700">1234</p>
                </div>
                <div className="flex items-center justify-between w-1/2 py-2 my-2 border-2 border-red-600 ">
                  <p className="">Alamat</p>
                  <p className="w-3/4 ml-4 truncate border-b border-gray-700">
                    Kota Bekasi Kec Jatiasih Kel Jatiluhur no 27
                  </p>
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
