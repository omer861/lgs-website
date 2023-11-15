import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./index.css";

const Mobilesocialmediabtns = () => {
  return (
    <div className="mobile-social-media-btns-main-container">
      <div className="mobile-social-media-btns-mini-container">
        <div className="mobile-social-icon-container">
          <a
            href="https://www.linkedin.com/company/14662183/admin/feed/posts/"
            target="blank"
          >
            <FaLinkedin className="mobile-social-icon" />
          </a>
        </div>
        <div className="mobile-social-icon-container">
          <a
            href="https://instagram.com/labyrinth_global_solutions?igshid=NTc4MTIwNjQ2YQ=="
            target="blank"
          >
            <FaInstagramSquare className="mobile-social-icon " />
          </a>
        </div>
        <div className="mobile-social-icon-container">
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsollabyrinth"
            target="blank"
          >
            <FaTwitter className="mobile-social-icon" />
          </a>
        </div>
        <div className="mobile-social-icon-container">
          <a
            href="https://m.facebook.com/LabyrinthGlobalSolutions/"
            target="blank"
          >
            <FaFacebook className="mobile-social-icon" />
          </a>
        </div>
        <div className="mobile-social-icon-container">
          <a href="#">
            <FaYoutube className="mobile-social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobilesocialmediabtns;
