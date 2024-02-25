import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function Header() {
  return (
    <nav className="flex  mt-10 gap-5 items-center justify-between h-20 max-w-6xl mx-auto">
      <Link to={"/"}>
        <div className="ml-10">
          <img src={logo} alt="logo" className=" w-32" />
        </div>
      </Link>
      <ul className="flex list-none items-center mr-10 mt-5  space-x-6 text-gray-800 font-semibold">
        <Link to={'/'}>
          <li className=" cursor-pointer  text-2xl text-white">Home</li>
        </Link>
        <Link to={'/cart'}>
          <li className=" cursor-pointer text-2xl text-white">Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
