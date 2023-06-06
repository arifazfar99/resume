import React from "react";
import "./resume.css";
import myImage from "./images/user.png";

const Resume = () => {
  return (
    <div className="container">
      <div className="head">
        <img src={myImage} alt="myImage" />
        <div>
          <p className="name">Arif Azfar Azri</p>
          <p>
            <span>Address</span>: Puchong, Selangor, Malaysia
          </p>
          <p>
            <span>Phone</span>: +6011-1030 1602
          </p>
          <p>
            <span>Email</span>:{" "}
            <a href="mailto: arifazfar99@gmail.com">arifazfar99@gmail.com</a>
          </p>
          <p>
            <span>LinkedIn</span>:{" "}
            <a
              href="https://www.linkedin.com/in/arif-azfar-azri/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/arif-azfar-azri/
            </a>
          </p>
          <p>
            <span>GitHub</span>:{" "}
            <a
              href="https://github.com/arifazfar99"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/arifazfar99
            </a>
          </p>
          <p>
            <span>Portfolio</span>:{" "}
            <a
              href="https://arif-azfar-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://arif-azfar-portfolio.netlify.app/
            </a>
          </p>
        </div>
      </div>
      <hr />

      <h2>Experience</h2>
      <ul>
        <li>Company A - Frontend Developer (2018-2021)</li>
        <li>Company B - Junior Developer (2016-2018)</li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li>University of XYZ - Bachelor's Degree in Computer Science</li>
      </ul>
    </div>
  );
};

export default Resume;
