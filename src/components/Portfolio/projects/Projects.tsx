import { projectsData } from "../../../data/projects.data";
import ProjectCard from "./ProjectCard";
import MoreProjects from "./MoreProject/MoreProject";
import { useState } from "react";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";

const Projects: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const hasMoreProjects = visibleCount < projectsData.length;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {projectsData.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {hasMoreProjects && (
        <ToggleButton
          content="Zobacz więcej"
          onClick={() => setVisibleCount((p) => p + 4)}
          className="mt-3 bg-white/10 hover:bg-white/20"
        />
      )}

      {!hasMoreProjects && <MoreProjects />}
    </div>
  );
};

export default Projects;
