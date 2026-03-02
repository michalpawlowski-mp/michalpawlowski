import * as img from "../../../assets/imports/index";

export interface ProjectDataProps {
  id: string;
  title: string;
  features: string[];
  description: string[];
  images: string[];
  technologies?: { name: string; src: string }[];
  devTools?: { name: string; src: string }[];
  links: {
    github: string;
    website: string;
  };
}

export const projectsData: ProjectDataProps[] = [
  {
    id: "calculator",
    title: "Kalkulator",
    features: [
      "Podstawowe operacje (+, -, *, /)",
      "Operacje specjalne (%, √, x²)",
      "Przycisk cofania (`undo`)",
      "Przycisk czyszczenia (`clear all`)",
      "Obsługa liczb dziesiętnych i ujemnych",
      "Zapisywanie stanu w localStorage",
    ],
    description: [
      `Projekt przedstawia prosty **kalkulator** zbudowany w czystym JavaScript, HTML i SCSS. 
      Aplikacja pozwala na wykonywanie podstawowych i specjalnych operacji matematycznych. 
      Stan kalkulatora jest zapisywany w pamięci przeglądarki ("localStorage"), 
      dzięki czemu po odświeżeniu strony sesja zostaje przywrócona.`,
      "Interfejs użytkownika jest responsywny i czytelny.",
    ],
    images: [img.cal],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "CSS", src: img.css },
      { name: "JavaScript", src: img.js },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/Calculator",
      website: "https://michalpawlowski-mp.github.io/Calculator/",
    },
  },

  {
    id: "clonetube",
    title: "CloneTube",
    features: [
      "Wyświetlanie filmów z API YouTube",
      "Wyszukiwanie treści",
      "Filtrowanie kategorii",
      "Modalny odtwarzacz",
    ],
    description: [
      `CloneTube to aplikacja stworzona jako klon YouTube, umożliwiająca
przeglądanie filmów z różnych kategorii oraz wyszukiwanie treści za pomocą
API YouTube. Użytkownik może łatwo otwierać wybrane wideo w odtwarzaczu
oraz przełączać się pomiędzy interesującymi go kategoriami tematycznymi.`,
      `Projekt został zaprojektowany z myślą o prostocie i intuicyjności. Dzięki
dynamicznemu filtrowaniu i wyszukiwaniu, użytkownik szybko znajdzie
interesujące materiały. Całość oparta jest o React i Next.js, a interfejs
został dostosowany do urządzeń mobilnych i desktopowych.`,
      `CloneTube łączy w sobie podstawowe funkcje serwisu YouTube, zapewniając
przejrzysty układ, responsywność i prosty system nawigacji. Projekt
świetnie pokazuje wykorzystanie zewnętrznego API i obsługę dynamicznych
komponentów w nowoczesnej aplikacji webowej.`,
    ],
    images: [img.clonetube, img.clonetubeVW],
    technologies: [
      { name: "React", src: img.react },
      { name: "Tailwind", src: img.tailwind },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/CloneTube",
      website: "https://clone-tube-ecru.vercel.app/",
    },
  },
  {
    id: "GamingHub",
    title: "GamingHub",
    features: [
      "Sortowanie i filtrowanie treści według kategorii (gry, aktualności, poradniki itp.)",
      "Możliwość zapisania ulubionych elementów (np. linków do gier)",
      "Rotacja trójkąta wskazująca aktywną opcję sortowania",
      "Obsługa wyszukiwania treści",
      "Dynamiczna nawigacja między różnymi sekcjami strony",
      "Lista linków do stron oferujących gry, recenzje i promocje",
      "Dostęp do informacji o nowościach i promocjach w sklepach gier",
    ],
    description: [
      `              Platforma umożliwia użytkownikom przeglądanie różnych kategorii treści,
              takich jak gry, aktualności i poradniki. Każdy użytkownik może filtrować,
              sortować i przeszukiwać te treści w prosty sposób. Użytkownicy mogą również
              zapisywać ulubione linki do stron z grami lub sklepów, co ułatwia szybki
              dostęp do interesujących ofert.`,
      `  Dodatkowo, kod JavaScript umożliwia dynamiczną zmianę aktywnych opcji,
              takich jak sortowanie czy zmiana statusu "ulubione". Strona wykorzystuje
              również style CSS, aby była responsywna i dostosowana do wyświetlania na
              różnych urządzeniach (mobilnych, desktopowych).`,
      `              Strona została zaprojektowana w sposób prosty i intuicyjny, dostarczając
              użytkownikom przyjemne doświadczenie przeglądania. Dzięki dynamicznym
              interakcjom, użytkownicy mogą szybko znaleźć interesujące ich treści i łatwo
              przechodzić między kategoriami. Projekt ma na celu stworzenie centralnego
              źródła informacji, które będzie pełnić rolę bazy zasobów i linków dla
              każdego pasjonata gier.`,
    ],
    images: [img.gaminghub, img.gaminghubart, img.gaminghubart],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "CSS", src: img.css },
      { name: "JavaScript", src: img.js },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/GamingHub",
      website: "https://michalpawlowski-mp.github.io/GamingHub/",
    },
  },
  {
    id: "Notatnik",
    title: "Notatnik",
    features: [
      "Dodawanie nowych notatek”",
      "Edycja istniejących notatek",
      "Usuwanie notatek",
      "Zapisywanie notatek w LocalStorage",
      "Widok siatki notatek z kartami",
      "Zmiana motywu jasny/ciemny",
      "Responsywny design dla różnych ekranów",
    ],
    description: [
      `              Notatnik pozwala użytkownikom na tworzenie, edycję i usuwanie notatek. Każda
              notatka zapisuje się w LocalStorage, więc pozostaje nawet po zamknięciu
              przeglądarki.`,
      `               Użytkownik może przeglądać notatki w formie kart w siatce, które pokazują
              tytuł, treść i datę utworzenia. Panel posiada również możliwość zmiany
              motywu pomiędzy jasnym a ciemnym, co zapewnia komfort pracy.`,
      `               Projekt jest prosty i intuicyjny, z responsywnym designem, aby działał
              dobrze zarówno na desktopie, jak i urządzeniach mobilnych. Celem projektu
              jest szybkie i wygodne zarządzanie własnymi notatkami.`,
    ],
    images: [
      img.notebook,
      img.notebookWhite,
      img.notebookEdit,
      img.notebookNew,
    ],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "CSS", src: img.sass },
      { name: "JavaScript", src: img.js },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/Notebook",
      website: "https://michalpawlowski-mp.github.io/Notebook/",
    },
  },
  {
    id: "ShoesShop",
    title: "ShoesShop",
    features: [
      "Lista produktów (Nike, Adidas, New Balance) na stronie głównej",
      "Filtrowanie produktów według marki, płci, ceny oraz nazwy",
      "Dynamiczny przycisk resetowania filtrów widoczny przy aktywnych filtrach",
      "Informacja o braku wyników przy niepasujących filtrach",
      "Koszyk zakupowy z możliwością dodawania i usuwania produktów",
      "Komunikat o pustym koszyku, gdy brak produktów",
      "Automatyczne sumowanie wartości koszyka",
      "Zapisywanie koszyka w LocalStorage",
      "Strona szczegółów produktu z galerią zdjęć",
      "Wybór rozmiaru – brak możliwości dodania produktu bez wybranego rozmiaru",
      "Responsywny interfejs dopasowany do desktopu i urządzeń mobilnych",
    ],
    description: [
      `                         ShoesShop to aplikacja webowa typu e-commerce umożliwiająca przeglądanie i
              zakup obuwia sportowego marek Nike, Adidas oraz New Balance.
              przeglądarki.`,
      `                           Na stronie głównej użytkownik ma dostęp do listy produktów z rozbudowanym
              systemem filtrowania według marki, płci, ceny oraz nazwy. Aktywne filtry są
              sygnalizowane, a ich reset możliwy jest jednym kliknięciem. W przypadku
              braku produktów spełniających kryteria wyświetlany jest odpowiedni
              komunikat.`,
      `                            Aplikacja posiada koszyk zakupowy z możliwością dodawania i usuwania
              produktów, automatycznym sumowaniem ceny oraz obsługą pustego stanu koszyka.
              Zawartość koszyka zapisywana jest w LocalStorage, dzięki czemu pozostaje
              zachowana po odświeżeniu strony.`,
      `                       Każdy produkt posiada dedykowaną stronę szczegółów z galerią zdjęć oraz
              możliwością wyboru rozmiaru. Dodanie produktu do koszyka jest możliwe
              dopiero po wybraniu rozmiaru, co zapobiega błędom użytkownika. Projekt
              został wykonany z naciskiem na czytelny UX i responsywność interfejsu.`,
    ],
    images: [
      img.shoesShop,
      img.shooesShopNoResult,
      img.shoesShopCartFull,
      img.shoesShopProduct,
      img.shoesShopCartEmpty,
    ],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "CSS", src: img.css },
      { name: "JavaScript", src: img.js },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/ShoesShop",
      website: "https://michalpawlowski-mp.github.io/ShoesShop/",
    },
  },
  {
    id: "Slider",
    title: "Slider",
    features: [
      "Przeglądanie zdjęć w trybie slidera",
      "Nawigacja strzałkami (lewo / prawo)",
      "Zmiana slajdu poprzez kliknięcie w kropki (nawigacja dolna)",
      "Aktywny slajd podświetlany klasą .active",
      "Obsługa pętli (ostatni → pierwszy)",
    ],
    description: [
      `              Projekt przedstawia prosty **slider zdjęć** zbudowany w czystym JavaScripcie,
            HTML i SCSS. Użytkownik może zmieniać zdjęcia za pomocą strzałek lub
            nawigacyjnych kropek. Struktura opiera się na prostych klasach CSS, a skrypt
            obsługuje logikę zmiany aktywnego slajdu.`,
      `                 Projekt jest responsywny i zoptymalizowany do działania w przeglądarce bez
            dodatkowych bibliotek.`,
    ],
    images: [img.slider],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "SCSS", src: img.sass },
      { name: "JavaScript", src: img.js },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/ShoesShop",
      website: "https://michalpawlowski-mp.github.io/ShoesShop/",
    },
  },
  {
    id: "kolko-i-krzyzyk",
    title: "Kółko i krzyżyk",
    features: [
      "Interaktywna plansza 3x3 do gry w „Kółko i Krzyżyk”",
      "Dynamiczna zmiana gracza (X i O)",
      "Dynamiczna zmiana gracza (X i O)",
      "Możliwość restartu gry jednym przyciskiem",
    ],
    description: [
      `           Gra rozpoczyna się od planszy 3x3, na której gracze na zmianę umieszczają
            swoje symbole (X lub O). Po każdym ruchu aplikacja sprawdza, czy któryś z
            graczy wygrał lub czy nastąpił remis. Po zakończeniu gry można uruchomić nową
            rozgrywkę za pomocą przycisku „Restart”.`,
      `             Projekt został zaprojektowany z myślą o prostocie i wygodzie użytkowania,
            oferując płynną animację oraz intuicyjne interakcje..`,
    ],
    images: [img.xo, img.xor],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "SCSS", src: img.sass },
      { name: "TypeScript", src: img.ts },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/X-O",
      website: "https://michalpawlowski-mp.github.io/X-O/",
    },
  },
];
