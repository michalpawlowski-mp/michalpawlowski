import { Link } from "react-router-dom";
import { navLinks } from "./nav.data";

interface NavProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const Nav = ({ isOpen }: NavProps) => {
  return (
    <nav
      className={`fixed top-0 right-0 h-full md:w-1/2 w-3/4 bg-[#0f1117]/95 backdrop-blur-sm z-20 p-2 transition-transform transform border-l border-white/10 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:relative md:translate-x-0 md:flex md:grow md:justify-center md:w-auto md:bg-transparent md:border-none md:backdrop-blur-none`}
    >
      <ul className="flex flex-col items-center justify-center h-full md:gap-10 gap-24 md:text-base text-2xl md:flex-row">
        {navLinks.map(({ id, title, path }) => (
          <li className="text-slate-400 hover:text-white transition-colors">
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
