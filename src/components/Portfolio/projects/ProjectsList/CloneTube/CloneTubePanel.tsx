import React from "react";
import { clonetube, clonetubeVW } from "../../../../../assets/imports";
import { technologiesData, devToolsData } from "./CloneTubeData";
import LinksPanel from "../../Link/LinksPanel";
import Technologies from "../../Technologies/Technologies";
import ProjectsProps from "../../../../../types/ProjectsProps";
import ToggleButton from "../../../../UI/ToggleButton/ToggleButton";

const CloneTubePanel: React.FC<ProjectsProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-40 items-center backdrop-blur-sm">
      <div className="bg-white/10 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-full h-5/6 overflow-auto scrollbar-none">
        <div className="flex w-full items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h4 className="text-2xl text-center m-auto">CloneTube</h4>
        </div>
        <div className="flex flex-col p-2">
          <div>
            <div className="flex flex-col text-left my-4">
              <p className="text-xl">Funkcjonalności:</p>
              <p className="text-sm mt-1">✅ Wyświetlanie filmów z API YouTube</p>
              <p className="text-sm mt-1">✅ Wyszukiwanie treści po wpisanym haśle</p>
              <p className="text-sm mt-1">
                ✅ Sortowanie i filtrowanie filmów według kategorii (muzyka, gry, sport
                itp.)
              </p>
              <p className="text-sm mt-1">✅ Otwieranie filmu w modalnym odtwarzaczu</p>
              <p className="text-sm mt-1">✅ Dynamiczna nawigacja i responsywny układ</p>
            </div>
            <div className="flex flex-col text-left">
              <p className="text-xl">Opis</p>
              <p className="text-sm mt-2">
                CloneTube to aplikacja stworzona jako klon YouTube, umożliwiająca
                przeglądanie filmów z różnych kategorii oraz wyszukiwanie treści za pomocą
                API YouTube. Użytkownik może łatwo otwierać wybrane wideo w odtwarzaczu
                oraz przełączać się pomiędzy interesującymi go kategoriami tematycznymi.
              </p>
              <p className="text-sm my-2">
                Projekt został zaprojektowany z myślą o prostocie i intuicyjności. Dzięki
                dynamicznemu filtrowaniu i wyszukiwaniu, użytkownik szybko znajdzie
                interesujące materiały. Całość oparta jest o React i Next.js, a interfejs
                został dostosowany do urządzeń mobilnych i desktopowych.
              </p>
              <p className="text-sm my-2 pb-2">
                CloneTube łączy w sobie podstawowe funkcje serwisu YouTube, zapewniając
                przejrzysty układ, responsywność i prosty system nawigacji. Projekt
                świetnie pokazuje wykorzystanie zewnętrznego API i obsługę dynamicznych
                komponentów w nowoczesnej aplikacji webowej.
              </p>
            </div>
          </div>
          <div className="relative w-full overflow-hidden flex gap-1">
            <img
              src={clonetube}
              alt="ikona aplikacji pogodowej"
              className="w-1/2  rounded-xl shadow-md "
            />
            <img
              src={clonetubeVW}
              alt="ikona aplikacji pogodowej"
              className="w-1/2  rounded-xl shadow-md "
            />
          </div>
          <Technologies technologies={technologiesData} devTools={devToolsData} />
          <LinksPanel
            githubLink="https://github.com/michalpawlowski-mp/CloneTube"
            websiteLink="https://clone-tube-ecru.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default CloneTubePanel;
