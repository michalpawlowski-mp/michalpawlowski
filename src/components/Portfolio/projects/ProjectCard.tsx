import { useToggle } from "../../../hooks/useToggle";
import { ProjectDataProps } from "./projects.data";
import ProjectPanel from "./ProjectPanel";

interface Props {
  project: ProjectDataProps;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { isVisible, toggleVisibility } = useToggle();

  return (
    <div className="md:w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 border-white rounded-2xl m-2 shadow-lg">
      <p className="text-2xl w-full border-b-2 border-white p-2">{project.title}</p>

      <img src={project.images[0]} alt={project.title} />

      <div className="flex justify-center w-full border-t-2 border-b-2 border-white">
        {project.technologies.map((tech) => (
          <img key={tech.name} src={tech.src} alt={tech.name} className="w-[20px] m-2" />
        ))}
      </div>

      <button onClick={toggleVisibility}>Szczegóły</button>

      {isVisible && (
        <ProjectPanel project={project} toggleVisibility={toggleVisibility} />
      )}
    </div>
  );
};

export default ProjectCard;
