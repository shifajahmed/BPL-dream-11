import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className="bg-red-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img src={Logo} alt="Logo" className="w-20" />

        <ul className="flex items-center gap-6">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>

        <h2 className="font-bold text-3xl text-black flex gap-1 items-center">
          <AiFillDollarCircle />
          500
        </h2>
      </div>
    </nav>
  );
};

export default Nav;
