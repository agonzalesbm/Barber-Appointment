import "../index.css";
import PhotoGallery from "./PhotosGallery";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.avif";

const photos = [
  p1,
  p2,
  p3,
  p4
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
      padding: "80px 0"
    }}>
      <div id="gallery-container">
        <p style={{
          gridArea: "gal"
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
