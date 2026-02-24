import { useToggle } from "../../../hook/useToggle";
import { ExampleProjectProps } from "./ExampleProject.data";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";

const ExampleProjectItem: React.FC<ExampleProjectProps> = ({
  title,
  description,
  Panel,
}) => {
  const { isVisible, toggleVisibility } = useToggle();

  return (
    <>
      <div className="flex flex-col text-center justify-between items-center w-full md:w-1/3 bg-gray-700/50 p-4 md:mx-2 my-2 rounded-xl shadow-inner shadow-black">
        <h4 className="text-2xl mb-3">{title}</h4>
        <p className="text-sm text-left pb-1">{description}</p>
        <ToggleButton
          content="Zobacz szczegóły"
          onClick={toggleVisibility}
          className="mt-3"
        />
      </div>
      {isVisible && <Panel toggleVisibility={toggleVisibility} />}
    </>
  );
};

export default ExampleProjectItem;
