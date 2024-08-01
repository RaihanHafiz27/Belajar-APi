import { Link } from "react-router-dom";

export const NavbarTitle = (props) => {
  const { classname = "text-amber-800" } = props;
  return (
    <Link to={"/home"} className={`flex items-center ${classname}`}>
      <h1
        className="text-2xl font-semibold 2xl:text-4xl font-Poopins"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
      >
        LUXURA
      </h1>
      <img src="/images/triangle.png" alt="" className="w-8 h-8" />
    </Link>
  );
};
