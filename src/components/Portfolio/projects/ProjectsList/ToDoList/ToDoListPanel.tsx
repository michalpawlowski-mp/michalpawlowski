import React from "react";
import { html, js, css, npm, node, todo } from "../../../../../assets/imports/index";
import LinksPanel from "../../Link/LinksPanel";
import ProjectsProps from "../../../../../types/ProjectsProps";
import ToggleButton from "../../../../UI/ToggleButton/ToggleButton";

const TodoListPanel: React.FC<ProjectsProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-40 items-center backdrop-blur-sm">
      <div className="bg-white/10 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-max h-5/6 overflow-auto scrollbar-none">
        {/* Header */}
        <div className="flex w-full items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h5 className="text-2xl text-center m-auto">Projekt: Lista zadań</h5>
        </div>

        {/* Funkcjonalności */}
        <div className="flex flex-col text-left p-2 my-3">
          <p className="text-xl">Funkcjonalności:</p>
          <p className="text-sm mt-1">✅ Dodawanie nowych zadań</p>
          <p className="text-sm mt-1">✅ Edytowanie istniejących zadań</p>
          <p className="text-sm mt-1">✅ Usuwanie zadań</p>
          <p className="text-sm mt-1">✅ Oznaczanie zadań jako ukończone</p>
          <p className="text-sm mt-1">✅ Zapisywanie stanu w localStorage</p>
        </div>

        {/* Opis */}
        <div className="flex flex-col text-left">
          <p className="text-xl">Opis</p>
          <p className="text-sm mt-2">
            Projekt to interaktywna **lista zadań** zbudowana w czystym JavaScript, HTML i
            CSS. Umożliwia użytkownikowi łatwe zarządzanie swoimi zadaniami poprzez
            dodawanie, edytowanie, usuwanie oraz oznaczanie ich jako ukończone.
          </p>
          <p className="text-sm my-2">
            Stan listy jest automatycznie zapisywany w pamięci przeglądarki
            (`localStorage`), dzięki czemu zadania nie znikają po odświeżeniu strony.
            Projekt jest prosty, responsywny i działa bez zewnętrznych bibliotek.
          </p>
        </div>

        {/* Screenshots */}
        <div className="flex items-center w-full mt-1">
          <img
            src={todo}
            alt="Zrzut ekranu listy zadań"
            className="w-1/2 rounded-xl shadow-md shadow-black"
          />
        </div>

        {/* Technologie */}
        <div className="flex flex-col">
          <div className="flex flex-wrap mt-5 justify-center">
            <p className="w-full text-left text-xl">Użyte technologie:</p>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
              HTML
            </div>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={css} alt="ikonka CSS" className="w-[20px] m-2" />
              CSS
            </div>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={js} alt="ikonka JavaScript" className="w-[20px] m-2" />
              JavaScript
            </div>
          </div>

          {/* Narzędzia developerskie */}
          <div className="flex flex-wrap justify-center">
            <p className="w-full text-left text-xl">Użyte narzędzia developerskie:</p>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={npm} alt="ikonka npm" className="w-[40px] mx-2" />
              npm
            </div>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={node} alt="ikonka Node.js" className="w-[25px] mx-2" />
              Node.js
            </div>
          </div>
          <LinksPanel
            githubLink="https://github.com/michalpawlowski-mp/todo-list"
            websiteLink="https://michalpawlowski-mp.github.io/todo-list/"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoListPanel;
