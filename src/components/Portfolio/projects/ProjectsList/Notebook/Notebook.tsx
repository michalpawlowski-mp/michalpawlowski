import { notebook, html, css, js } from "../../../../../assets/imports/index";
import Links from "../../Link/Links";
import { useToggle } from "../../../../../hook/useToggle";
import NotebookPanel from "./NotebookPanel";

const Notebook: React.FC = () => {
  const { isVisible, toggleVisibility } = useToggle();
  return (
    <div className="md:w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-2 shadow-lg">
      <p className="text-2xl overflow-hidden w-full border-b-2 border-white p-2">
        Notatnik
      </p>
      <img src={notebook} alt="Podglad strony Notatnik" />
      <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
        <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
        <img src={css} alt="ikonka CSS" className="w-[20px] m-2" />
        <img src={js} alt="ikonka Javascript" className="w-[20px] m-2" />
      </div>
      <Links
        githubLink="https://github.com/michalpawlowski-mp/Notebook"
        websiteLink="https://michalpawlowski-mp.github.io/Notebook/"
        onInfoClick={toggleVisibility}
      />
      {isVisible && <NotebookPanel toggleVisibility={toggleVisibility} />}
    </div>
  );
};

export default Notebook;
