import { Link } from "react-router-dom";
import { getDescriptionData } from "./description.data";

const Description: React.FC = () => {
  const descriptionData = getDescriptionData();

  return (
    <article className="w-full md:w-1/2 p-2 bg-black/50 rounded-3xl md:mx-2 my-2 shadow-sm shadow-gray-600">
      <h3 className="text-3xl text-center">O mnie</h3>

      <div className="p-3 space-y-4">
        {descriptionData.map((item, index) => (
          <p key={index} className="text-sm">
            {item}
          </p>
        ))}
        <p className="text-sm">
          Wybrane projekty prezentuję w zakładce
          <Link to="/Portfolio" className="text-blue-500 pl-1">
            Portfolio
          </Link>
          , natomiast w przypadku zainteresowania współpracą zapraszam do
          <Link to="/contact" className="text-blue-500 pl-1">
            kontaktu
          </Link>
          .
        </p>
      </div>
    </article>
  );
};

export default Description;
