import React from "react";
import BannerImage from "../assets/home-banner-image.png";

const WhyUs = () => {
  return (
    <div className="WhyUs-container">
      <h1 className="service-primary-heading " style={{textAlign:"center"}}>Why Us</h1>
      <p className="service-primary-text" style={{textAlign:"center", marginBottom:"0%"}}>
        At Learning Exp. We Are Committed To Providing You With A Superior
        Learning Experience That Empowers You To Achieve Your Goals. Join Us
        Today And Embark On A Journey Of Discovery, Growth, And Success.
      </p>
      <div className="home-banner-container" >
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-text-section" style={{margin:"0% 5% 0% 5%"}}>
          <h1
            className="why-usprimary-heading" >
            Crafting Your Dream Career: Building a Path You Love with us
          </h1>
          <p className="primary-text" style={{color:"gray"}}>
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </p>

          <p className="whyus_secondarytext" style={{color:"gray"}}>
            Our Platform Is Designed To Empower Learners Like You To Excel In
            Today’s Dynamic World.
          </p>
          <div className="container">
            <button className="secondary-button" >Get More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
