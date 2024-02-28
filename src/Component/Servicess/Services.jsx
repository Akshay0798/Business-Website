import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChartBar,
  faCopy,
  faMarker,
  faUserGear,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  // Icons
  const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />;
  const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
  const faCopyIcon = <FontAwesomeIcon icon={faCopy} />;
  const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />;
  const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />;
  const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />;
  return (
    <>
      <div id="services">
        <div className="container">
          <div className="title_headling">
            <h3>What's Services We Are Offering to Our Customers</h3>
            <p>
              Explore our diverse service portfolio tailored to meet your needs.
              From cutting-edge solutions to expert guidance, we're here to
              support you every step of the way.
            </p>
          </div>
          <div className="service_wrapper">
            <div className="service_box">
              <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
              <h4 className="number">01</h4>
              <div className="service_content">
                <h5>Cloud Computing</h5>
                <p>
                  Unlock the power of cloud computing for seamless, scalable,
                  and secure operations, fostering innovation and accessibility.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">{faChartBarIcon}</div>
              <h4 className="number">02</h4>
              <div className="service_content">
                <h5>Business Strategy</h5>
                <p>
                  Optimize success with tailored business strategies. Drive
                  growth and adaptability through innovative approaches.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon green_icon">{faCopyIcon}</div>
              <h4 className="number">03</h4>
              <div className="service_content">
                <h5>Reports Analysis</h5>
                <p>
                  Uncover insights and drive informed decisions with our report
                  analysis services, optimizing strategic actions from data.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">{faMarkerIcon}</div>
              <h4 className="number">04</h4>
              <div className="service_content">
                <h5>Decision Maker</h5>
                <p>
                  Make informed choices with our Decision Maker service,
                  leveraging data-driven insights for strategic efficiency.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon green_icon">{faUserGearIcon}</div>
              <h4 className="number">05</h4>
              <div className="service_content">
                <h5>Customer Oriented</h5>
                <p>
                  Customer-focused excellence. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Prioritizing your needs for
                  utmost satisfaction.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon blue_icon">{faCoinsIcon}</div>
              <h4 className="number">06</h4>
              <div className="service_content">
                <h5>Solution Focused</h5>
                <p>
                  Solution-driven focus. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Innovative problem-solving for tailored
                  results.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
