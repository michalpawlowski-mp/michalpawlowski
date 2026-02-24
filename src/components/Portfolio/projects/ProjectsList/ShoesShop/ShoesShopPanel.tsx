import React from "react";
import LinksPanel from "../../Link/LinksPanel";
import ProjectsProps from "../../../../../types/ProjectsProps";
import { technologiesData, devToolsData } from "./ShoesShopData";
import Technologies from "../../Technologies/Technologies";
import {
  shoesShop,
  shoesShopCartEmpty,
  shoesShopCartFull,
  shoesShopProduct,
  shooesShopNoResult,
} from "../../../../../assets/imports";
import ToggleButton from "../../../../UI/ToggleButton/ToggleButton";

const ShoesShop: React.FC<ProjectsProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-40 backdrop-blur-sm ">
      <div className="bg-white/20 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-full h-5/6 overflow-auto scrollbar-none ">
        {/* Nagłówek */}
        <div className="flex w-full items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h4 className="text-2xl text-center m-auto">ShoesShop</h4>
        </div>

        {/* Funkcjonalności */}
        <div className="flex flex-col p-2">
          <div className="flex flex-col text-left my-4">
            <p className="text-xl">Funkcjonalności:</p>
            <p className="text-sm mt-1">
              ✅ Lista produktów (Nike, Adidas, New Balance) na stronie głównej
            </p>
            <p className="text-sm mt-1">
              ✅ Filtrowanie produktów według marki, płci, ceny oraz nazwy
            </p>
            <p className="text-sm mt-1">
              ✅ Dynamiczny przycisk resetowania filtrów widoczny przy aktywnych filtrach
            </p>
            <p className="text-sm mt-1">
              ✅ Informacja o braku wyników przy niepasujących filtrach
            </p>
            <p className="text-sm mt-1">
              ✅ Koszyk zakupowy z możliwością dodawania i usuwania produktów
            </p>
            <p className="text-sm mt-1">
              ✅ Komunikat o pustym koszyku, gdy brak produktów
            </p>
            <p className="text-sm mt-1">✅ Automatyczne sumowanie wartości koszyka</p>
            <p className="text-sm mt-1">✅ Zapisywanie koszyka w LocalStorage</p>
            <p className="text-sm mt-1">✅ Strona szczegółów produktu z galerią zdjęć</p>
            <p className="text-sm mt-1">
              ✅ Wybór rozmiaru – brak możliwości dodania produktu bez wybranego rozmiaru
            </p>
            <p className="text-sm mt-1">
              ✅ Responsywny interfejs dopasowany do desktopu i urządzeń mobilnych
            </p>
          </div>

          {/* Opis projektu */}
          <div className="flex flex-col text-left">
            <p className="text-xl">Opis</p>

            <p className="text-sm mt-2">
              ShoesShop to aplikacja webowa typu e-commerce umożliwiająca przeglądanie i
              zakup obuwia sportowego marek Nike, Adidas oraz New Balance.
            </p>

            <p className="text-sm my-2">
              Na stronie głównej użytkownik ma dostęp do listy produktów z rozbudowanym
              systemem filtrowania według marki, płci, ceny oraz nazwy. Aktywne filtry są
              sygnalizowane, a ich reset możliwy jest jednym kliknięciem. W przypadku
              braku produktów spełniających kryteria wyświetlany jest odpowiedni
              komunikat.
            </p>

            <p className="text-sm my-2">
              Aplikacja posiada koszyk zakupowy z możliwością dodawania i usuwania
              produktów, automatycznym sumowaniem ceny oraz obsługą pustego stanu koszyka.
              Zawartość koszyka zapisywana jest w LocalStorage, dzięki czemu pozostaje
              zachowana po odświeżeniu strony.
            </p>

            <p className="text-sm my-2 pb-2">
              Każdy produkt posiada dedykowaną stronę szczegółów z galerią zdjęć oraz
              możliwością wyboru rozmiaru. Dodanie produktu do koszyka jest możliwe
              dopiero po wybraniu rozmiaru, co zapobiega błędom użytkownika. Projekt
              został wykonany z naciskiem na czytelny UX i responsywność interfejsu.
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-style">
          <div className="snap-center flex-shrink-0 w-full">
            <img src={shoesShop} alt="slide 0" className="w-full flex-shrink-0" />
          </div>
          <div className="snap-center flex-shrink-0 w-full">
            <img
              src={shooesShopNoResult}
              alt="slide 0"
              className="w-full flex-shrink-0"
            />
          </div>
          <div className="snap-center flex-shrink-0 w-full">
            <img src={shoesShopCartFull} alt="slide 0" className="w-full flex-shrink-0" />
          </div>
          <div className="snap-center flex-shrink-0 w-full">
            <img src={shoesShopProduct} alt="slide 0" className="w-full flex-shrink-0" />
          </div>
          <div className="snap-center flex-shrink-0 w-full">
            <img
              src={shoesShopCartEmpty}
              alt="slide 0"
              className="w-full flex-shrink-0"
            />
          </div>
        </div>

        {/* Technologie */}
        <Technologies technologies={technologiesData} devTools={devToolsData} />

        {/* Linki */}
        <LinksPanel
          githubLink="https://github.com/michalpawlowski-mp/ShoesShop"
          websiteLink="https://michalpawlowski-mp.github.io/ShoesShop/"
        />
      </div>
    </div>
  );
};

export default ShoesShop;
