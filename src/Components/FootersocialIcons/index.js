import React from "react";
import "./index.css"; // Make sure to create and import your CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const SocialMediaButtons = () => {
  return (
    <div className="footer-social-media-icons-main-container">
      <div className="contact-page-social-icon-container contact-page-facebook-container">
        <a
          href="https://m.facebook.com/LabyrinthGlobalSolutions/"
          target="blank"
          className="contact-page-social-icon-anchor"
        >
          <div className="contact-page-social-icon-tooltip">Facebook</div>
          <span className="footer-social-media-span-ele">
            <FaFacebookF className="contact-page-social-icon" />
          </span>
        </a>
      </div>
      <div className="contact-page-social-icon-container contact-page-twitter-container">
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsollabyrinth"
          target="blank"
          className="contact-page-social-icon-anchor"
        >
          <div className="contact-page-social-icon-tooltip">Twitter</div>
          <span>
            <FaTwitter className="contact-page-social-icon" />
          </span>
        </a>
      </div>
      <div className="contact-page-social-icon-container contact-page-instagram-container">
        <a
          href="https://instagram.com/labyrinth_global_solutions?igshid=NTc4MTIwNjQ2YQ=="
          target="blank"
          className="contact-page-social-icon-anchor"
        >
          <div className="contact-page-social-icon-tooltip">Instagram</div>
          <span>
            <FaInstagramSquare className="contact-page-social-icon" />
          </span>
        </a>
      </div>
      <div className="contact-page-social-icon-container contact-page-linkedin-container">
        <a
          href="https://www.linkedin.com/company/14662183/admin/feed/posts/"
          target="blank"
          className="contact-page-social-icon-anchor"
        >
          <div className="contact-page-social-icon-tooltip">Linkedin</div>
          <span>
            <FaLinkedin className="contact-page-social-icon" />
          </span>
        </a>
      </div>
      <div className="contact-page-social-icon-container contact-page-youtube-container">
        <a href="#" className="contact-page-social-icon-anchor">
          <div className="contact-page-social-icon-tooltip">Youtube</div>
          <span>
            <FaYoutube className="contact-page-social-icon" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
