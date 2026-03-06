import { Link } from "react-router-dom";
import { navLinks } from "./nav.data";

interface NavProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const Nav = ({ isOpen }: NavProps) => {
  return (
    <nav
      className={`fixed top-0 right-0 h-full sm:w-1/2 w-3/4 bg-gray-800 md:bg-gray-800/0 bg-opacity-85 z-20 p-2 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:relative md:translate-x-0 md:flex md:grow md:justify-center md:w-auto md:bg-opacity-100`}
    >
      <ul className="flex flex-col items-center justify-center h-full md:gap-10 gap-24 md:text-xl text-3xl md:flex-row">
        {navLinks.map(({ id, title, path }) => (
          <li className="text-white hover:text-gray-400">
            <Link key={id} to={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
