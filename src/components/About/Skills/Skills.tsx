import { skills } from "./skills.data";
import SkillGroup from "./SkillGroup";

const Skills: React.FC = () => {
  return (
    <article className="w-full md:w-2/3 mx-auto flex flex-col mr-1">
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
