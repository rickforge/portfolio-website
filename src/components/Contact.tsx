import { Icon } from "@iconify/react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        I'm currently open to junior frontend opportunities, internships and
        freelance web projects. Feel free to reach out if you'd like to work
        together or learn more about me and my work.
      </p>

      <div className="contact-links">
        <a
          href="mailto:rickard.engstrom97@gmail.com"
          className="contact-link"
          title="rickard.engstrom97@gmail.com"
          aria-label="rickard.engstrom97@gmail.com"
        >
          <Icon icon="mdi:email-outline" />
          <span>Email</span>
        </a>
        <a
          href="https://github.com/rickforge"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <Icon icon="mdi:github" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/rickard-engström-68b960272"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <Icon icon="mdi:linkedin" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
