import React, { useState } from "react";
import "./style.css";
import dragon1 from "../../assets/images/dragon_1.jpg";
import dragon2 from "../../assets/images/dragon_2.jpg";
import dragon3 from "../../assets/images/dragon_3.jpg";
import dragon4 from "../../assets/images/dragon_4.jpg";
import dragon5 from "../../assets/images/dragon_5.jpg";
import dragon6 from "../../assets/images/dragon_6.jpg";
import dragon7 from "../../assets/images/dragon_7.jpg";
import dragon8 from "../../assets/images/dragon_8.jpg";
import dragon9 from "../../assets/images/dragon_9.jpg";
import dragon10 from "../../assets/images/dragon_10.jpg";

const images = [
  dragon1,
  dragon2,
  dragon3,
  dragon4,
  dragon5,
  dragon6,
  dragon7,
  dragon8,
  dragon9,
  dragon10,
];

export default function CarouselProjects() {
  const [focusIndex, setFocusIndex] = useState(0);

  const handleNext = () => {
    setFocusIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setFocusIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="banner">
      <div
        className="slider"
        style={
          {
            "--quantity": images.length,
            "--current": focusIndex,
          } as React.CSSProperties
        }
      >
        {images.map((image, index) => (
          <div
            className={`item ${index === focusIndex ? "in-focus" : ""}`}
            key={index}
            style={
              {
                "--position": index + 1,
                "--shadow-x": (index - focusIndex) * 20,
                "--shadow-y": 20,
                "--shadow-blur": 30 + Math.abs(index - focusIndex) * 10,
              } as React.CSSProperties
            }
          >
            <img src={image} alt={`Dragon ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="prev" onClick={handlePrev}>
          &#8592;
        </button>
        <button className="next" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
}
