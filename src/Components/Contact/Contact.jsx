import React, { useState } from "react";
import "./Contact.css";
import bgIcon from "../../assets/themeTitle.png";
import mailIcon from "../../assets/mail_icon.png";
import callIcon from "../../assets/call_icon.png";
import locationIcon from "../../assets/location_icon.png";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    const apiKey = import.meta.env.VITE_API_KEY;
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert("Form Submitted Successfully");
      } else {
        console.log("Error", data);
        setResult(data.message);
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("An error occurred while submitting the form.");
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <motion.div
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="contact-title">
        <h1>Contact</h1>
        <img src={bgIcon} alt="Background Icon" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'd love to hear from you! Whether you have a project in mind, a
            question about my work, or just want to say hello, feel free to
            reach out.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img style={{ width: "20px" }} src={mailIcon} alt="Email Icon" />
              <p>arslanhaiderchand88@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img
                style={{ width: "40px", marginLeft: "-10px" }}
                src={callIcon}
                alt="Phone Icon"
              />
              <p>(+92) 3217077229</p>
            </div>
            <div className="contact-detail">
              <img
                style={{ width: "30px", marginLeft: "-7px" }}
                src={locationIcon}
                alt="Location Icon"
              />
              <p>Sialkot, Punjab, Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            id="name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="message">Write your message</label>
          <textarea
            rows="10"
            placeholder="Write your Message Here"
            name="message"
            id="message"
            required
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
