import uklogo from "../images/uklogo.webp";
import usalogo from "../images/usalogo.webp";
import uaelogo from "../images/uaelogo.webp";

import indialogo from "../images/indialogo.webp";
import "./index.css";

const CountriesIcons = () => {
  return (
    <div className="logos-cards-container d-flex">
      <div className="contact-country-card ">
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
          <a href="tel:+442081236407" rel="noopener noreferrer">
            +4 420 8123 6407
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
          <a href="tel:+1 8722606999" rel="noopener noreferrer">
            +1(872)260-6999
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
          <a href="tel:+971522286916" rel="noopener noreferrer">
            +971 52 228 6916
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
          <a href="tel:+918008448885" rel="noopener noreferrer">
            +91 80084 48885
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountriesIcons;
