import "../index.css";

const ServiceCard = ({ style, title, paragraph, number }) => {
  return (
    <div className="service-card-container" style={style}>
      <div className="top-line">
        {`0${number}`}
      </div>
      <p style={{
        fontFamily: "var(--secondary-font)",
        fontSize: "2.3rem",
        marginTop: "8px"
      }}>
        {title}
      </p>
      <p>
        {paragraph}
      </p>
    </div>
  );
};

export default ServiceCard;
