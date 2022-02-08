import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";
import meImage from "../../assets/AboutMe/me.jpg";


const AboutMe = (props) => {
  let fadeInScreenHading = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadIn.subscribe(fadeInScreenHading);
  const SCREEN_CONSTANTS = {
    description:
      "Full Stack Web and Mobile Developer with background knowledge of MERN stacks with redux, along with a knack of building applications with outmost efficiency strong professional with a BSC willing to be an asset for an organization ",
    highlights: {
      bullets: [
        "Full Stack Web and Mobile Development",
        "Interactive Front End as per the Design",
        "React and React Native",
        "Redux for State Management",
        "Building REST API",
        "Managing Database",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHightlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <>
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile">
            <img src={meImage} alt="Here is my picture" />
          </div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHightlight()}
            </div>
            <div className="about-me-options">
            <button className="btn primary-btn"
            onClick={()=>ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Hire Me{" "}
            </button>
            <a href="FaqeerHussainCV.pdf" download="Faqeer Hussain CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
 </>   
  );
};

export default AboutMe;
