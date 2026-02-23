import { clonetube, react, tw, next } from "../../../../../assets/imports/index";
import Links from "../../Link/Links";
import { useToggle } from "../../../../../hook/useToggle";
import CloneTubePanel from "./CloneTubePanel";

const CloneTube: React.FC = () => {
  const { isVisible, toggleVisibility } = useToggle();
  return (
    <div className="md:w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-2 shadow-lg">
      <p className="text-2xl overflow-hidden w-full border-b-2 border-white p-2">
        CloneTube
      </p>
      <img src={clonetube} alt="Podglad strony kólko i krzyżyk" />
      <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
        <img src={react} alt="ikonka react" className="w-[20px] m-2" />
        <img src={tw} alt="ikonka tailwind" className="w-[20px] m-2" />
        <img src={next} alt="ikonka next.js" className="w-[20px] m-2 invert" />
      </div>
      <Links
        githubLink="https://github.com/michalpawlowski-mp/CloneTube"
        websiteLink="https://clone-tube-ecru.vercel.app//"
        onInfoClick={toggleVisibility}
      />
      {isVisible && <CloneTubePanel toggleVisibility={toggleVisibility} />}
    </div>
  );
};

export default CloneTube;
