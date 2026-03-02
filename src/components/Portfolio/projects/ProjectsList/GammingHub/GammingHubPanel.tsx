import React from "react";
import LinksPanel from "../../Link/LinksPanel";
import ProjectsProps from "../../../../../types/ProjectsProps";
import {
  gaminghub,
  gaminghubart,
  gaminghubshop,
  css,
  html,
  js,
} from "../../../../../assets/imports";
import ToggleButton from "../../../../UI/ToggleButton/ToggleButton";

const GamingHubPanel: React.FC<ProjectsProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 backdrop-blur-sm">
      <div className="bg-white/10 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-full h-5/6 overflow-auto scrollbar-none">
        <div className="flex w-full items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h4 className="text-2xl text-center m-auto">GamingHub</h4>
        </div>

        <div className="flex flex-col p-2">
          <div className="flex flex-col text-left my-4">
            <p className="text-xl">Funkcjonalności:</p>
            <p className="text-sm mt-1">
              ✅ Sortowanie i filtrowanie treści według kategorii (gry,
              aktualności, poradniki itp.)
            </p>
            <p className="text-sm mt-1">
              ✅ Możliwość zapisania ulubionych elementów (np. linków do gier)
            </p>
            <p className="text-sm mt-1">
              ✅ Rotacja trójkąta wskazująca aktywną opcję sortowania
            </p>
            <p className="text-sm mt-1">✅ Obsługa wyszukiwania treści</p>
            <p className="text-sm mt-1">
              ✅ Dynamiczna nawigacja między różnymi sekcjami strony
            </p>
            <p className="text-sm mt-1">
              ✅ Lista linków do stron oferujących gry, recenzje i promocje
            </p>
            <p className="text-sm mt-1">
              ✅ Dostęp do informacji o nowościach i promocjach w sklepach gier
            </p>
          </div>

          <div className="flex flex-col text-left">
            <p className="text-xl">Opis</p>
            <p className="text-sm mt-2">
              Platforma umożliwia użytkownikom przeglądanie różnych kategorii
              treści, takich jak gry, aktualności i poradniki. Każdy użytkownik
              może filtrować, sortować i przeszukiwać te treści w prosty sposób.
              Użytkownicy mogą również zapisywać ulubione linki do stron z grami
              lub sklepów, co ułatwia szybki dostęp do interesujących ofert.
            </p>
            <p className="text-sm my-2">
              Dodatkowo, kod JavaScript umożliwia dynamiczną zmianę aktywnych
              opcji, takich jak sortowanie czy zmiana statusu "ulubione". Strona
              wykorzystuje również style CSS, aby była responsywna i dostosowana
              do wyświetlania na różnych urządzeniach (mobilnych, desktopowych).
            </p>
            <p className="text-sm my-2 pb-2">
              Strona została zaprojektowana w sposób prosty i intuicyjny,
              dostarczając użytkownikom przyjemne doświadczenie przeglądania.
              Dzięki dynamicznym interakcjom, użytkownicy mogą szybko znaleźć
              interesujące ich treści i łatwo przechodzić między kategoriami.
              Projekt ma na celu stworzenie centralnego źródła informacji, które
              będzie pełnić rolę bazy zasobów i linków dla każdego pasjonata
              gier.
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-style">
          <div className="snap-center flex-shrink-0 w-full">
            <img src={gaminghub} alt="slide 0" className="w-full" />
          </div>
          <div className="snap-center flex-shrink-0 w-full">
            <img src={gaminghubart} alt="slide 1" className="w-full" />
          </div>
          <div className="snap-center flex-shrink-0 w-full">
            <img src={gaminghubart} alt="slide 2" className="w-full" />
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 bg-black/50 px-5 rounded-full m-2 flex items-center justify-center">
            <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
            HTML
          </div>
          <div className="w-1/3 bg-black/50 p-1 rounded-full m-2 flex items-center justify-center">
            <img src={css} alt="ikonka CSS" className="w-[20px] m-2" />
            CSS
          </div>
          <div className="w-1/3 bg-black/50 p-2 px-5 rounded-full m-2 flex items-center justify-center">
            <img src={js} alt="ikonka JavaScript" className="w-[20px] m-2" />
            JavaScript
          </div>
        </div>
        <LinksPanel
          githubLink="https://github.com/michalpawlowski-mp/GamingHub"
          websiteLink="https://michalpawlowski-mp.github.io/GamingHub/"
        />
      </div>
    </div>
  );
};

export default GamingHubPanel;
