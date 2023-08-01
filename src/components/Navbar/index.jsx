import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/goodreadslogo.png";
import Dropdown from "../UIComponents/Dropdown";
import MobileLogo from "../../assets/images/grlogoshort.png";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-primary w-full h-16">
      {/* container  */}
      <div className="h-full max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        {/* left section */}
        <div className="">
          <Link to="/">
            <img src={LogoImage} alt="Logo" className="w-36 hidden md:block" />
            <img src={MobileLogo} alt="Logo" className="w-10 md:hidden" />
          </Link>
        </div>

        {/* right section  */}
        <nav className="hidden sm:block">
          <ul className="flex gap-8 lg:gap-14 items-center">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to={'/about'} >About</Link>
            </li>
            <li>
              <Link to={'/contact'} >Contact</Link>
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </nav>
        {/* menu  */}
        <div
          role="button"
          className="sm:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? (
            <RxCross2 size={30} className="text-secondary" />
          ) : (
            <RiMenu3Line size={30} className="text-secondary" />
          )}
        </div>
      </div>

      {/* mobile sidenav  */}
      <div
        className={`fixed top-0 w-2/3 bg-primary h-full p-8 ${
          openMenu ? "left-0" : "-left-full"
        } duration-300 ease-in z-50`}
      >
        <div>
          <Link to="/">
            <img src={MobileLogo} alt="Logo" className="w-10" />
          </Link>
        </div>

        <nav>
          <ul className="mt-8 space-y-5 text-xl font-semibold text-secondary">
            <li onClick={() => setOpenMenu((prev) => !prev)}>
              <Link>Home</Link>
            </li>
            <li onClick={() => setOpenMenu((prev) => !prev)}>
              <Link to="/books">Books</Link>
            </li>
            <li onClick={() => setOpenMenu((prev) => !prev)}>
              <Link to={'/about'} >About</Link>
            </li>
            <li onClick={() => setOpenMenu((prev) => !prev)}>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li
              onClick={() => setOpenMenu((prev) => !prev)}
              className="bg-flowral text-white px-3 py-2"
            >
              <Link>Login</Link>
            </li>
            <li
              onClick={() => setOpenMenu((prev) => !prev)}
              className="bg-flowral text-white px-3 py-2"
            >
              <Link>Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
