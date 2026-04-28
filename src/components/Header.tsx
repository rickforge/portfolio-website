import { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Used to detect clicks outside the header/mobile menu
  const menuRef = useRef<HTMLDivElement | null>(null);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  // Close mobile menu with Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Close mobile menu when clicking outside the header/menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reset menu state when switching back to desktop layout
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header" ref={menuRef}>
      <a href="/" className="logo" aria-label="engstrom.design home">
        engstrom.design
      </a>

      <button
        className="touch-menu"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="main-menu"
      >
        <span className={`menu-icon ${menuOpen ? "open" : ""}`}>
          {menuOpen ? (
            <X size={32} aria-hidden="true" />
          ) : (
            <Menu size={32} aria-hidden="true" />
          )}
        </span>
      </button>

      <nav
        className={`site-navigation ${menuOpen ? "open" : ""}`}
        id="main-menu" aria-label="Main navigation"
      >
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a
          href="#contact"
          className="contact-btn"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
