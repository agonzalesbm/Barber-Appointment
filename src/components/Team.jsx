import "../index.css";
import TeamCard from "./TeamCard";
import profileImg from "../assets/profile-img.png";

const Team = () => {
  return (
    <div style={{
      backgroundColor: "var(--bg-secondary)",
      color: "var(--text-secondary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "borderBox",
      width: "100%",
      height: "auto",
      padding: "20px 0"
    }}>
      <h1 style={{
        fontSize: "clamp(3rem, 8vw, 10.5rem)",
        fontFamily: "var(--secondary-font)",
        textAlign: "center",
        lineHeight: "0.8",
        padding: "10vh 0",
        fontWeight: 400
      }}>
        CRAFTING<br />TIMELESS<br />
        LOOKS FOR<br />
        THE MODERN<br />
        GENTLEMAN<br />
      </h1>
      <h1 style={{
        magin: 0,
        marginBottom: "5vh",
        fontSize: "1.4rem",
        fontWeight: 400
      }}>
        ABOUT
      </h1>
      <h1 className="title-lines" style={{
        textAlign: "center",
        fontWeight: 400
      }}>
        MEET OUR<br />PROFESSIONALS
      </h1>
      <div className="team-members-container">
        <TeamCard name={"Leo"} tag={"Chief"} img={profileImg} />
        <TeamCard name={"Alex"} tag={"Beard specialist"} img={profileImg} />
        <TeamCard name={"Dan"} tag={"Urban style"} img={profileImg} />
      </div>
    </div>
  );
};

export default Team;
