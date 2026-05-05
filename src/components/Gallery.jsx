import "../index.css";
import PhotoGallery from "./PhotosGallery";
import p1 from "../assets/hero-2.png";
import p2 from "../assets/hero.png";

const photos = [
  p1,
  p2
];

const Gallery = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "var(--bg-secondary)",
      width: "100%",
      boxSizing: "border-box",
      alignItems: "center",
      padding: "0px 64px"
    }}>
      <div id="gallery-container">
        <p style={{
          gridArea: "gal",
          justifySelf: "end"
        }}
          className="gallery-txt"
        >
          GA
        </p>
        <PhotoGallery
          photos={photos}
          text={"Lorem"}
        />
        <p style={{
          gridArea: "le",
          alignSelf: "center",
          paddingLeft: "5vw"
        }}
          className="gallery-txt"
        >
          LLE
        </p>
        <p style={{
          gridArea: "ry"
        }}
          className="gallery-txt"
        >
          RY
        </p>
      </div>
    </div>
  );
};

export default Gallery;
