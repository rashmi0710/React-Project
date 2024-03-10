import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;