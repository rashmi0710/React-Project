import React from "react";
import { FiArrowRight } from "react-icons/fi";
import StudenTimage from "../assets/student.png";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
const Feedback = () => {
  return (
    <div className="Feedback-container">
      <div className="Feedback-text-section">
        <h1>Our Students Feedback</h1>
        <p>
          At Learning Exp. We Are Committed To Providing You With A Superior
          Learning Experience That Empowers You To Achieve Your Goals. Join Us
          Today And Embark On A Journey Of Discovery, Growth, And Success.
        </p>

        <button className="secondary-button">
          Read More <FiArrowRight />{" "}
        </button>

        <div className="Student-info-section">
          <div className="student-image-section">
            <img src={StudenTimage} alt="" />
          </div>

          <div className="student-test-section">
            <div>
              <StarRoundedIcon /> <StarRoundedIcon /> <StarRoundedIcon />{" "}
              <StarRoundedIcon /> <StarRoundedIcon />
            </div>
            <div>
              <p>
                "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
                Quae Ab Illo Modi Tem."
              </p>
            </div>

            <h5>Riad Isalm</h5>
            <h6>Product Manager. @Learning.Com</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
