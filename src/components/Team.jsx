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

      // TODO: review the color borders
      // width: "100vw"
    }}>
    <p style={{
      fontSize: "clamp(3rem, 8vw, 10.5rem)",
      fontFamily: "var(--secondary-font)",
      textAlign: "center",
      lineHeight: "0.8",
      padding: "10vh 0"
    }}>
      CRAFTING<br/>TIMELESS<br/>
      LOOKS FOR<br/>
      THE MODERN<br/>
      GENTLEMAN<br/>
    </p>
    <p style={{
      magin: 0,
      marginBottom: "5vh",
      fontSize: "1.4rem",
      lineHeight: 0
    }}>
      ABOUT
    </p>
    <p className="title-lines" style={{
      textAlign: "center"
    }}>
      MEET OUR<br/>PROFESSIONALS
    </p>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 16,
      justifyItems: "center",
      width: "100%",
      padding: "20vh"
    }}>
      <TeamCard name={"Leo"} tag={"Chief"} img={profileImg}/>
      <TeamCard name={"Alex"} tag={"Beard specialist"} img={profileImg} alignSelf={"bottom"}/>
      <TeamCard name={"Dan"} tag={"Urban style"} img={profileImg}/>
    </div>
    </div>
  );
};

export default Team;