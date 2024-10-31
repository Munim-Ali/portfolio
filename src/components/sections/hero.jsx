import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiDownloadLine,
} from "@remixicon/react";
import profile from "../../assets/images/about/profile.png";
import partner1 from "../../assets/images/client-logos/partner1.png";
import partner2 from "../../assets/images/client-logos/partner2.png";
import partner3 from "../../assets/images/client-logos/partner3.png";
import partner4 from "../../assets/images/client-logos/partner4.png";
import partner5 from "../../assets/images/client-logos/partner5.png";
import SlideUp from "../../utlits/animations/slideUp";

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile} alt="About Me" />
                <h2>Munim Ali</h2>
                <p>I am a Frontend Developer based in Karachi, Pakistan.</p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a href="https://twitter.com/i_munimali" target="_blank">
                        <RiTwitterXLine size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/munim-ali-1650071b5/"
                        target="_blank"
                      >
                        <RiLinkedinFill size={20} />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Munim-Ali" target="_blank">
                        <RiGithubLine size={20} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <p>Hello There!</p>
                <h2>
                  I’m Munim Ali, a frontend developer dedicated to crafting
                  visually engaging, user-centric experiences that feel as
                  flawless as they look.
                </h2>
                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Available for Freelancing
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Download CV{" "}
                    <i>
                      <RiDownloadLine size={16} />
                    </i>{" "}
                  </Link>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <div className="about-content-part-bottom">
                <h2>Tech Stack I Use</h2>
                <div className="company-list">
                  <div className="scroller">
                    <div className="scroller__inner">
                      <Marquee>
                        <img src={partner1} alt="" />
                        <img src={partner2} alt="" />
                        <img src={partner3} alt="" />
                        <img src={partner4} alt="" />
                        <img src={partner5} alt="" />
                        <img src={partner1} alt="" />
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
