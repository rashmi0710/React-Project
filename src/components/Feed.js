import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Feed = () => {
  return (
    <div className="Feed-container">
      <div className="feed-text">
        <h1> Our Students Feedback </h1>
        <p>
          At Learning Exp. We Are Committed To Providing You With A Superior
          Learning Experience That Empowers You To Achieve Your Goals. Join Us
          Today And Embark On A Journey Of Discovery, Growth, And Success.
        </p>
      </div>
      <div className="feed-button">
        <button className="feed-secondary-button">Read More <FiArrowRight />{" "}</button>
      </div>
    </div>
  );
};

export default Feed;
