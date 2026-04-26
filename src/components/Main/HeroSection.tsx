import me from "../../assets/images/mypicture/me.svg";
import Button from "./ButtonLink";

const Hero: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-around md:px-8 p-6 gap-8">
      <div className="flex flex-col items-start gap-5 text-center">
        <div className="flex flex-col text-center w-full gap-1">
          <h3 className="text-5xl md:text-6xl font-bold text-white">Michał Pawłowski</h3>
          <h4 className="text-sm font-medium text-indigo-400 tracking-widest uppercase">
            MP.Dev_
          </h4>
          <h5 className="text-xl font-medium text-slate-300">
            Junior Frontend Developer
          </h5>
        </div>
        <p className="text-base text-slate-400 max-w-xl leading-relaxed">
          Łączę doświadczenie w rozwiązywaniu problemów technicznych z obszaru IT Support
          z praktyczną znajomością ekosystemu React. Moje zaplecze inżynierskie pozwala mi
          dostarczać kod, który jest nie tylko funkcjonalny, ale również zoptymalizowany
          pod kątem wydajności. Szukam wyzwań w projektach komercyjnych, w których mogę
          rozwijać kompetencje frontendowe i współtworzyć nowoczesne, intuicyjne
          interfejsy.
        </p>
        <div className="flex w-full justify-center items-center gap-3">
          <Button link={"/contact"} content="Kontakt ze mną" />
          <Button link={"..."} content="Zobacz moje CV" external />
        </div>
      </div>
      <img
        src={me}
        alt="Michał Pawłowski"
        className="rounded-2xl shadow-lg m-3 max-w-xs"
      />
    </section>
  );
};

export default Hero;
