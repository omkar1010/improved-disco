import React, { useEffect, useRef } from "react";
import "./contact.css";
import "../../index.css";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";
import backImage from "../Assets/newassets/background-image2.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7q80ltp",
        "template_2043f0k",
        form.current,
        "6JxQB-W_-KDXW2WT6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Send Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const contact = useRef();
  useEffect(() => {
    if (contact) {
      contact?.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, []);

  return (
    <>
      <div className="contact-us-page-wrapper">
        <div
          className="contact-us-page container grid grid-cols-1 md:grid-cols-2 p-10"
          ref={contact}
        >
          <div className="contact-us-start-journey">
            <h2 className="contact-us-page-header">Start Your Journey</h2>
            <p className="contact-us-para-text">
              To revolutionize industries by transforming data into strategic
              assets that drive growth and innovation.
            </p>
          </div>

          <form
            className="conatct-us-form-wrapper"
            ref={form}
            onSubmit={sendEmail}
            method="post"
          >
            <input
              type="text"
              name="user_name"
              id="inputID"
              className="input-textarea"
              placeholder="Name"
              required
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px",
                gap: "8px",
                width: "100%",
                background: "#3c3c3c",
                borderRadius: "16px",
                flex: "none",
                color: "#fff",
              }}
            ></input>
            <br />
            <input
              type="email"
              name="user_email"
              id="inputID"
              className="input-textarea"
              placeholder="Email Id"
              required
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px",
                gap: "8px",
                width: "100%",
                background: "#3c3c3c",
                borderRadius: "16px",
                flex: "none",
                color: "#fff",
              }}
            ></input>
            <br />
            <textarea
              name="message"
              id="inputID"
              className="input-textarea"
              placeholder="Message"
            ></textarea>
            <br />

            <input
              type="submit"
              value="Send"
              className="btn btn-container"
              style={{
                backgroundImage: `url(${backImage})`,
              }}
            />
          </form>
        </div>

        <div className="map-container container p-5">
          <h2 className="map-sec mb-10">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d650.9076854369197!2d72.88021829842049!3d19.11082101260984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99f13304e3b%3A0x5e4cc95214430cd!2sSceniuz%20-%20IT%20Division%20of%20Mahapatra%20Universal%20Limited!5e1!3m2!1sen!2sin!4v1700817308699!5m2!1sen!2sin"
            //   width="600"
            //   height="450"
            //   style="border:0;"
            //   allowfullscreen=""
            //   loading="lazy"
            style={{
              width: "100%",
              height: "450px",
              marginBottom: "40px",
            }}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
