import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useNavigation } from "../../hooks/useNavigation";

const PHRASES = ["ichał Pawłowski ", "P.Dev "];

const Header: React.FC = () => {
  const { isNavOpen, navRef, buttonRef, toggleNav } = useNavigation();
  const text = useTypewriter(PHRASES);

  return (
    <header className="flex flex-row items-center justify-between w-full px-6 py-4 border-b border-white/5">
      <Link to="/" className="w-56">
        <h1 className="text-lg font-medium text-white uppercase tracking-wide">
          M{text}
          <span className="inline-block w-px h-[1em] bg-white ml-0.5 align-text-bottom animate-[blink_0.8s_step-end_infinite]" />
        </h1>
      </Link>
      <button
        type="button"
        ref={buttonRef}
        className="text-slate-400 hover:text-white z-30 text-3xl md:hidden absolute right-4 top-3 cursor-pointer transition-colors"
        onClick={toggleNav}
      >
        {isNavOpen ? "×" : "☰"}
      </button>
      <div ref={navRef}>
        <Nav isOpen={isNavOpen} toggleNav={toggleNav} />
      </div>
    </header>
  );
};

export default Header;
