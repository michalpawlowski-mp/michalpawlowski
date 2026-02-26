import { slider, html, sass, js } from "../../../../../assets/imports/index";
import Links from "../../Link/Links";
import SliderPanel from "./SliderPanel";
import { useToggle } from "../../../../../hooks/useToggle";

const Slider: React.FC = () => {
  const { isVisible, toggleVisibility } = useToggle();
  return (
    <div className="md:w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-2 shadow-lg">
      <p className="text-2xl overflow-hidden w-full border-b-2 border-white p-2">
        Slider
      </p>
      <img src={slider} alt="Podglad strony kólko i krzyżyk" />
      <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
        <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
        <img src={sass} alt="ikonka SASS" className="w-[20px] m-2" />
        <img src={js} alt="ikonka JavaScript" className="w-[20px] m-2" />
      </div>
      <Links
        githubLink="https://github.com/michalpawlowski-mp/Slider"
        websiteLink="https://michalpawlowski-mp.github.io/Slider/"
        onInfoClick={toggleVisibility}
      />
      {isVisible && <SliderPanel toggleVisibility={toggleVisibility} />}
    </div>
  );
};

export default Slider;
