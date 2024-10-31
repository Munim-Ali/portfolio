import { RiBookLine } from "@remixicon/react";
import React from "react";
import SlideUp from "../../utlits/animations/slideUp";

const Resume = () => {
  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
            <div className="col-xl-6 col-md-6">
              <div className="single-resume">
                <h2>Experience</h2>
                <div className="experience-list">
                  <Card
                    year={"2020 - Present"}
                    title={"Frontend Developer"}
                    institution={"Expedite Studio"}
                  />
                  <Card
                    year={"2019 - 2020"}
                    title={"Website Developer"}
                    institution={"Think Solutionz"}
                  />
                </div>
              </div>
            </div>
            {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
            <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                <div className="single-resume">
                  <h2>Education</h2>
                  <Card
                    year={"2018 - 2022"}
                    title={"Bachelor Degree of Software Engineering"}
                    institution={"DCS-UBIT University of Karachi"}
                  />
                  <Card
                    year={"2016 - 2018"}
                    title={"Pre-Engineering"}
                    institution={"Gove. College Gulshan-e-Iqbal"}
                  />
                </div>
              </div>
            </div>
            {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

const Card = ({ year, title, institution }) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">
          <RiBookLine />
        </div>
        <div className="content">
          <span className="years">{year}</span>
          <h4>{title}</h4>
          <span className="company"> {institution} </span>
        </div>
      </div>
    </SlideUp>
  );
};
