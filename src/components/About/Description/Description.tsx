import { Link } from "react-router-dom";
import { getDescriptionData } from "./description.data";

const Description: React.FC = () => {
  const descriptionData = getDescriptionData();

  return (
    <article className="w-full md:w-2/5 bg-[#1a1d27]/50 border border-white/8 rounded-xl p-5 mt-1 md:m-2">
      <h3 className="text-xl font-medium text-white text-center mb-4">O mnie</h3>
      <div className="space-y-3">
        {descriptionData.map((item, index) => (
          <p key={index} className="text-sm text-slate-400 leading-relaxed">
            {item}
          </p>
        ))}
        <p className="text-sm text-slate-400 leading-relaxed">
          Wybrane projekty prezentuję w zakładce{" "}
          <Link
            to="/Portfolio"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Portfolio
          </Link>
          , natomiast w przypadku zainteresowania współpracą zapraszam do{" "}
          <Link
            to="/contact"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            kontaktu
          </Link>
          .
        </p>
      </div>
    </article>
  );
};

export default Description;
