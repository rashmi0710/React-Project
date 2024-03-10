import React from "react";
// import { FiArrowRight } from "react-icons/fi";
import StudenTimage from "../assets/student.png";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
const Feedback = () => {
  return (
    <div className="Feedback-container">
      <div className="Student-info-section">
        
        <div className="student-image-section">
          <img src={StudenTimage} alt="" />
        </div>

        <div className="student-text-section">
          <div className="star-container">
            <StarRoundedIcon />
            <StarRoundedIcon />
            <StarRoundedIcon />
            <StarRoundedIcon />
            <StarRoundedIcon />
          </div>

          <div>
            <p>
              "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
              Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
              Quae Ab Illo Modi Tem."
            </p>
          </div>

          <h5>Riad Isalm</h5>
          <h6>Product Manager.<span style={{color:"blue"}}>@Learning.Com</span> </h6>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
