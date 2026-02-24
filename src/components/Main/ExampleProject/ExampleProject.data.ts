import CloneTubePanel from "../../Portfolio/projects/ProjectsList/CloneTube/CloneTubePanel";
import WeatherPanel from "../../Portfolio/projects/ProjectsList/Weather/WeatherPanel";
import XoPanel from "../../Portfolio/projects/ProjectsList/XO/XoPanel";

export interface ExampleProjectProps {
  title: string;
  description: string;
  Panel: React.ComponentType<{ toggleVisibility: () => void }>;
}

export const ExapleProjectData: ExampleProjectProps[] = [
  {
    title: "CloneTube",
    description: `Moja aplikacja CloneTube wykorzystuje API YouTube do wyświetlania filmów wideo w
          wybranej kategorii lub na podstawie wyszukiwanego hasła. Umożliwia użytkownikowi
          przeglądanie listy filmów, otwieranie ich w odtwarzaczu oraz szybkie
          przełączanie się między różnymi kategoriami tematycznymi`,
    Panel: CloneTubePanel,
  },
  {
    title: "Aplikacja Pogodowa",
    description: `Moja aplikacja pogodowa wykorzystuje API OpenWeather do wyświetlania bieżącej
          pogody w wybranym mieście. Umożliwia użytkownikowi sprawdzenie aktualnej
          temperatury, wilgotności oraz ogólnych warunków pogodowych.`,
    Panel: WeatherPanel,
  },
  {
    title: "Gra w kółko i krzyżyk",
    description: `Mój mini projekt to klasyczna gra logiczna dla dwóch graczy. Pozwala na
          interaktywną rozgrywkę w przeglądarce, z automatycznym wykrywaniem zwycięzcy i
          możliwością restartu gry.`,
    Panel: XoPanel,
  },
];
