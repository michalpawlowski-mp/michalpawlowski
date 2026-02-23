import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/ui/arrow.svg";

const ButtonContact: React.FC = () => {
  return (
    <Link to="/Portfolio" className="">
      <div className="flex text-center items-center  group">
        <p className="transition-all duration-500 group-hover:translate-x-1">
          Zobacz wiecej moich projektów
        </p>
        <img
          className="invert mx-2 my-3 transition-transform z-0 duration-500 group-hover:translate-x-2"
          src={arrow}
          alt="strzałka w prawo"
        />
      </div>
    </Link>
  );
};

export default ButtonContact;
