import { useState } from "react";
import GamingHub from "./ProjectsList/GammingHub/Gaminghub";
import Slider from "./ProjectsList/Slider/Slider.tsx";
import ShoesShop from "./ProjectsList/ShoesShop/ShoesShop.tsx";
import XO from "./ProjectsList/XO/XO";
import Weather from "./ProjectsList/Weather/Weather.tsx";
import Cal from "./ProjectsList/Calculator/Calc";
import Todo from "./ProjectsList/ToDoList/Todo";
import CloneTube from "./ProjectsList/CloneTube/CloneTube.tsx";
import MoreProject from "./MoreProject/MoreProject.tsx";
import Nootbook from "./ProjectsList/Notebook/Notebook.tsx";

const allProjects = [
  <CloneTube key="clonetube" />,
  <ShoesShop key="shoesshop" />,
  <Weather key="weather" />,
  <GamingHub key="gaminghub" />,
  <Nootbook key="Nootbook" />,
  <XO key="xo" />,
  <Cal key="cal" />,
  <Todo key="todo" />,
  <Slider key="slider" />,
  <MoreProject key="moreproject" />,
];

const ProjectsList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, allProjects.length));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full m-1">
      <div className="flex flex-col sm:flex-wrap sm:flex-row w-full justify-center gap-4">
        {allProjects.slice(0, visibleCount)}
      </div>
      {visibleCount < allProjects.length && (
        <button
          type="button"
          className="w-full flex justify-center mb-5"
          onClick={handleShowMore}
        >
          Zobacz więcej
        </button>
      )}
    </div>
  );
};

export default ProjectsList;
