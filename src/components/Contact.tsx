import { Icon } from "@iconify/react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        I'm currently open to junior frontend and UI/UX opportunities. Feel free
        to reach out if you'd like to collaborate or learn more about my work.
      </p>

      <div className="contact-links">
        <a
          href="mailto:rickard.engstrom97@gmail.com"
          className="contact-link"
          title="rickard.engstrom97@gmail.com"
          aria-label="Email Rickard at rickard.engstrom97@gmail.com"
        >
          <Icon icon="mdi:email-outline" aria-hidden="true" />
          <span>Email</span>
        </a>
        <a
          href="https://github.com/rickforge"
          className="contact-link"
          aria-label="Rickard's GitHub profile"
        >
          <Icon icon="mdi:github" aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/rickard-engström-68b960272"
          className="contact-link"
          aria-label="Rickard's LinkedIn profile"
        >
          <Icon icon="mdi:linkedin" aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
