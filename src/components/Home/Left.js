import React from "react";

import Tilt from "react-parallax-tilt";
// import LogoBeniDiego from "../../assets/profil.png";

export default function Left() {
  return (
        <div className="home-left">
          <Tilt
          tiltMaxAngleY="5"
          tiltMaxAngleX="5"
          >
            <img
              style={{ width: "90%", borderRadius: "30px", boxShadow: "2px 2px 10px #000000" }}
              src="https://res.cloudinary.com/dktfcexev/image/upload/v1655094116/Portfolio/profil_qjxbie.png"
              alt="avatar"
            />
          </Tilt>
        </div>
  );
}
