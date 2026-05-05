import image from "../assets/hero-2.png";
import "../index.css";

const Home = () => {
  return (
    <div id="home-container">
      <p id="home-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
      </p>
      <img src={image} id="img-home"/>
      <p id="where-txt">WHERE</p>
      <p id="precision-txt">PRECISION</p>
      <p id="meets-text">MEETS</p>
    </div>
  );
};

export default Home;
