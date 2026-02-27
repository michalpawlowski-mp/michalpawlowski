import ExampleProjectItem from "./ExampleProjectItem";
import { ExapleProjectData } from "./ExampleProject.data";
import Button from "../ButtonLink";

const ExampleProjects: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-center">
      <h3 className="text-4xl mb-2">Wybrane projekty</h3>
      <div className="flex flex-col md:flex-row w-full px-2">
        {ExapleProjectData.map((project, index) => (
          <ExampleProjectItem key={index} {...project} />
        ))}
      </div>
      <Button link={"/Portfolio"} content="Zobacz wiecej moich projektów" />
    </section>
  );
};

export default ExampleProjects;
