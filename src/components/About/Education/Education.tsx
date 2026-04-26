import { useState } from "react";
import EducationItem from "./EducationItem";
import { educationData } from "./education.data";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <article className="flex flex-col items-center bg-[#1a1d27]/50 border border-white/8 rounded-xl p-5 w-full md:w-1/2 gap-3 m-1">
      <h2 className="text-xl font-medium text-white">Wykształcenie</h2>
      <ToggleButton content="Zobacz moje wykształcenie" onClick={toggleVisibility} />
      {isVisible && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-40 backdrop-blur-sm p-4">
          <div className="bg-[#1a1d27] border border-white/10 rounded-xl max-w-3xl w-full overflow-auto scrollbar-none p-4">
            <ToggleButton content="Zamknij" onClick={toggleVisibility} />
            <div className="mt-4">
              {educationData.map((item, index) => (
                <EducationItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Education;
