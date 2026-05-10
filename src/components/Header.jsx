import { useState } from "react";
import "../index.css";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <header id="header-container">
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "12px"
      }}>
        <p id="title-logo">
          SHARP<br />CUT
        </p>
        <nav>
          <ul id="links-container">
            <li><a>Home</a></li>
            <li><a>Service</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
        <a
          className="secondary-button book-now"
          href="#booknow"
          style={{
            height: 55,
            alignSelf: "center",
          }}
        >
          BOOK NOW
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="nav-button"
        >
          <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          padding: 32
        }}>
          <ul className="links-mobile-container">
            <li><a>Home</a></li>
            <li><a>Service</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
          </ul>
          <a className="nav-book-now" href="#booknow">BOOK NOW</a>
        </div>
      )}
    </header>
  );
};

export default Header;
