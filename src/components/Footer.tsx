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
    </footer>
  );
}

export default Footer;
