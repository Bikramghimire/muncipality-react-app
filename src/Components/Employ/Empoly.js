import React from "react";
import img1 from "../../assets/img/employ1.png";
import img2 from "../../assets/img/employ2.jpg";
import img3 from "../../assets/img/employ3.jpg";
import img4 from "../../assets/img/emply3.jpg";
import "./Employ.css";
const imageArray = [
  {
    imge: img1,
    position: "Mayor",
    name: "Chiribabu Maharjan",
    email: "Chiribabu Maharjan",
    phone: 9851022723,
  },
  {
    imge: img2,
    position: "Deputy Mayor",
    name: "Gita Satyal",
    email: "Chiribabu Maharjan",
    phone: 9851022723,
  },
  {
    imge: img3,
    position: "Chief Administrative Officer",
    name: "Chiribabu Maharjan",
    email: "rajumaharjan77@gmail.com",
    phone: 9851022723,
  },
  {
    imge: img4,
    position: "Spokesperson",
    name: "Chiribabu Maharjan",
    email: "Chiribabu Maharjan",
    phone: 9851022723,
  },
];
function Empoly() {
  return (
    <div>
      <h3>OFFICAL</h3>
      <div className="employs">
        {imageArray.map((item) => {
          return (
            <div className="employ-item">
              <img src={item.imge} />
              <h3>{item.name}</h3>
              <h4>{item.position}</h4>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Empoly;
