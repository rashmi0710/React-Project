import React from "react";
import SmartPhone from '../assets/smartphone.png';
import Dashboard from '../assets/Dashboard.png';
import Layout from '../assets/layout.png';

const Services = () => {
  const workInfoData = [
    {
      color: "white",
      image: SmartPhone,
      title: "Learn Anything",
      text: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.",
    },
    {
      color:"#faf8e4",
      image: Dashboard,
      title: "Flexible Learning",
      text: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. ",
    },
    {
      color: "white",
      image: Layout,
      title: "Expert Connect",
      text: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.",
    },
  ];
  return (
    <div className="services-container">
      <h1 className="service-primary-heading">
        We provide various kinds of learning modules for you
      </h1>
      <p className="service-primary-text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="work-section-bottom" >
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title} style={{backgroundColor:data.color, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
            <div className="info-boxes-img-container" >
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p >{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
