import { wApp, html, less, js } from "../../../../../assets/imports/index";
import Links from "../../Link/Links";
import { useToggle } from "../../../../../hook/useToggle";
import ProjectThreePanel from "./WeatherPanel";

const Weather: React.FC = () => {
  const { isVisible, toggleVisibility } = useToggle();
  return (
    <div className="md:w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-2 shadow-lg">
      <p className="text-2xl overflow-hidden w-full border-b-2 border-white p-2">
        Aplikacja Pogodowa
      </p>
      <img src={wApp} alt="Podglad strony kólko i krzyżyk" />
      <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
        <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
        <img src={less} alt="ikonka LESS" className="w-[20px] m-2" />
        <img src={js} alt="ikonka JavaScript" className="w-[20px] m-2" />
      </div>
      <Links
        githubLink="https://github.com/michalpawlowski-mp/WeatherApp"
        websiteLink="https://weather-app-red-delta-87.vercel.app/"
        onInfoClick={toggleVisibility}
      />
      {isVisible && <ProjectThreePanel toggleVisibility={toggleVisibility} />}
    </div>
  );
};

export default Weather;
