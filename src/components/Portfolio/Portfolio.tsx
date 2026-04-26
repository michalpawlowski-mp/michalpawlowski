import ProjectList from "./projects/Projects.tsx";

const Portfolio: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">
        Moje Projekty
      </h2>
      <ProjectList />
    </section>
  );
};

export default Portfolio;
