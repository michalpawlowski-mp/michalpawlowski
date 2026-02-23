import Banner from "./Banner/Banner";
import Skills from "./Skills/Skills";
import Description from "./Description/Description";
import Carrier from "./Carrier/Carrier";
import Education from "./Education/Education";

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full mx-auto px-2">
      <Banner />
      <div className="flex flex-col w-full justify-center md:flex-row">
        <Skills />
        <Description />
      </div>
      <div className="flex flex-col w-full justify-center md:flex-row">
        <Carrier />
        <Education />
      </div>
    </section>
  );
};

export default About;
