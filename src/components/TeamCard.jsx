import "../index.css";
import igIcon from "../assets/ig-icon.svg";
import fbIcon from "../assets/fb-icon.svg";

const TeamCard = ({ img, name, tag }) => {
  return (
    <div style={{
      backgroundImage: `url(${img})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      fontFamily: "var(--secondary-font)",
      display: "flex",
      flexDirection: "column-reverse",
      height: "500px",
      width: "100%",
      backgroundColor: "gray"
    }}>
      <div style={{
        display: "flex",
        height: "auto",
        padding: "0.7rem",
        justifyContent: "space-between",
        color: "var(--white)",
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(5px)"
      }}>
        <div>
          <p style={{
            fontSize: "1.5rem",
            margin: 0,
            fontFamily: "var(--secondary-font)"
          }}>
            {name}
          </p>
          <p style={{
            fontSize: "0.9rem",
            margin: 0
          }}>
            {tag}
          </p>
        </div>
        <div style={{
          margin: "auto 0"
        }}>
          <a style={{
            marginRight: "6px"
          }}
            href="#ig"
          >
            <img src={igIcon} className="icon" />
          </a>
          <a href="#fb">
            <img src={fbIcon} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
