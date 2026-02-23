import { gaminghub, html, css, js } from "../../../../../assets/imports/index";
import Links from "../../Link/Links";
import GamingHubPanel from "./GammingHubPanel";
import { useToggle } from "../../../../../hook/useToggle";

const GamingHub: React.FC = () => {
  const { isVisible, toggleVisibility } = useToggle();
  return (
    <div className="md:w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-2 shadow-lg">
      <div className="flex w-full justify-center items-center border-b-2 border-white">
        <p className="text-2xl overflow-hidden w-full  p-2">GamingHub</p>
      </div>
      <img src={gaminghub} alt="Podglad strony GamingHub" className="" />
      <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
        <div className="flex">
          <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
          <img src={css} alt="ikonka CSS" className="w-[20px] m-2" />
          <img src={js} alt="ikonka JavaScript" className="w-[20px] m-2" />
        </div>
      </div>
      <Links
        githubLink="https://github.com/michalpawlowski-mp/GamingHub"
        websiteLink="https://michalpawlowski-mp.github.io/GamingHub/"
        onInfoClick={toggleVisibility}
      />
      {isVisible && <GamingHubPanel toggleVisibility={toggleVisibility} />}
    </div>
  );
};

export default GamingHub;
