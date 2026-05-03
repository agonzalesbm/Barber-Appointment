import "../index.css";

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
      height: "100%",
      width: "100%",
      backgroundColor: "gray"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "12%",
        padding: "1.5vw",
        color: "var(--white)",
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(5px)"
      }}>
        <p style={{
          fontSize: "2.2rem",
          margin: 0,
          fontFamily: "var(--secondary-font)"
        }}>
          {name}
        </p>
        <p style={{
          fontSize: "1.2rem",
          margin: 0
        }}>
          {tag}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
