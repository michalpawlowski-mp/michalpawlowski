import React from "react";
import { html, js, sass, npm, node, slider } from "../../../../../assets/imports/index";
import LinksPanel from "../../Link/LinksPanel";
import ProjectsProps from "../../../../../types/ProjectsProps";
import ToggleButton from "../../../../UI/ToggleButton/ToggleButton";

const SliderPanel: React.FC<ProjectsProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-40 backdrop-blur-sm ">
      <div className="bg-white/20 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-full h-5/6 overflow-auto scrollbar-none ">
        {/* Header */}
        <div className="flex w-full items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h5 className="text-2xl text-center m-auto">Projekt: Slider</h5>
        </div>

        {/* Funkcjonalności */}
        <div className="flex flex-col text-left p-2 my-3">
          <p className="text-xl">Funkcjonalności:</p>
          <p className="text-sm mt-1">✅ Przeglądanie zdjęć w trybie slidera</p>
          <p className="text-sm mt-1">✅ Nawigacja strzałkami (lewo / prawo)</p>
          <p className="text-sm mt-1">
            ✅ Zmiana slajdu poprzez kliknięcie w kropki (nawigacja dolna)
          </p>
          <p className="text-sm mt-1">
            ✅ Aktywny slajd podświetlany klasą <code>.active</code>
          </p>
          <p className="text-sm mt-1">✅ Obsługa pętli (ostatni → pierwszy)</p>
        </div>

        {/* Opis */}
        <div className="flex flex-col text-left">
          <p className="text-xl">Opis</p>
          <p className="text-sm mt-2">
            Projekt przedstawia prosty **slider zdjęć** zbudowany w czystym JavaScripcie,
            HTML i SCSS. Użytkownik może zmieniać zdjęcia za pomocą strzałek lub
            nawigacyjnych kropek. Struktura opiera się na prostych klasach CSS, a skrypt
            obsługuje logikę zmiany aktywnego slajdu.
          </p>
          <p className="text-sm my-2">
            Projekt jest responsywny i zoptymalizowany do działania w przeglądarce bez
            dodatkowych bibliotek.
          </p>
        </div>

        {/* Screenshots */}
        <div className="flex items-center w-full justify-center mt-1">
          <img
            src={slider}
            alt="Zrzut ekranu slidera"
            className="rounded-xl shadow-md shadow-black"
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
              <img src={sass} alt="ikonka SASS/SCSS" className="w-[20px] m-2" />
              SCSS
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
            githubLink="https://github.com/michalpawlowski-mp/Slider"
            websiteLink="https://michalpawlowski-mp.github.io/Slider/"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderPanel;
