import "../index.css";

const Header = () => {
  return (
    <header id="header-container">
        <nav >
          <ul id="links-container">
            <li><a>Home</a></li>
            <li><a>Service</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      <div>
        <p id="title-logo">
          SHARP<br/>CUT
        </p>
      </div>
      <button id="book-button">Book your schedule</button>
    </header>
  );
};

export default Header;