import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Data Scientist`,
    jobType: `Mannheim, Germany | Onsite`,
    jobDuration: `Nov 2021 - August 2022`,
    timeDuraton: `Intern`,
    compnayName: "Chemovator GmbH",
    jobDescription: `Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor.`,
  },
  {
    jobPosition: `Visual Designer`,
    jobType: `Ridian | Remote`,
    jobDuration: `Mar 2020 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "Ridian IT",
    jobDescription: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor. Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.`,
  },
  {
    jobPosition: `ASSISTANT SYSTEM ENGINEER & WEB DEVELOPERt`,
    jobType: `Kolkata, India | Onsite`,
    jobDuration: `November 2018 – September 2020`,
    timeDuraton: `Full Time`,
    compnayName: "Tata Consultancy Services Limited",
    jobDescription: ` • Development and logic building in java using frameworks like struts2 and spring and SQL query generation
    • Developing web pages along the UI layout and front-end programming with validations using jQuery`,
  },
];

const educatonContent = [
  {
    passingYear: "September 2023 - October 2020",
    degreeTitle: "Master degree in Computational Engineering",
    instituteName: "Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany",
  },
  {
    passingYear: "September 2023 - Februrary 2022",
    degreeTitle: " Double Master degree in Computational Sciences",
    instituteName: " Università della Svizzera italiana USI, Lugano, Switzerland",
  },
  {
    passingYear: "July 2018 – August 2014",
    degreeTitle: " Bachelor's degree in Mechanical Engineering",
    instituteName: "Heritage Institute of Technology, Kolkata, India",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
