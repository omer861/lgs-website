import uklogo from "../images/uklogo.png";
import usalogo from "../images/usalogo.png";
import uaelogo from "../images/uaelogo.png";

import indialogo from "../images/indialogo.png";
import "./index.css";

const CountriesIcons = () => {
  return (
    <div className="logos-cards-container d-flex">
      <div className="contact-country-card">
        <a
          className="whatsapp_web"
          href="https://wa.me/+442081236407"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={uklogo}
            className="uk-logo"
            alt="whatsapp"
            title="WhatsApp"
          />
        </a>
        <div className="contact-country-card-description">
          <p className="contact-country-card-para">UNITED KINGDOM</p>
          <a
            className="contact-info first_nav_content mr-md-2"
            href="tel:+442081236407"
            rel="noopener noreferrer"
          >
            +442081236407
          </a>
        </div>
      </div>
      <div className="contact-country-card">
        <a
          className="whatsapp_web"
          href="https://wa.me/+442081236407"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={usalogo}
            className="uk-logo"
            alt="whatsapp"
            title="WhatsApp"
          />
        </a>
        <div className="contact-country-card-description">
          <p className="contact-country-card-para">UNITED STATES OF AMERICA</p>
          <a
            className="contact-info first_nav_content mr-md-2"
            href="tel:+1 8722606999"
            rel="noopener noreferrer"
          >
            +1 8722606999
          </a>
        </div>
      </div>
      <div className="contact-country-card">
        <a
          className="whatsapp_web"
          href="https://wa.me/+971522286916"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={uaelogo}
            className="uk-logo"
            alt="whatsapp"
            title="WhatsApp"
          />
        </a>
        <div className="contact-country-card-description">
          <p className="contact-country-card-para">UNITED ARAB EMIRATES</p>
          <a
            className="contact-info mob first_nav_content mr-md-2"
            href="tel:+971522286916"
            rel="noopener noreferrer"
          >
            +971522286916
          </a>
        </div>
      </div>
      <div className="contact-country-card">
        <a
          className="whatsapp_web"
          href="https://wa.me/+918008448885"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={indialogo}
            className="uk-logo"
            alt="whatsapp"
            title="WhatsApp"
          />
        </a>
        <div className="contact-country-card-description">
          <p className="contact-country-card-para">INDIA</p>
          <a
            className="contact-info first_nav_content mr-md-2"
            href="tel:+918008448885"
            rel="noopener noreferrer"
          >
            +91 8008448885
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountriesIcons;
