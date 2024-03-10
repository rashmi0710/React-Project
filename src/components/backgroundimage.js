import React from "react";
import backimage from "../assets/background.jpeg";

function BackgroundImage() {
  return (
    <>
      <div
        className="backgroundimage"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 43, 219, 0.5), rgba(38, 43, 219, 0.5)), url(${backimage})`,
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
