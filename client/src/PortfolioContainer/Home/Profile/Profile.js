import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ProfilePhoto from "../../../assets/Home/profilephoto.png";
import ScreenHeading from "../../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../../utilities/ScrollService";
import Animations from "../../../utilities/Animations";

const Profile = (props) => {
  let fadeInScreenHading = (screen) => {
    if (screen.fadeScreen !== props.id)
      return Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadIn.subscribe(fadeInScreenHading);

  return (
    <div className="profile-container" id='Home'>
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/faqeerhussain494" target ='_blank'>
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#" target ='_blank'>
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#" target ='_blank'>
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" target ='_blank'>
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#" target ='_blank'>
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              I'M <span className="highlighted-text">Faqeer Hussain</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🔴",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 😎",
                    1000,
                    "Cross Platform Dev 🌐",
                    1000,
                    "React/react Native Dev 📱",
                    1000,
                  ]}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and backend
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="FaqeerHussainCV.pdf" download="Faqeer Hussain CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
            <div className="profile-picture-div">
              <img src={ProfilePhoto} alt="Faqeer Hussain Picture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
