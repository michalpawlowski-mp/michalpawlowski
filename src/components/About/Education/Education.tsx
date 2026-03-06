import { useState } from "react";
import EducationItem from "./EducationItem";
import { educationData } from "./education.data";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <article className="flex flex-col items-center bg-black/50 md:mx-2 mt-2 p-3 rounded-3xl w-full md:w-1/2  shadow-sm shadow-gray-600">
      <h2 className="text-3xl mb-2">Wykształcenie</h2>
      <ToggleButton
        content="Zobacz moje wykształcenie"
        onClick={toggleVisibility}
        className="rounded-full bg-white/10 shadow-sm shadow-gray-600"
      />
      {isVisible && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40 backdrop-blur-sm p-2">
          <div className="bg-white/10 p-2 rounded-2xl max-w-3xl w-full h-5/6 overflow-auto scrollbar-none">
            <button
              type="button"
              onClick={toggleVisibility}
              className="mb-4 p-2 bg-white/10 text-white rounded-xl"
            >
              Zamknij
            </button>
            {educationData.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default Education;
