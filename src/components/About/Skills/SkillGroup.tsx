import React from "react";
import { SkillCategory } from "./skills.data";

const SkillGroup: React.FC<SkillCategory> = ({ title, items, info }) => (
  <div className="bg-[#1a1d27]/50 rounded-xl my-1 p-3 border border-white/8">
    <p className="text-lg font-medium text-center text-white mb-1">{title}</p>
    <p className="text-xs text-center text-slate-500 mb-3">{info}</p>
    <ul className="flex flex-wrap justify-center gap-2">
      {items.map((skill) => (
        <li
          key={skill}
          className="text-sm px-3 py-1.5 bg-[#252836] hover:bg-[#2e3247] border border-white/8 rounded-lg text-slate-300 transition-colors"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillGroup;
