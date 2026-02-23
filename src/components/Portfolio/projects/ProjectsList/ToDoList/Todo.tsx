import { todo, html, css, js } from "../../../../../assets/imports/index";
import LinkPanel from "../../Link/Links";
import ToDoListPanel from "./ToDoListPanel";
import { useToggle } from "../../../../../hook/useToggle";

const Todo: React.FC = () => {
  const { isVisible, toggleVisibility } = useToggle();
  return (
    <div className="md:w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-2 shadow-lg">
      <p className="text-2xl overflow-hidden w-full border-b-2 border-white p-2">
        Lista zadań
      </p>
      <img src={todo} alt="Podglad strony kólko i krzyżyk" />
      <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
        <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
        <img src={css} alt="ikonka CSS" className="w-[20px] m-2" />
        <img src={js} alt="ikonka JavaScript" className="w-[20px] m-2" />
      </div>
      <LinkPanel
        githubLink="https://github.com/michalpawlowski-mp/To-Do-List"
        websiteLink="https://michalpawlowski-mp.github.io/To-Do-List/"
        onInfoClick={toggleVisibility}
      />
      {isVisible && <ToDoListPanel toggleVisibility={toggleVisibility} />}
    </div>
  );
};

export default Todo;
