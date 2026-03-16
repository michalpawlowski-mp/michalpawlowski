import me from "../../assets/images/mypicture/me-a.svg";
import Button from "./ButtonLink";

const AboutSection = () => {
  return (
    <section className="flex items-center justify-center w-full p-2">
      <div className="relative w-31.25 aspect-square shrink-0">
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg shadow-gray-400">
          <div className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-linear-to-r from-slate-900 via-slate-800 to-slate-700"></div>
          <img
            src={me}
            alt="Animowane zdjęcie Michała Pawłowskiego"
            className="relative rounded-3xl shadow-lg m-3 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-sm p-2">
          Przejdź do zakładki „O mnie”, aby dowiedzieć się więcej.
        </p>
        <Button link="/about" content="Więcej o mnie" />
      </div>
    </section>
  );
};

export default AboutSection;
