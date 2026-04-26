function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">
        <span className="copyright-base">
          © {new Date().getFullYear()} Rickard Engström
        </span>
        <span className="copyright-shimmer" aria-hidden="true">
          © {new Date().getFullYear()} Rickard Engström
        </span>
      </p>
      <p className="footer-source">
        View source on {" "}
        <a href="https://github.com/rickforge/portfolio-website">GitHub</a>
      </p>
    </footer>
  );
}

export default Footer;
