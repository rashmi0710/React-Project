import React from "react";
import backimage from "../assets/background.jpg";

function BackgroundImage() {
  return (
    <>
      <div
        className="backgroundimage"
        style={{
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "absolute",
          zIndex:"-2",
          width: "100%",
          height: "100%",
        }}
      ></div>
    </>
  );
}

export default BackgroundImage;
