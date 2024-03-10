import React from "react";
import Navbar from "./Navbar";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading" style={{ fontWeight: "normal" }}>
            We Create Learning Experience With Excellent Technology.
          </h1>
          <p className="primary-text">
            Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And
            Job-Ready Certificate Programs— All Included In Your Subscription
          </p>
          <div className="container">
            <button className="secondary-button">Book Demo Class</button>
            <p className="home-pa">
              Explore More <FiArrowRight />{" "}
            </p>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
