import ExampleProjectItem from "./ExampleProjectItem";
import { projectsData } from "../../../data/projects.data";
import Button from "../ButtonLink";

const ExampleProjects: React.FC = () => {
  const exampleProjects = projectsData.filter((p) => p.example);

  return (
    <section className="flex flex-wrap justify-center">
      <h3 className="text-4xl mb-2">Wybrane projekty</h3>
      <div className="flex flex-col md:flex-row w-full px-2">
        {exampleProjects.map((project) => (
          <ExampleProjectItem key={project.id} project={project} />
        ))}
      </div>
      <Button link={"/Portfolio"} content="Zobacz więcej moich projektów" />
    </section>
  );
};

export default ExampleProjects;
