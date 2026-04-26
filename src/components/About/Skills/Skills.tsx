import { skills } from "./skills.data";
import SkillGroup from "./SkillGroup";

const Skills: React.FC = () => {
  return (
    <article className="w-full md:w-3/5 flex flex-col gap-2 ">
      {skills.map((category) => (
        <SkillGroup
          key={category.title}
          title={category.title}
          items={category.items}
          info={category.info}
        />
      ))}
    </article>
  );
};

export default Skills;
