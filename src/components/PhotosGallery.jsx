import "../index.css";
import { useCallback, useRef, useState } from "react";

const PhotoGallery = ({ photos, text }) => {
  const [index, setIndex] = useState(0);
  const lengthRef = useRef(photos.length);

  const handlePrev = useCallback(() => {
    setIndex(prev => {
      const newIndex = prev - 1;
      return newIndex >= 0 ?
        newIndex : lengthRef.current - 1;
    }
    );
  }, []);

  const handleNext = useCallback(() => {
    setIndex(prev => {
      const newIndex = prev + 1;
      return newIndex < lengthRef.current ?
        newIndex : 0;
    }
    );
  }, []);

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gridArea: "img",
        height: "40vh",
        width: "100%"
      }}>
        <img
          src={`${photos[index]}`}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            padding: "0 3rem"
          }}
        />
      </div>
      <div style={{
        gridArea: "pn",
        color: "var(--text-secondary)",
        display: "flex",
        flexDirection: "column",
      }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "2.5rem",
            padding: ".9rem 0",
          }}
        >
          <button
            onClick={() => handlePrev()}
            className="buttonGallery"
          >
            ←  PREVIOUS
          </button>
          <p>|</p>
          <button
            onClick={() => handleNext()}
            className="buttonGallery"
          >
            NEXT →
          </button>
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default PhotoGallery;
