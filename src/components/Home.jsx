import "../index.css";

const Home = () => {
  return (
    <div style={{
      position: "relative",
      height: "100vh",
      display: "flex"
    }}
      id="home"
    >
      <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 2
      }}></div>
      <div id="home-container">
        <div id="items-home-container">
          <p style={{
            display: "inline",
            fontSize: "1.1rem",
            marginBottom: "0.4rem",
            color: "var(--white)",
            letterSpacing: "0.2rem"
          }}>BARBER&apos;S HOME</p>
          <h1 className="big-letter-home">Precision</h1>
          <h1 className="big-letter-home" style={{
            color: "var(--white)"
          }}>Style</h1>
          <h1 className="big-letter-home">Elegance</h1>
          <p style={{
            display: "inline",
            fontSize: "1.1rem",
            marginBottom: "0.4rem",
            color: "var(--white)",
            letterSpacing: "0.2rem",
            fontStyle: "italic",
            marginTop: "1.4rem"
          }}>Do it with passion or not at all</p>
          <div className="button-hero-container">
            <a className="primary-button scissors-icon">BOOK YOUR CUT</a>
            <a href="#service" className="secondary-button">VIEW SERVICES</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
