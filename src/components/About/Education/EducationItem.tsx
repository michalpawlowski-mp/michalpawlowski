import type { EducationProps } from "./education.data";

const Education = ({ date, school, title, details }: EducationProps) => {
  return (
    <ul className="p-4 mb-4 bg-black/20 rounded-3xl shadow shadow-white">
      <li className="text-xs">{date}</li>
      <li>{school}</li>
      <li className="text-xs">{title}</li>
      <li>
        <ol>
          {details.map((item, index) => (
            <li key={index} className="text-sm">
              - {item}
            </li>
          ))}
        </ol>
      </li>
    </ul>
  );
};

export default Education;
