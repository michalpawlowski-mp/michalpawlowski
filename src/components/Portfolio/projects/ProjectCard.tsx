import { useToggle } from "../../../hooks/useToggle";
import { ProjectsDataProps } from "../../../data/projects.data";
import ProjectPanel from "./ProjectPanel";
import Links from "./Link/Links";

interface Props {
  project: ProjectsDataProps;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { isVisible, toggleVisibility } = useToggle();

  return (
    <div className="md:w-[400px] bg-black/70 text-center flex flex-col items-center border-2 border-white rounded-2xl m-2 shadow-lg overflow-hidden">
      <p className="text-2xl w-full border-b-2 border-white p-2">
        {project.title}
      </p>
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full object-cover"
      />

      <div className="flex justify-center w-full border-t-2 border-b-2 border-white flex-wrap">
        {project.technologies.map((tech) => (
          <img
            key={tech.name}
            src={tech.src}
            alt={tech.name}
            className=" m-2"
          />
        ))}
      </div>
      <Links
        githubLink={project.links.github}
        websiteLink={project.links.website}
        onInfoClick={toggleVisibility}
      />
      {isVisible && (
        <ProjectPanel project={project} toggleVisibility={toggleVisibility} />
      )}
    </div>
  );
};

export default ProjectCard;
