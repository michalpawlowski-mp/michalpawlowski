import React from "react";
import { technologiesData, devToolsData } from "./WeatherData";
import Technologies from "../../Technologies/Technologies";
import { wApp, wAppTemp } from "../../../../../assets/imports/imgProjects";
import LinksPanel from "../../Link/LinksPanel";
import ProjectsProps from "../../../../../types/ProjectsProps";
import ToggleButton from "../../../../UI/ToggleButton/ToggleButton";

const WeatherPanel: React.FC<ProjectsProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-40 items-center backdrop-blur-sm">
      <div className="bg-white/10 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-max h-5/6 overflow-auto scrollbar-none">
        <div className="flex w-full items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h5 className="text-2xl text-center m-auto">Aplikacja Pogodowa</h5>
        </div>
        <div className="flex flex-col text-left  p-2 my-3">
          <p className="text-xl">Funkcjonalności:</p>
          <p className="text-sm mt-1">✅ Wyszukiwanie pogody na podstawie nazwy miasta</p>
          <p className="text-sm mt-1">
            ✅ Pobieranie danych pogodowych z API OpenWeatherMap
          </p>
          <p className="text-sm mt-1">
            ✅ Wyświetlanie temperatury, opisu pogody oraz wilgotności
          </p>
          <p className="text-sm mt-1">
            ✅ Obsługa błędów i informowanie użytkownika o problemach
          </p>
          <p className="text-sm mt-1">
            ✅ Możliwość wyszukiwania zarówno przyciskiem, jak i klawiszem Enter
          </p>
        </div>
        <div className="flex flex-col text-left">
          <p className="text-xl">Opis</p>
          <p className="text-sm mt-2">
            Użytkownik wpisuje nazwę miasta w pole tekstowe i naciska przycisk "Pokaż
            pogodę" lub klawisz Enter. Aplikacja wysyła zapytanie do API OpenWeatherMap,
            pobiera aktualne dane pogodowe i wyświetla je na ekranie w przejrzystej
            formie. Jeśli miasto nie istnieje lub wystąpił problem z połączeniem,
            użytkownik otrzymuje odpowiedni komunikat.
          </p>
          <p className="text-sm my-2">
            Strona posiada nowoczesny i przyjazny interfejs, a dzięki gradientowemu tłu i
            animacjom zmiana danych odbywa się płynnie.
          </p>
        </div>
        <div className="flex mt-1 gap-1">
          <img
            src={wApp}
            alt="ikona aplikacji pogodowej"
            className="w-1/2 rounded-xl shadow-md shadow-black"
          />
          <img
            src={wAppTemp}
            alt="ikona temperatury"
            className="w-1/2 rounded-xl shadow-md shadow-black "
          />
        </div>
        <div className="flex flex-col">
          <Technologies technologies={technologiesData} devTools={devToolsData} />
          <LinksPanel
            githubLink="https://github.com/michalpawlowski-mp/WeatherApp"
            websiteLink="https://weather-app-red-delta-87.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherPanel;
