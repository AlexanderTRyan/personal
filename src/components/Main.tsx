import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePicture from '../assets/images/profile-picture.png';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePicture} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AlexanderTRyan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alexander-ryan-92177a249/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Alexander Ryan</h1>
          <p>Computer Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AlexanderTRyan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alexander-ryan-92177a249/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;