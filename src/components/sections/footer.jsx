import {
  RiGithubLine,
  RiLinkedinFill,
  RiTreeFill,
  RiTwitterXLine,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="footer-bottom pt-50 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="copyright-text d-flex align-items-center justify-content-start">
                <p>
                  Copyright @{year}, <Link to="/">Munim Ali</Link> All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end justify-content-center justify-content-lg-end">
              <div className="footer-social text-end">
                <ul>
                  <li>
                    <a href="https://twitter.com/i_munimali" target="_blank">
                      <RiTwitterXLine size={18} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/munim-ali-1650071b5/"
                      target="_blank"
                    >
                      <RiLinkedinFill size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Munim-Ali" target="_blank">
                      <RiGithubLine size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="https://linktr.ee/munimali" target="_blank">
                      <RiTreeFill size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
