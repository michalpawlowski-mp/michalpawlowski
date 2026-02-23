import { shoesShop, react, styled, vite } from "../../../../../assets/imports/index";
import Links from "../../Link/Links";
import { useToggle } from "../../../../../hook/useToggle";
import ShoesShopPanel from "./ShoesShopPanel";

const ShoesShop: React.FC = () => {
  const { isVisible, toggleVisibility } = useToggle();
  return (
    <div className="md:w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-2 shadow-lg">
      <p className="text-2xl overflow-hidden w-full border-b-2 border-white p-2">
        ShoesShop
      </p>
      <img src={shoesShop} alt="Podglad strony Notatnik" />
      <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
        <img src={react} alt="ikonka React" className="w-[20px] m-2" />
        <img src={styled} alt="ikonka CSS" className="w-[20px] m-2" />
        <img src={vite} alt="ikonka Javascript" className="w-[20px] m-2" />
      </div>
      <Links
        githubLink="https://github.com/michalpawlowski-mp/ShoesShop"
        websiteLink="https://michalpawlowski-mp.github.io/ShoesShop/"
        onInfoClick={toggleVisibility}
      />
      {isVisible && <ShoesShopPanel toggleVisibility={toggleVisibility} />}
    </div>
  );
};

export default ShoesShop;
