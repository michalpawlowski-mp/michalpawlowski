import type { EducationProps } from "./education.data";

const Education = ({ date, school, title, details }: EducationProps) => {
  return (
    <div className="p-4 mb-3 bg-[#252836] border border-white/8 rounded-xl">
      <p className="text-xs text-slate-500 mb-1">{date}</p>
      <p className="text-white font-medium text-sm">{school}</p>
      <p className="text-xs text-slate-400 mb-2">{title}</p>
      <ul>
        {details.map((item, index) => (
          <li key={index} className="text-sm text-slate-400 leading-relaxed">
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
