import React, { useState } from "react";
import axios from "axios";
import HomeNavBar from "../../components/homeNavBar";
import "./contact.css";

const ContactP = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/submit-form", formData);
      setStatus(res.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <HomeNavBar />

      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="contact-content">
          {/* Locations Section */}
          <div className="locations">
            <h2 className="section-title">Locations</h2>
            <div className="location-box">
              {/* Placeholder for images */}
              <div className="map-placeholder"></div>
              <p>29077 Place St.<br /> Suite 500<br /> San Antonio, TX 77494</p>
              <p className="contact-phone">Call: (832) 555-2121</p>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="contact-form">
            <h2 className="section-title">Send A Message</h2>
            <form onSubmit={handleSubmit} className="form-container">
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="textbox" placeholder="Name" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="textbox" placeholder="Email" required />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="textbox" placeholder="Phone" />
              <textarea name="message" value={formData.message} onChange={handleChange} className="textarea" placeholder="Message" required></textarea>
              <button type="submit" className="submit-button">Send</button>
              {status && <p className="status-message">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactP;

