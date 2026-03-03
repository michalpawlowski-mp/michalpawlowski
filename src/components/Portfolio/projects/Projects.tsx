import { projectsData } from "./projects.data";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const ProjectsList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {projectsData.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {visibleCount < projectsData.length && (
        <button type="button" onClick={() => setVisibleCount((p) => p + 4)}>
          Zobacz więcej
        </button>
      )}
    </div>
  );
};

export default ProjectsList;
