import React, { useRef } from "react";
import { RiMailLine } from "@remixicon/react";
import emailjs from "@emailjs/browser";
import SlideUp from "../../../utlits/animations/slideUp";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Form submitted successfully!");
          reset();
        },
        (error) => {
          toast.error("Failed to send, Please contact via email");
        }
      );
  };
  return (
    <div className="col-lg-8">
      <SlideUp>
        <div className="contact-form contact-form-area">
          <form
            id="contactForm"
            className="contactForm"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Steve Milner"
                    required
                    data-error="Please enter your Name"
                  />
                  <label for="name" className="for-icon">
                    <i className="far fa-user"></i>
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="hello@websitename.com"
                    required
                    data-error="Please enter your Email"
                  />
                  <label for="email" className="for-icon">
                    <i className="far fa-envelope"></i>
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label for="message">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Write Your message"
                    required
                    data-error="Please Write your Message"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Me Message{" "}
                    <i>
                      <RiMailLine size={15} />
                    </i>
                  </button>
                  <div id="msgSubmit" className="hidden"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactForm;
