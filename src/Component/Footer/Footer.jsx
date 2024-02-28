import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  // Icons
  const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />;

  // State
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to listen to the scroll event and toggle the visibility of the scroll-to-top button
  const listenToScroll = () => {
    // Define a height threshold (heightToHidden) to determine when to show or hide the button
    let heightToHidden = 250;

    // Get the current scroll position from either the body or the document element
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    // Check if the scroll position is beyond the defined threshold
    // If it is, set isVisible state to true (show the scroll-to-top button), otherwise set it to false (hide the button)
    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <>
      <section className="container">
        <footer className="footer">
          <p>
            © All Right Reserved 2024 Designed By{" "}
            <a href="/">Akshay Umredkar</a>
          </p>
        </footer>
      </section>

      {/* Scroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollToTop}>
          {faArrowUpIcon}
        </div>
      )}
    </>
  );
}
