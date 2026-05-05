import "../index.css";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div style={{
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: "0 64px",
      backgroundColor: "var(--bg)"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24
      }}>
        <p style={{
          margin: 0,
          marginBottom: "5vh",
          fontSize: "1.4rem",
          lineHeight: 0
        }}>
          SERVICE
        </p>
        <p className="title-lines">
          SCULPTING<br/>
          STYLE, SHAPING<br/>
          CHARACTER
        </p>
      </div>
      <div id="service-card-grid">
        <ServiceCard number={1} title={"Title"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit voluptas ipsum incidunt aut soluta, tempora repellat fugit doloremque dolor!"}/>
        <ServiceCard number={2} title={"Title"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit voluptas ipsum incidunt aut soluta, tempora repellat fugit doloremque dolor!"}/>
        <ServiceCard style={{
          justifySelf: "right"
        }} number={3} title={"Title"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit voluptas ipsum incidunt aut soluta, tempora repellat fugit doloremque dolor!"}/>
        <ServiceCard style={{
          justifySelf: "right"
        }} number={4} title={"Title"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit voluptas ipsum incidunt aut soluta, tempora repellat fugit doloremque dolor!"}/>
      </div>
    </div>
  );
};

export default Service;
