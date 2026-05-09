import "../index.css";
import fbIcon from "../assets/fb-icon.svg";
import igIcon from "../assets/ig-icon.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h1 className="title-logo" style={{
            fontWeight: "100",
            textAlign: "center",
            justifySelf: "left",
            marginBottom: "8px"
          }}>
            SHARP<br />CUT
          </h1>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
          }}>
            <a style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6
            }}
              href="#ig"
            >
              <img src={igIcon} className="icon"/>
              Instagram
            </a>
            <a style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6
            }}
              href="#fb"
            >
              <img src={fbIcon} className="icon"/>
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-col">
            <h4>QUICK LINKS</h4>
            <a href="#home">Home</a>
            <a href="#service">Service</a>
            <a href="#href">About</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div className="footer-links-col">
            <h4>LOCATIONS</h4>
            <p>Some location</p>
            <p>+591390012223</p>
          </div>
          <div className="footer-links-col">
            <h4>HOURS</h4>
            <p>Monday - Sunday</p>
            <p>10:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
