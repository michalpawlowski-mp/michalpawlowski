import { useState } from "react";
import SupportIT from "./SupportIT/SupportIT";
import Developer from "./Developer/Developer";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";

const Carrier: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <article className="flex flex-col items-center bg-black/50 md:mx-2 mt-2 p-3 rounded-3xl w-full md:w-1/2  shadow-sm shadow-gray-600">
      <h2 className="text-3xl mb-2">Kariera</h2>
      <ToggleButton
        content="Zobacz moją kariere"
        onClick={toggleVisibility}
        className="rounded-full bg-white/10 hover:bg-white/20 shadow-sm shadow-gray-600"
      />
      {isVisible && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40 backdrop-blur-sm p-2">
          <div className="bg-white/10 p-2 rounded-2xl max-w-3xl w-full h-5/6 overflow-auto scrollbar-none">
            <ToggleButton content="Zamknij" onClick={toggleVisibility} />
            <div className="flex flex-col p-2 ">
              <Developer />
              <SupportIT />
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Carrier;
