import "../index.css";

const Header = () => {
  return (
    <>
      <header id="header-container">
        <div id="links-container">
          <a>Home</a>
          <a>Service</a>
          <a>Pricing</a>
          <a>Contact</a>
        </div>
        <div>
          <p id="title-logo">
            SHARP<br/>CUT
          </p>
        </div>
        <button id="book-button">Book your schedule</button>
      </header>
    </>
  );
};

export default Header;