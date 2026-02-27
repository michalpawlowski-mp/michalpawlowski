import me from "../../../assets/images/mypicture/MyPicture.svg";
import SocialMedia from "./SocialMedia/SocialMedia";

const Banner: React.FC = () => {
  return (
    <article className="flex items-center bg-black/50 mx-1 my-2 p-2 rounded-full w-full md:w-3/4  shadow-sm shadow-gray-600">
      <img className="rounded-full border border-white" src={me} alt="Moje zdjęcie" />
      <div className="flex flex-col justify-evenly h-full">
        <div className="ml-2 w-full">
          <h2 className="md:text-3xl text-2xl text-shadow-lg ">Inż. Michał Pawłowski</h2>
          <h3>Junior Frontend Developer</h3>
        </div>
        <SocialMedia />
      </div>
    </article>
  );
};

export default Banner;
