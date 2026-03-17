import * as img from "../assets/imports";

export interface ProjectsDataProps {
  id: string;
  title: string;
  features: string[];
  description: string[];
  miniDescription?: string;
  images: string[];
  technologies: { name: string; src: string }[];
  devTools?: { name: string; src: string }[];
  links: {
    github: string;
    website: string;
  };
  example?: boolean;
}

export const projectsData: ProjectsDataProps[] = [
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
    miniDescription: `Moja aplikacja CloneTube wykorzystuje API YouTube do wyświetlania filmów wideo w
    wybranej kategorii lub na podstawie wyszukiwanego hasła. Umożliwia użytkownikowi
    przeglądanie listy filmów, otwieranie ich w odtwarzaczu oraz szybkie przełączanie się między różnymi kategoriami tematycznymi`,
    images: [img.clonetube, img.clonetubeVW],
    technologies: [
      { name: "React", src: img.react },
      { name: "TypeScript", src: img.ts },
      { name: "Tailwind", src: img.tailwind },
    ],
    devTools: [
      { name: "next.js", src: img.next },
      { name: "vercel", src: img.vercel },
      { name: "npm", src: img.npm },
      { name: "node.js", src: img.node },
      { name: "API", src: img.yt },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/CloneTube",
      website: "https://clone-tube-ecru.vercel.app/",
    },
    example: true,
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
      `ShoesShop to aplikacja webowa typu e-commerce umożliwiająca przeglądanie i
      zakup obuwia sportowego marek Nike, Adidas oraz New Balance.
      przeglądarki.`,
      `Na stronie głównej użytkownik ma dostęp do listy produktów z rozbudowanym
      systemem filtrowania według marki, płci, ceny oraz nazwy. Aktywne filtry są
      sygnalizowane, a ich reset możliwy jest jednym kliknięciem. W przypadku
      braku produktów spełniających kryteria wyświetlany jest odpowiedni
      komunikat.`,
      `Aplikacja posiada koszyk zakupowy z możliwością dodawania i usuwania
      produktów, automatycznym sumowaniem ceny oraz obsługą pustego stanu koszyka.
      Zawartość koszyka zapisywana jest w LocalStorage, dzięki czemu pozostaje
      zachowana po odświeżeniu strony.`,
      `Każdy produkt posiada dedykowaną stronę szczegółów z galerią zdjęć oraz
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
      { name: "React", src: img.react },
      { name: "TypeScript", src: img.ts },
      { name: "Styled Component", src: img.styled },
    ],
    devTools: [
      { name: "next.js", src: img.next },
      { name: "Vite", src: img.vite },
      { name: "npm", src: img.npm },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/ShoesShop",
      website: "https://michalpawlowski-mp.github.io/ShoesShop/",
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
      `Platforma umożliwia użytkownikom przeglądanie różnych kategorii treści,
      takich jak gry, aktualności i poradniki. Każdy użytkownik może filtrować,
      sortować i przeszukiwać te treści w prosty sposób. Użytkownicy mogą również
      zapisywać ulubione linki do stron z grami lub sklepów, co ułatwia szybki
      dostęp do interesujących ofert.`,
      `  Dodatkowo, kod JavaScript umożliwia dynamiczną zmianę aktywnych opcji,
      takich jak sortowanie czy zmiana statusu "ulubione". Strona wykorzystuje
      również style CSS, aby była responsywna i dostosowana do wyświetlania na
      różnych urządzeniach (mobilnych, desktopowych).`,
      `Strona została zaprojektowana w sposób prosty i intuicyjny, dostarczając
      użytkownikom przyjemne doświadczenie przeglądania. Dzięki dynamicznym
      interakcjom, użytkownicy mogą szybko znaleźć interesujące ich treści i łatwo
      przechodzić między kategoriami. Projekt ma na celu stworzenie centralnego
      źródła informacji, które będzie pełnić rolę bazy zasobów i linków dla
      każdego pasjonata gier.`,
    ],
    images: [img.gaminghub, img.gaminghubart, img.gaminghubshop],
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
    id: "WeatherApp",
    title: "Aplikacja Pogodowa",
    features: [
      "Wyszukiwanie pogody na podstawie nazwy miasta",
      "Pobieranie danych pogodowych z API OpenWeatherMap",
      "Wyświetlanie temperatury, opisu pogody oraz wilgotności",
      "Obsługa błędów i informowanie użytkownika o problemach",
      "Możliwość restartu gry jednym przyciskiem",
    ],
    description: [
      `Użytkownik wpisuje nazwę miasta w pole tekstowe i naciska przycisk "Pokaż
      pogodę" lub klawisz Enter. Aplikacja wysyła zapytanie do API OpenWeatherMap,
      pobiera aktualne dane pogodowe i wyświetla je na ekranie w przejrzystej
      formie. Jeśli miasto nie istnieje lub wystąpił problem z połączeniem,
      użytkownik otrzymuje odpowiedni komunikat.`,
      `Strona posiada nowoczesny i przyjazny interfejs, a dzięki gradientowemu tłu i
      animacjom zmiana danych odbywa się płynnie.`,
    ],
    miniDescription: `Moja aplikacja pogodowa wykorzystuje API OpenWeather do wyświetlania bieżącej
    pogody w wybranym mieście. Umożliwia użytkownikowi sprawdzenie aktualnej
    temperatury, wilgotności oraz ogólnych warunków pogodowych.`,
    images: [img.wApp, img.wAppTemp],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "LESS", src: img.less },
      { name: "JavaScript", src: img.js },
    ],
    devTools: [
      { name: "node.js", src: img.node },
      { name: "Vercel", src: img.vercel },
      { name: "npm", src: img.npm },
      { name: "Vite", src: img.vite },
      { name: "API", src: img.API },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/WeatherApp",
      website: "https://weather-app-red-delta-87.vercel.app/",
    },
    example: true,
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
      `Notatnik pozwala użytkownikom na tworzenie, edycję i usuwanie notatek. Każda
      notatka zapisuje się w LocalStorage, więc pozostaje nawet po zamknięciu
      przeglądarki.`,
      `Użytkownik może przeglądać notatki w formie kart w siatce, które pokazują
      tytuł, treść i datę utworzenia. Panel posiada również możliwość zmiany
      motywu pomiędzy jasnym a ciemnym, co zapewnia komfort pracy.`,
      `Projekt jest prosty i intuicyjny, z responsywnym designem, aby działał
      dobrze zarówno na desktopie, jak i urządzeniach mobilnych. Celem projektu
      jest szybkie i wygodne zarządzanie własnymi notatkami.`,
    ],
    images: [img.notebook, img.notebookWhite, img.notebookEdit, img.notebookNew],
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
    devTools: [
      { name: "npm", src: img.npm },
      { name: "node.js", src: img.node },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/Calculator",
      website: "https://michalpawlowski-mp.github.io/Calculator/",
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
      `Projekt przedstawia prosty **slider zdjęć** zbudowany w czystym JavaScripcie,
      HTML i SCSS. Użytkownik może zmieniać zdjęcia za pomocą strzałek lub
      nawigacyjnych kropek. Struktura opiera się na prostych klasach CSS, a skrypt
      obsługuje logikę zmiany aktywnego slajdu.`,
      `Projekt jest responsywny i zoptymalizowany do działania w przeglądarce bez
      dodatkowych bibliotek.`,
    ],
    images: [img.slider],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "SCSS", src: img.sass },
      { name: "JavaScript", src: img.js },
    ],
    devTools: [
      { name: "node.js", src: img.node },
      { name: "npm", src: img.npm },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/ShoesShop",
      website: "https://michalpawlowski-mp.github.io/ShoesShop/",
    },
  },
  {
    id: "ToDoList",
    title: "To-Do List",
    features: [
      "Dodawanie nowych zadań",
      "Edytowanie istniejących zadań",
      "Usuwanie zadań",
      "Oznaczanie zadań jako ukończone",
      "Zapisywanie stanu w localStorage",
    ],
    description: [
      `Projekt to interaktywna **lista zadań** zbudowana w czystym JavaScript, HTML i
      CSS. Umożliwia użytkownikowi łatwe zarządzanie swoimi zadaniami poprzez
      dodawanie, edytowanie, usuwanie oraz oznaczanie ich jako ukończone.`,
      `Stan listy jest automatycznie zapisywany w pamięci przeglądarki
      (localStorage), dzięki czemu zadania nie znikają po odświeżeniu strony.
      Projekt jest prosty, responsywny i działa bez zewnętrznych bibliotek.`,
    ],
    images: [img.todo],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "CSS", src: img.css },
      { name: "JavaScript", src: img.js },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/todo-list",
      website: "https://michalpawlowski-mp.github.io/todo-list/",
    },
  },
  {
    id: "kolko-i-krzyzyk",
    title: "Kółko i krzyżyk",
    features: [
      "Interaktywna plansza 3x3 do gry w „Kółko i Krzyżyk”",
      "Dynamiczna zmiana gracza (X i O)",
      "Weryfikacja wygranej oraz możliwość remisu",
      "Komunikaty informujące o stanie gry (czyja kolej, kto wygrał)",
      "Możliwość restartu gry jednym przyciskiem",
    ],
    description: [
      `Gra rozpoczyna się od planszy 3x3, na której gracze na zmianę umieszczają
    swoje symbole (X lub O). Po każdym ruchu aplikacja sprawdza, czy któryś z
    graczy wygrał lub czy nastąpił remis. Po zakończeniu gry można uruchomić nową
    rozgrywkę za pomocą przycisku „Restart”.`,
      `Projekt został zaprojektowany z myślą o prostocie i wygodzie użytkowania,
    oferując płynną animację oraz intuicyjne interakcje..`,
    ],
    miniDescription: `Mój mini projekt to klasyczna gra logiczna dla dwóch graczy. Pozwala na
    interaktywną rozgrywkę w przeglądarce, z automatycznym wykrywaniem zwycięzcy i
    możliwością restartu gry.`,
    images: [img.xo, img.xor],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "SCSS", src: img.sass },
      { name: "TypeScript", src: img.ts },
    ],
    devTools: [
      { name: "node.js", src: img.node },
      { name: "npm", src: img.npm },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/X-O",
      website: "https://michalpawlowski-mp.github.io/X-O/",
    },
    example: true,
  },
];
