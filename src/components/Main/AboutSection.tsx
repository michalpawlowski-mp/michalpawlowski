import me from "../../assets/images/mypicture/me-a.svg";
import Button from "./ButtonLink";

const AboutSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full p-0 md:p-4 m-0 md:m-4">
      <div className=" flex rounded-full overflow-hidden p-2 md:mr-10 m-2 w-[125px] h-[125px] relative shadow-lg shadow-gray-400">
        <div className="animate-spin duration-1000 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700  w-full h-full absolute top-0 left-0"></div>
        <img src={me} alt="Moje zdjęcie w wersji animowanej" className="absolute" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl text-center mb-2">Więcej o mnie</p>
        <p className="text-sm text-center pb-2">
          Przejdz do zakładki "O mnie" aby dowiedzieć się więcej
        </p>

        <Button link={"/about"} content="Więcej o mnie" />
      </div>
    </div>
  );
};

export default AboutSection;
