import { useToggle } from "../../../hooks/useToggle";
import { ProjectsDataProps } from "../../../data/projects.data";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";
import ProjectPanel from "../../Portfolio/projects/ProjectPanel";

interface Props {
  project: ProjectsDataProps;
}

const ExampleProjectItem: React.FC<Props> = ({ project }) => {
  const { isVisible, toggleVisibility } = useToggle();

  return (
    <>
      <div className="flex flex-col text-center justify-between items-center w-full md:w-1/3 bg-gray-700/50 p-4 md:mx-2 my-2 rounded-xl shadow-inner shadow-black transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/60 hover:bg-gray-700/70">
        <h4 className="text-2xl mb-3">{project.title}</h4>
        <p className="text-sm text-left pb-1">{project.miniDescription}</p>
        <ToggleButton
          content="Zobacz szczegóły"
          onClick={toggleVisibility}
          className="mt-3"
        />
      </div>
      {isVisible && (
        <ProjectPanel project={project} toggleVisibility={toggleVisibility} />
      )}
    </>
  );
};

export default ExampleProjectItem;
