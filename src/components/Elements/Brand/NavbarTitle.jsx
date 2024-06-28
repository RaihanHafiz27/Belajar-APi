import { Link } from "react-router-dom";

export const NavbarTitle = (props) => {
  const { classname } = props;
  return (
    <Link to={"/"} className={`flex items-center ${classname}`}>
      <h1
        className="text-2xl font-semibold lg:text-4xl text-amber-800 font-Poopins"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
      >
        LUXURA
      </h1>
      <img src="/images/leaf.svg" alt="" className="w-8 h-8" />
    </Link>
  );
};
