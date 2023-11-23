import React from "react";
import "./index.css";
import bitstoreclientlogo from "../images/bitstoreclientlogo.webp";
import airbnbclientlogo from "../images/airbnbclientlogo.webp";
import AlKhalijiBankclientlogo from "../images/Al-Khaliji-Bankclientlogo.webp";
import AlcoveFurnitureclientlogo from "../images/AlcoveFurnitureclientlogo.webp";
import CIBTvissasclientlogo from "../images/CIBTvissasclientlogo.webp";
import Cognizantclientlogo from "../images/Cognizantclientlogo.webp";
import hclclientlogo from "../images/HCLclientlogo.webp";
import Medtronicclientlogo from "../images/Medtronicclientlogo.webp";
import Nityasfashionclientlogo from "../images/Nityasfashionclientlogo.webp";
import Padminiclientlogo from "../images/Padminiclientlogo.webp";
import sedemacclientlogo from "../images/sedemacclientlogo.webp";
import siemensclientlogo from "../images/siemensclientlogo.webp";
import Tataalexisclientlogo from "../images/Tataalexisclientlogo.webp";
import ptcclientlogo from "../images/ptcclientlogo.webp";
import zooxmotorsclientlogo from "../images/zooxmotorsclientlogo.webp";
import Tauliaclientlogo from "../images/Tauliaclientlogo.webp";
import yesbankclientlogo from "../images/yesbankclientlogo.webp";
import drreddysclientlogo from "../images/drreddysclientlogo.webp";
import "bootstrap/dist/css/bootstrap.min.css";

const OurClientsList = [
  {
    id: 1,
    src: zooxmotorsclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 2,
    src: Tauliaclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 3,
    src: Tataalexisclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 4,
    src: Medtronicclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 5,
    src: drreddysclientlogo,
    height: 140,
    width: 140,
  },
  {
    id: 6,
    src: bitstoreclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 7,
    src: siemensclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 8,
    src: sedemacclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 9,
    src: ptcclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 10,
    src: Padminiclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 11,
    src: CIBTvissasclientlogo,
    height: 100,
    width: 130,
  },
  {
    id: 12,
    src: Cognizantclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 13,
    src: hclclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 14,
    src: AlcoveFurnitureclientlogo,
    height: 100,
    width: 130,
  },
  {
    id: 15,
    src: airbnbclientlogo,
    height: 90,
    width: 130,
  },
  {
    id: 16,
    src: Nityasfashionclientlogo,
    height: 100,
    width: 130,
  },
  {
    id: 17,
    src: AlKhalijiBankclientlogo,
    height: 130,
    width: 130,
  },
  {
    id: 18,
    src: yesbankclientlogo,
    height: 130,
    width: 130,
  },
];

function Card() {
  return (
    <div className="container our-clients-main-container mt-4">
      <h1 className="text-center our-clients-heading">Our Clients</h1>
      <div className="h-line"></div>
      <div className="row">
        {OurClientsList.map((eachClient) => (
          <div
            className="col-6 col-md-4 col-lg-2 our-clients-image-container"
            key={eachClient.id}
          >
            <div className="our-clients-card-image">
              <img
                className="clinets-image-size"
                alt={`Client ${eachClient.id}`}
                src={eachClient.src}
                height={eachClient.height}
                width={eachClient.width}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Card;
