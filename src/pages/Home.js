import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Satvan</h2>
        <div className="prompt">
          <p>
            A Computer Science Student with a passion for learning and creating.
          </p>
          <p style={{ fontSize: "24px" }}>
            parmarsatvan@gmail | +91 8320914745
          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML,CSS,Reactjs,React-native,Bootstrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS,ExpressJS,.NET Core</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C++,javascript,python,Basic Java,Basic C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
