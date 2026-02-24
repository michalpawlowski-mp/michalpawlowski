import React from "react";
import LinksPanel from "../../Link/LinksPanel";
import ProjectsProps from "../../../../../types/ProjectsProps";
import {
  notebook,
  notebookEdit,
  notebookNew,
  notebookWhite,
  html,
  css,
  js,
} from "../../../../../assets/imports";
import ToggleButton from "../../../../UI/ToggleButton/ToggleButton";

const NotebookPanel: React.FC<ProjectsProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-40 backdrop-blur-sm ">
      <div className="bg-white/20 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-full h-5/6 overflow-auto scrollbar-none ">
        {/* Nagłówek */}
        <div className="flex w-full items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h4 className="text-2xl text-center m-auto">Notatnik</h4>
        </div>

        {/* Funkcjonalności */}
        <div className="flex flex-col p-2">
          <div className="flex flex-col text-left my-4">
            <p className="text-xl">Funkcjonalności:</p>
            <p className="text-sm mt-1">✅ Dodawanie nowych notatek</p>
            <p className="text-sm mt-1">✅ Edycja istniejących notatek</p>
            <p className="text-sm mt-1">✅ Usuwanie notatek</p>
            <p className="text-sm mt-1">✅ Zapisywanie notatek w LocalStorage</p>
            <p className="text-sm mt-1">✅ Widok siatki notatek z kartami</p>
            <p className="text-sm mt-1">✅ Zmiana motywu jasny/ciemny</p>
            <p className="text-sm mt-1">✅ Responsywny design dla różnych ekranów</p>
          </div>

          {/* Opis projektu */}
          <div className="flex flex-col text-left">
            <p className="text-xl">Opis</p>
            <p className="text-sm mt-2">
              Notatnik pozwala użytkownikom na tworzenie, edycję i usuwanie notatek. Każda
              notatka zapisuje się w LocalStorage, więc pozostaje nawet po zamknięciu
              przeglądarki.
            </p>
            <p className="text-sm my-2">
              Użytkownik może przeglądać notatki w formie kart w siatce, które pokazują
              tytuł, treść i datę utworzenia. Panel posiada również możliwość zmiany
              motywu pomiędzy jasnym a ciemnym, co zapewnia komfort pracy.
            </p>
            <p className="text-sm my-2 pb-2">
              Projekt jest prosty i intuicyjny, z responsywnym designem, aby działał
              dobrze zarówno na desktopie, jak i urządzeniach mobilnych. Celem projektu
              jest szybkie i wygodne zarządzanie własnymi notatkami.
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-style">
          <div className="snap-center flex-shrink-0 w-full">
            <img src={notebook} alt="slide 0" className="w-full flex-shrink-0" />
          </div>
          <div className="snap-center flex-shrink-0 w-full">
            <img src={notebookWhite} alt="slide 0" className="w-full flex-shrink-0" />
          </div>
          <div className="snap-center flex-shrink-0 w-full">
            <img src={notebookEdit} alt="slide 0" className="w-full flex-shrink-0" />
          </div>
          <div className="snap-center flex-shrink-0 w-full">
            <img src={notebookNew} alt="slide 0" className="w-full flex-shrink-0" />
          </div>
        </div>

        {/* Technologie */}
        <div className="flex">
          <div className="w-1/3 bg-black/50 px-5 rounded-full m-2 flex items-center justify-center">
            <img src={html} alt="HTML" className="w-[20px] m-2" />
            HTML
          </div>
          <div className="w-1/3 bg-black/50 p-1 rounded-full m-2 flex items-center justify-center">
            <img src={css} alt="CSS" className="w-[20px] m-2" />
            CSS
          </div>
          <div className="w-1/3 bg-black/50 p-2 px-5 rounded-full m-2 flex items-center justify-center">
            <img src={js} alt="JavaScript" className="w-[20px] m-2" />
            JavaScript
          </div>
        </div>

        {/* Linki */}
        <LinksPanel
          githubLink="https://github.com/michalpawlowski-mp/Notebook"
          websiteLink="https://michalpawlowski-mp.github.io/Notebook/"
        />
      </div>
    </div>
  );
};

export default NotebookPanel;
