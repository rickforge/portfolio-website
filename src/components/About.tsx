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
            <h3>Design-minded frontend developer</h3>
          <p>
            I'm a frontend developer and designer currently studying the
            Webmaster program at Högskolan Väst. I'm focused on building modern,
            responsive websites with a clean and user-friendly design.
          </p>
          <p>
            I enjoy working at the intersection of design and development,
            turning ideas into simple and intuitive interfaces. I'm currently
            expanding my skills in React and JavaScript while continuing to
            build and improve my projects.
          </p>
          <p>
            Outside of web development, I spend a lot of time on creative
            projects like playing guitar and producing music, as well as gaming
            and experimenting with Linux. I also run my own home server, which
            has made me more interested in how things work behind the scenes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
