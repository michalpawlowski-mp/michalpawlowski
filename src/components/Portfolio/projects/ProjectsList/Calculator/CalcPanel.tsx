import React from "react";
import { cal } from "../../../../../assets/imports";
import { technologiesData, devToolsData } from "./CalcData";
import Technologies from "../../Technologies/Technologies";
import LinksPanel from "../../Link/LinksPanel";
import ToggleButton from "../../../../UI/ToggleButton/ToggleButton";
import ProjectsProps from "../../../../../types/ProjectsProps";

const CalcPanel: React.FC<ProjectsProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-40 items-center backdrop-blur-sm">
      <div className="bg-white/10 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-max h-5/6 overflow-auto scrollbar-none">
        <div className="flex w-full items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h5 className="text-2xl text-center m-auto">Kalkulator</h5>
        </div>
        <div className="flex flex-col text-left p-2 my-3">
          <p className="text-xl">Funkcjonalności:</p>
          <p className="text-sm mt-1">✅ Podstawowe operacje (+, -, *, /)</p>
          <p className="text-sm mt-1">✅ Operacje specjalne (%, √, x²)</p>
          <p className="text-sm mt-1">✅ Przycisk cofania (`undo`)</p>
          <p className="text-sm mt-1">✅ Przycisk czyszczenia (`clear all`)</p>
          <p className="text-sm mt-1">✅ Obsługa liczb dziesiętnych i ujemnych</p>
          <p className="text-sm mt-1">✅ Zapisywanie stanu w localStorage</p>
        </div>
        <div className="flex flex-col text-left">
          <p className="text-xl">Opis</p>
          <p className="text-sm mt-2">
            Projekt przedstawia prosty **kalkulator** zbudowany w czystym JavaScript, HTML
            i SCSS. Aplikacja pozwala na wykonywanie podstawowych i specjalnych operacji
            matematycznych. Stan kalkulatora jest zapisywany w pamięci przeglądarki
            (`localStorage`), dzięki czemu po odświeżeniu strony sesja zostaje
            przywrócona.
          </p>
          <p className="text-sm my-2">
            Interfejs użytkownika jest responsywny i czytelny.
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-1">
          <img
            src={cal}
            alt="Zrzut ekranu kalkulatora"
            className="rounded-xl shadow-md shadow-black"
          />
        </div>
        <Technologies technologies={technologiesData} devTools={devToolsData} />
        <LinksPanel
          githubLink="https://github.com/michalpawlowski-mp/Calculator"
          websiteLink="https://michalpawlowski-mp.github.io/Calculator/"
        />
      </div>
    </div>
  );
};

export default CalcPanel;
