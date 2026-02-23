import { codepen, uiverse } from "../../../../../assets/imports";

const Experiments = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="w-1/4 md:w-1/3 h-px border-white bg-white rounded-full"></div>
        <p className="text-center mx-3">Tworzę i eksperymentuję</p>
        <div className="w-1/4 md:w-1/3 h-px border-white bg-white rounded-full"></div>
      </div>
      <div className="w-full m-5 flex justify-center">
        <a
          className="bg-white/20 p-2 pe-4 m-4 rounded-3xl flex items-center"
          href={"https://codepen.io/mpdev_"}
          target="_blank"
        >
          <img className="me-3" src={codepen} alt="Link do mojego profilu na CodePen" />
          MP.Dev
        </a>
        <a
          className="bg-white/20 p-2 pe-4 m-4 rounded-3xl flex items-center"
          href={"https://uiverse.io/profile/aJpaRmp"}
          target="_blank"
        >
          <img
            className="rounded-full me-3"
            src={uiverse}
            alt="Link do mojego profilu na Uuverse.io"
          />
          MP.Dev
        </a>
      </div>
    </>
  );
};

export default Experiments;
