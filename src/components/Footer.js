import React from "react";
import Logo from "../assets/Logo.svg";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" /> <h1>Learning Exp.</h1>
        </div>
        <div className="footer-icons">
          <TwitterIcon/>
          <LinkedInIcon/>
          <YouTubeIcon/>
          <FacebookRoundedIcon/>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span style={{color:"black", marginBottom:"2rem"}}>Links</span>
          <span>Home</span>
          <span>Pricing</span>
          <span>Download</span>
          <span>About</span>
          <span>Service</span>
        </div>
        <div className="footer-section-columns">
          <span style={{color:"black", marginBottom:"2rem"}}>Support</span>
          <span>FAQ</span>
          <span>Features</span>
          <span>Contact</span>
          <span>Reporting</span>
        </div>
        <div className="footer-section-columns">
          <span style={{color:"black", marginBottom:"2rem"}}>Contact Us</span>
          <span>+880 12345678</span>
          <span>youremail@gmail.com</span>
          <span>Pune City</span>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;