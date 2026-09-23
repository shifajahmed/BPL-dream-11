import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className=" bg-red-100">
      <div className="container mx-auto flex justify-between">
        <img src={Logo} alt="Logo" />
        <ul className="flex gap-4 item-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
