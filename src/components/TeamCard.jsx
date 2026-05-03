import "../index.css";

const TeamCard = ({ img, name, tag }) => {
  return (
    <div>
      <p style={{
        alignSelf: "top",
        fontSize: "2.2rem",
        paddingLeft: "16px",
        margin: 0,
        fontFamily: "var(--secondary-font)"
      }}>
        {name}
      </p>
      <div style={{
        border: "8px solid black",
        padding: 3
      }}>
        <div style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          fontFamily: "var(--secondary-font)",
          display: "flex",
          flexDirection: "column-reverse",
          height: "300px",
          width: "300px",
          border: "2px solid black",
        }}>
          <p style={{
            // alignSelf: "bottom",
            fontSize: "1.2rem",
            textAlign: "end",
            paddingRight: "16px",
            marginBottom: 6
          }}>
            {tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;