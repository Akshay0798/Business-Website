import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AboutImage from "../../assets/about/about_img.jpg";

export default function About() {
  // Icons
  const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />;
  const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />;
  const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />;
  const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />;
  const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />;
  const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="title_headling">
            <h3>We Provides Shortage Remarkable Ideas!</h3>
            <p>
              We specialize in delivering a scarcity of exceptional ideas that
              surpass conventional expectations, catering to unique needs and
              surpassing challenges with innovative solutions.
            </p>
          </div>
          <div className="about_box_wrapper">
            <div className="about_box">
              <div className="about_icon">{faBusinessIcon}</div>
              <div className="about_content">
                <h5>Development</h5>
                <p>
                  Precise development strategies shaping transformative
                  solutions.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon green_icon">{faChartPieIcon}</div>
              <div className="about_content">
                <h5>Integration</h5>
                <p>
                  Seamless integration strategies enabling flawless operations
                  and surpassing challenges.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon blue_icon">{faTruckFastIcon}</div>
              <div className="about_content">
                <h5>Branding</h5>
                <p>
                  Crafting brand excellence by transcending obstacles and
                  captivating audiences with compelling narratives.
                </p>
              </div>
            </div>
          </div>

          <div className="about_box_details">
            <div className="about_col">
              <div className="about_image">
                <img src={AboutImage} alt="about" className="about_main" />
              </div>
              <div className="img_info__box">
                <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                <p>
                  Discover competitive prices tailored just for you. Get your
                  personalized price quote today.
                </p>
                <a href="/">
                  {faPhoneIcon} <span>1-800-654-3210</span>
                </a>
              </div>
            </div>
            <div className="about_col more_space">
              <h3>We have business skills that will increase your earnings</h3>
              <p>
                Our tailored business skills drive increased earnings and
                sustainable growth. Through adept strategies and innovative
                solutions, we empower your success amidst challenges, maximizing
                profitability and unlocking your business's full potential.
              </p>

              <div className="grid_info">
                <div className="icon">{faUserClockIcon}</div>
                <div className="detail">
                  <h4>Start your own business in minutes</h4>
                  <p>
                    Start your entrepreneurial journey swiftly with our expert
                    guidance and streamlined processes, ensuring a seamless
                    business launch in minutes.
                  </p>
                </div>
              </div>
              <div className="grid_info">
                <div className="icon green_icon">{faHouseLaptopIcon}</div>
                <div className="detail">
                  <h4>Open a business account online</h4>
                  <p>
                    Easily open your business account online, benefiting from a
                    seamless, hassle-free process designed for your convenience
                    and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
