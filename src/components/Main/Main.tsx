import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ExampleProjects from "./ExampleProject/ExampleProjects";

const Main: React.FC = () => {
  return (
    <main className="flex flex-col items-center md:px-4 px-2">
      <HeroSection />
      <ExampleProjects />
      <AboutSection />
    </main>
  );
};

export default Main;
