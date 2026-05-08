import "../index.css";

const Header = () => {
  return (
    <header id="header-container">
      <p id="title-logo">
        SHARP<br />CUT
      </p>
      <nav >
        <ul id="links-container">
          <li><a>Home</a></li>
          <li><a>Service</a></li>
          <li><a>Pricing</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
      <a className="secondary-button">BOOK NOW</a>
    </header>
  );
};

export default Header;
