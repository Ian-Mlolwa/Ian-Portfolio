import {
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const skills = [
    {
      logo: faHtml5,
      name: "HTML",
      level: "Expert",
      count: 98,
    },
    {
      logo: faCss3Alt,
      name: "CSS",
      level: "Advance",
      count: 80,
    },
    {
      logo: faReact,
      name: "React",
      level: "Intermediate",
      count: 65,
    },
    {
      logo: faPython,
      name: "Python",
      level: "Intermediate",
      count: 45,
    },
    {
      logo: faNodeJs,
      name: "NodeJs",
      level: "Begginer",
      count: 15,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My
          <span className="text-cyan-600"> Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 relative group border-cyan-600 min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <FontAwesomeIcon icon={skill.logo as any} />
                </div>
              </div>
              <p className="text-cyan-600 mt-3">{skill.name}</p>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
