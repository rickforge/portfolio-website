import profileImg from "../assets/images/profile.webp";

function About() {
  return (
    <section className="about section-wrapper" id="about">
      <h2 className="section-title">About</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Picture of Rickard Engström" />
        </div>

        <div className="about-content">
          <h3>Design-minded Frontend Developer</h3>
          <p>
            I'm a frontend developer focused on building modern, responsive
            websites with clean interfaces and thoughtful user experiences.
          </p>
          <p>
            I enjoy working with both the visual side of design and the
            technical side of development, turning ideas into interfaces that
            are clear, intuitive and well-structured.
          </p>
          <p>
            Beyond frontend, I'm interested in Linux self-hosting and creative
            projects like music production, and enjoy learning how things work
            behind the scenes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
