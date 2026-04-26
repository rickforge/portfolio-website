import { Icon } from "@iconify/react";

function Skills() {
  const skills = [
    { name: "React", icon: "logos:react" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "Sass", icon: "logos:sass" },
    { name: "Bulma", icon: "logos:bulma" },
    { name: "Figma", icon: "logos:figma" },
    { name: "Photoshop", icon: "logos:adobe-photoshop" },
  ];

  return (
    <section className="skills-container">
      <h2>Tech Stack</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <Icon icon={skill.icon} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
