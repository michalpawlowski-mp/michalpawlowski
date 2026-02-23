import ExampleProjectSection from "./ExampleProject/ExampleProjectSection";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

const Main: React.FC = () => {
  return (
    <main className="flex flex-col items-center md:px-4 px-2">
      <HeroSection />
      <ExampleProjectSection />
      <AboutSection />
    </main>
  );
};

export default Main;
