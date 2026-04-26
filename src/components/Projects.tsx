import noscriptImg from "../assets/images/projects/noscript-preview.webp";
import recipeappImg from "../assets/images/projects/recipeapp-preview.webp";
import visitnorrbottenImg from "../assets/images/projects/visitnorrbotten-preview.webp";
import { Icon } from "@iconify/react";

type Project = {
  title: string;
  image: string;
  description: string;
  tech: { name: string; icon: string }[];
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "No-Script Page",
    image: noscriptImg,
    description:
      "A no-script blog-style website built with semantic HTML and CSS, focusing on responsive layout, typography and a custom CSS-only navigation.",
    tech: [
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
    ],
    demoUrl: "/demos/noscript-page/index.html",
    githubUrl: "https://github.com/rickforge/noscript-website",
  },
  {
    title: "Recipe App",
    image: recipeappImg,
    description:
      "A recipe app built with JavaScript using localStorage for persistent data. Includes dynamic filtering and responsive layout.",
    tech: [
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "JavaScript", icon: "logos:javascript" },
    ],
    demoUrl: "/demos/recipe-app/index.html",
    githubUrl: "https://github.com/rickforge/recipe-app",
  },
  {
    title: "Visit Norrbotten",
    image: visitnorrbottenImg,
    description:
      "Tourism concept site built with Bulma, focusing on reusable components and responsive layout.",
    tech: [
      { name: "HTML", icon: "logos:html-5" },
      { name: "Bulma", icon: "logos:bulma" },
      { name: "JavaScript", icon: "logos:javascript" },
    ],
    demoUrl: "/demos/tourism-site/index.html",
    githubUrl: "https://github.com/rickforge/Tourism-concept-site",
  },
];

function Projects() {
  return (
    <section className="projects section-wrapper" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
                loading="lazy"
              />
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <div
                  key={tech.name}
                  className="project-tech-item"
                  title={tech.name}
                >
                  <Icon icon={tech.icon} />
                </div>
              ))}
            </div>
            <div className="project-links">
              <a className="project-link-primary"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo ↗
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-secondary project-link-primary"
              >
                <Icon icon="mdi:github" /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
