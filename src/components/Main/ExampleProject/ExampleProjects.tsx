import ExampleProjectItem from "./ExampleProjectItem";
import { projectsData } from "../../../data/projects.data";
import Button from "../ButtonLink";

const ExampleProjects: React.FC = () => {
  const exampleProjects = projectsData.filter((p) => p.example);

  return (
    <section className="flex flex-col items-center w-full px-4 py-12 border-t border-white/5 gap-6">
      <h3 className="text-4xl font-bold text-white tracking-tight">Wybrane projekty</h3>
      <div className="flex flex-col md:flex-row w-full gap-4">
        {exampleProjects.map((project) => (
          <ExampleProjectItem key={project.id} project={project} />
        ))}
      </div>
      <Button link="/Portfolio" content="Zobacz więcej moich projektów" />
    </section>
  );
};

export default ExampleProjects;
