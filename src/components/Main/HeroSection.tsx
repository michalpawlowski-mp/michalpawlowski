import me from "../../assets/images/mypicture/me.svg";
import Button from "./ButtonLink";

const Hero: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-around md:px-1 p-3">
      <div className="flex flex-col items-start gap-6 text-center">
        <div className="flex flex-col text-center w-full">
          <h3 className="text-5xl md:text-6xl font-bold text-white">Michał Pawłowski</h3>
          <h4 className="text-sm md:text-md font-bold text-white">MP.Dev_</h4>
          <h5 className="text-2xl font-bold text-white">Junior Frontend Developer</h5>
        </div>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl">
          Łączę doświadczenie w rozwiązywaniu problemów technicznych z obszaru IT Support
          z praktyczną znajomością ekosystemu React. Moje zaplecze inżynierskie pozwala mi
          dostarczać kod, który jest nie tylko funkcjonalny, ale również zoptymalizowany
          pod kątem wydajności. Szukam wyzwań w projektach komercyjnych, w których mogę
          rozwijać kompetencje frontendowe i współtworzyć nowoczesne, intuicyjne
          interfejsy.
        </p>
        <div className="flex w-full justify-center items-center md:gap-5 gap-2">
          <Button link={"/contact"} content="Kontakt ze mną" />
          <Button
            link={"https://michalpawlowski-mp.github.io/Curriculum-Vitae/"}
            content="Zobacz moje CV"
            external
          />
        </div>
      </div>
      <img src={me} alt="Michał Pawłowski" className="rounded-3xl shadow-lg m-3" />
    </section>
  );
};

export default Hero;
