import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="mailto:parmarsatvan@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://www.linkedin.com/in/satvan-parmar-746651206/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/sashank002">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2022</p>
    </div>
  );
}

export default Footer;
