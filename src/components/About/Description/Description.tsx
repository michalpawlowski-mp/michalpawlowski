import { Link } from "react-router-dom";
import { calculateAge } from "../../Utils/date";

const Description: React.FC = () => {
  const age = calculateAge("2000-05-29");

  return (
    <article
      id="description"
      className="w-full md:w-1/2 p-2 bg-black/50 rounded-3xl md:mx-2 my-2"
    >
      <h3 className="text-3xl text-center">O mnie</h3>
      <div className="p-3">
        <p className="text-xl font-semibold mb-4">Cześć!</p>
        <p className="text-sm mb-4">
          Nazywam się Michał Pawłowski, mam {age} lat i interesuję się programowaniem oraz
          nowymi technologiami. Posiadam tytuł Inżyniera Informatyki, który zdobyłem na
          Uniwersytecie Kazimierza Wielkiego w Bydgoszczy, a także tytuł Technika
          Informatyka, który uzyskałem w Zespole Szkół Mechanicznych nr 1 w Bydgoszczy.
        </p>
        <p className="text-sm mb-4">
          Aktualnie skupiam się na rozwoju w kierunku frontendu – regularnie uczę się
          nowych technologii, realizuję własne projekty i śledzę trendy w branży IT.
          Jednocześnie jestem otwarty na poszerzanie umiejętności również w innych
          obszarach programowania.
        </p>
        <p className="text-sm mb-4">
          Poza programowaniem interesuję się gamingiem, nowinkami technologicznymi i
          światem komputerów. Moją pasją jest także piłka nożna, którą śledzę z
          zaangażowaniem, oraz aktywność fizyczna, która pomaga mi utrzymać energię i
          motywację na co dzień. W wolnym czasie rozwijam swoje umiejętności, realizując
          różne projekty, które znaleźć można w zakładce
          <Link to="/Portfolio" className="text-blue-500 ps-1">
            Portfolio.
          </Link>
        </p>
        <p className="text-sm">
          Jestem osobą ambitną, nastawioną na rozwój i otwartą na nowe wyzwania. Ważne
          jest dla mnie stałe poszerzanie umiejętności i zdobywanie doświadczenia w
          praktycznych projektach.
          <Link to="/contact" className="text-blue-500 in-line pl-1 text-center">
            Zapraszam do kontaktu!
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Description;
