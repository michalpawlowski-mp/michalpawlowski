import me from "../../../assets/images/mypicture/MyPicture.svg";
import SocialMedia from "./SocialMedia/SocialMedia";

const Banner: React.FC = () => {
  return (
    <article className="flex items-center bg-[#1a1d27] mx-1 my-2 p-3 rounded-xl w-full md:w-3/4 border border-white/8">
      <img
        className="rounded-full border border-white/20 w-14 h-14"
        src={me}
        alt="Michał Pawłowski"
        loading="lazy"
      />
      <div className="flex flex-col ml-3 gap-1">
        <h2 className="text-xl font-medium text-white">Inż. Michał Pawłowski</h2>
        <h3 className="text-sm text-slate-400">Junior Frontend Developer</h3>
        <SocialMedia />
      </div>
    </article>
  );
};

export default Banner;
