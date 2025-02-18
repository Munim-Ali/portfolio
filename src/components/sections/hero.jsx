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
  RiTreeFill,
} from "@remixicon/react";
import profile from "../../assets/images/about/profile.webp";
import Javascript from "../../assets/images/technology/Javascript.png";
import Typescript from "../../assets/images/technology/TypeScript.png";
import ReactImg from "../../assets/images/technology/React-JS.png";
import Next from "../../assets/images/technology/Next-JS.png";
import redux from "../../assets/images/technology/Redux.png";
import tailwind from "../../assets/images/technology/Tailwind-CSS.png";
import shadcn from "../../assets/images/technology/ShadCn.png";
import materialUI from "../../assets/images/technology/Material-UI.png";
import bootstrap from "../../assets/images/technology/BootStrap.png";
import wordpress from "../../assets/images/technology/Wordpress.png";
import CV from "../../assets/docs/Syed-Abdul-Munim-Ali-Frontend-Dev.pdf";
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
                <h2 className="mt-4">Munim Ali</h2>
                <p>I am a Software Developer based in Karachi, Pakistan.</p>
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
                    <li className="linktree-icon">
                      <a href="https://linktr.ee/munimali" target="_blank">
                        <RiTreeFill size={20} />
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
                  I’m Munim Ali, a software developer dedicated to crafting
                  visually engaging, user-centric experiences that feel as
                  flawless as they look.
                </h2>
                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Available for Projects, Remote and Part-time Jobs
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <a href={CV} className="theme-btn" download>
                    Download CV{" "}
                    <i>
                      <RiDownloadLine size={16} />
                    </i>{" "}
                  </a>
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
                        <img src={Javascript} alt="" />
                        <img src={Typescript} alt="" />
                        <img src={ReactImg} alt="" />
                        <img src={Next} alt="" />
                        <img src={redux} alt="" />
                        <img src={tailwind} alt="" />
                        <img src={shadcn} alt="" />
                        <img src={materialUI} alt="" />
                        <img src={bootstrap} alt="" />
                        <img src={wordpress} alt="" />
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
