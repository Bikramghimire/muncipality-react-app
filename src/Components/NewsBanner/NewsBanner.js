import React from "react";

import OwlCarousel from "react-owl-carousel";
import img1 from "../../assets/img/news1.jpg";
import img2 from "../../assets/img/news2.jpg";
import img3 from "../../assets/img/news3.jpg";
import img4 from "../../assets/img/new4.jpg";
import img5 from "../../assets/img/news5.jpg";
import img6 from "../../assets/img/news6.jpg";
import img7 from "../../assets/img/news7.jpg";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./NewsBanner.css";
import firebase from "../Firebase/Config";
const storage = firebase.storage();
function NewsBanner() {
  function getImage(file) {
    storage
      .ref("files")
      .child(`${file}.pdf`)
      .getDownloadURL()
      .then((url) => {
        window.open(
          `${url}`,
          "_blank",
          "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=700,height=900"
        );
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }

  return (
    <div id="newsbanner">
      <div className="p-10" style={{ backgroundColor: "#333" }}>
        <h2 className="text-black text-center">NEWS AND UPDATES</h2>
      </div>

      <div class="container-fluid">
        <OwlCarousel items={3} margin={8} autoplay={true}>
          <div className="carousel">
            <img className="img" src={img1} />
            <div className="text-center">
              <p>Covid Updates in Kathmandu</p>
              <button onClick={() => getImage("firebasepdf1")}>
                READ MORE
              </button>
            </div>
          </div>

          <div className="carousel">
            <img className="img" src={img2} />
            <div className="text-center">
              <p>Covid Updates in Kathmandu</p>
              <button onClick={() => getImage("firebasepdf2")}>
                READ MORE
              </button>
            </div>
          </div>

          <div className="carousel">
            <img className="img" src={img3} />
            <div className="text-center">
              <p>Covid Updates in Kathmandu</p>
              <button onClick={() => getImage("firebasepdf3")}>
                READ MORE
              </button>
            </div>
          </div>

          <div className="carousel">
            <img className="img" src={img4} />
            <div className="text-center">
              <p>Covid Updates in Kathmandu</p>
              <button onClick={() => getImage("firebasepdf4")}>
                READ MORE
              </button>
            </div>
          </div>

          <div className="carousel">
            <img className="img" src={img5} />
            <div className="text-center">
              <p>Covid Updates in Kathmandu</p>
              <button onClick={() => getImage("firebasepdf3")}>
                READ MORE
              </button>
            </div>
          </div>

          <div className="carousel">
            <img className="img" src={img6} />
            <div className="text-center">
              <p>Covid Updates in Kathmandu</p>
              <button onClick={() => getImage("firebasepdf2")}>
                READ MORE
              </button>
            </div>
          </div>

          <div className="carousel">
            <img className="img" src={img7} />
            <div className="text-center">
              <p>Covid Updates in Kathmandu</p>
              <button onClick={() => getImage("firebasepdf1")}>
                READ MORE
              </button>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default NewsBanner;
