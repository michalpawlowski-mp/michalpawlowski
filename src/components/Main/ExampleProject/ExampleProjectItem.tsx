import { useToggle } from "../../../hooks/useToggle";
import { ProjectsDataProps } from "../../../types/ProjectsProps";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";
import ProjectPanel from "../../Portfolio/projects/ProjectPanel";

interface Props {
  project: ProjectsDataProps;
}

const ExampleProjectItem: React.FC<Props> = ({ project }) => {
  const { isVisible, toggleVisibility } = useToggle();

  return (
    <>
      <div className="flex flex-col text-center justify-between items-center w-full md:w-1/3 bg-[#1a1d27]/50 border border-white/8 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40">
        <h4 className="text-lg font-medium text-white mb-3">{project.title}</h4>
        <p className="text-sm text-slate-400 text-left leading-relaxed">
          {project.miniDescription}
        </p>
        <ToggleButton
          content="Zobacz szczegóły"
          onClick={toggleVisibility}
          className="mt-4"
        />
      </div>
      {isVisible && (
        <ProjectPanel project={project} toggleVisibility={toggleVisibility} />
      )}
    </>
  );
};

export default ExampleProjectItem;
