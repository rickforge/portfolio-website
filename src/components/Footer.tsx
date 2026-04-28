function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <p className="copyright">
        <span className="copyright-base">
          © {new Date().getFullYear()} Rickard Engström
        </span>
        <span className="copyright-shimmer" aria-hidden="true">
          © {new Date().getFullYear()} Rickard Engström
        </span>
      </p>
      <p className="footer-source">
        View source on{"  "}
        <a
          href="https://github.com/rickforge/portfolio-website"
          aria-label="View source code for this portfolio on GitHub"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
