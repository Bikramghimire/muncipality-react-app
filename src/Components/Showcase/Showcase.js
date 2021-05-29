import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../assets/img/showcase.jpg";
import image2 from "../../assets/img/showcase1.jpg";
import image3 from "../../assets/img/showcase2.jpg";
const fadeImages = [image1, image2, image3];

const Showcase = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[0]}
              style={{ objectFit: "cover", width: "100%", height: "500px" }}
              alt="showcase"
            />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[1]}
              style={{ objectFit: "cover", width: "100%", height: "500px" }}
              alt="showcase"
            />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img
              src={fadeImages[2]}
              style={{ objectFit: "cover", width: "100%", height: "500px" }}
              alt="showcase"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Showcase;
