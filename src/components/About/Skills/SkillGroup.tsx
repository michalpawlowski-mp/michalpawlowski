import React from "react";
import { SkillCategory } from "./skills.data";

const SkillGroup: React.FC<SkillCategory> = ({ title, items, info }) => (
  <div className="bg-black/50 rounded-2xl my-1 p-2  shadow-sm shadow-gray-600">
    <p className="text-2xl text-center ">{title}</p>
    <p className="text-sm text-center mb-2">{info}</p>
    <ul className="flex flex-wrap justify-center items-center gap-2">
      {items.map((skill) => (
        <li
          key={skill}
          className="w-max text-center p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600 hover:bg-white/20"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillGroup;
