import "../index.css";
import { useCallback, useRef, useState } from "react";

const PhotoGallery = ({ photos, text }) => {
  const [index, setIndex] = useState(0);
  const lengthRef = useRef(photos.length);

  const handlePrev = useCallback(() => {
    setIndex(prev => {
      const newIndex = prev - 1;
      return newIndex >= 0 ? newIndex : prev;
    }
    );
  }, []);

  const handleNext = useCallback(() => {
    setIndex(prev => {
      const newIndex = prev + 1;
      return newIndex < lengthRef.current ?
        newIndex : prev;
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
        width: "40vw",
        alignSelf: "center",
        justifySelf: "center"
      }}>
        <img
          src={`${photos[index]}`}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </div>
      <div style={{
        gridArea: "pn",
        color: "var(--text-secondary)",
        display: "flex",
        flexDirection: "column",
      }}>
        <p>{text}</p>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "2.5rem"
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
      </div>
    </>
  );
};

export default PhotoGallery;
