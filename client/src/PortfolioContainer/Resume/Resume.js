import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedbulletIndex] = useState(0);
  const [carousalOffSetStyle, SetCarousalOffSetStyle] = useState({});

  let fadeInScreenHading = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadIn.subscribe(fadeInScreenHading);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "React Native", ratingPercentage: 70 },
    { skill: "Express JS", ratingPercentage: 77 },
    { skill: "Node JS", ratingPercentage: 79 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 82 },
    { skill: "CSS", ratingPercentage: 77 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, CSS, Express JS",
    },
    {
      title: "",
      duration: { fromDate: "", toDate: "" },
      description: "",
      subHeading: "",
    },
    {
      title: "  ",
      duration: { fromDate: "", toDate: "" },
      description: "",
      subHeading: "",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Sindh Jamshoro"}
        subHeading={"Bachelor OF Computer Science"}
        fromDate={"2015"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Government Boys Higher Secondary School Digri"}
        fromDate={"2012"}
        toDate={"2014"}
      />
      <ResumeHeading
        heading={"Middle School"}
        subHeading={"Government Boys Higher Secondary School Digri"}
        fromDate={"2010"}
        toDate={"2012"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-main">
        <div className="experience-container">
          <ResumeHeading
            heading={"Asian Institute Of Medical Sciences (AIMS)"}
            subHeading={"I.T Assistant"}
            fromDate={"2018"}
            toDate={"2021"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Here is brief description of what I do for Asian Institute Of
              Medical Sciences with some of my key responsibility
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Troubleshooting hardware maintenance and network monitoring etc.
              .
            </span>
            <br />
            <span className="resume-description-text">
              - Manage and Update company Website.{" "}
            </span>
            <br />
            <span className="resume-description-text"></span>
            <br />
          </div>
        </div>

        <div className="experience-container">
          <ResumeHeading
            heading={"Hidaya Institute of Science and Technology, Jamshoro"}
            subHeading={"Web Development"}
            fromDate={"2019"}
            toDate={"2019"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Here is brief description of what I do for Asian Institute Of
              Medical Sciences with some of my key responsibility
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Troubleshooting hardware maintenance and network monitoring etc.
              .
            </span>
            <br />
            <span className="resume-description-text">
              - Manage and Update company Website.{" "}
            </span>
            <br />
            <span className="resume-description-text"></span>
            <br />
          </div>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    SetCarousalOffSetStyle(newCarousalOffset);
    setSelectedbulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
