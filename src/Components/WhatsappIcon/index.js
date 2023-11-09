import Lottie from "lottie-react";
import React from "react";
import WhatsappTime from "./WhatsappTime.json";
import { BsWhatsapp } from "react-icons/bs";
import "./index.css";

// import Whatsappanimation from './whatsappanimation.json'

const whatsppAPI = process.env.REACT_APP_WHATSAPPLINK;

const WhatsAppIntegration = () => {
  return (
    <a
      className="nav-join-whatsapp-anchor mr-5 whatsapp-button"
      href={whatsppAPI}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Lottie
        className="whatsapp-icon"
        loop={true}
        animationData={WhatsappTime}
      />
    </a>
  );
};

export default WhatsAppIntegration;
