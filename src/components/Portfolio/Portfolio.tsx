import ProjectList from "./projects/Projects.tsx";

const Portfolio: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center ">
      <h2 className="text-5xl pb-10">Moje Projekty</h2>
      <ProjectList />
    </section>
  );
};

export default Portfolio;
