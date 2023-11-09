import { BiPhoneCall, BiLogoFacebook, BiLogoGmail } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import VisitTracker from "../Tracker";
import Cookies from "js-cookie";

import "./index.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    fetchVisitCount(); // Fetch the visit count on initial load
    postVisitCount();
  });

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const fetchVisitCount = async () => {
    try {
      const response = await fetch(`${apiUrl}/getVisitCount`);
      const data = await response.json();
      setVisitCount(data.visitCount);
    } catch (error) {
      console.error("Error fetching visit count:", error);
    }
  };
  const postVisitCount = () => {
    const visitCookie = Cookies.get("VisitCount");
    if (visitCookie === "booyah") {
      return;
    } else {
      Cookies.set("VisitCount", "booyah");
      fetch(`${apiUrl}/incrementVisitCount`, { method: "POST" })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            return;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    // {style={{ backgroundColor: "#353b66" }}}
    <div
      className="container-fluid p-4 bottom-fixed"
      style={{
        backgroundImage:
          'url("https://www.techasoft.com/debug/img/industries-back.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className="row">
        <div className="col-12 col-lg-3 col-md-6 ">
          <div className="footerContent pt-3">
            <p style={{ color: "white" }}>
              LABYRINTH GLOBAL SOLUTIONS <br />
              has the required experience to help architect, design, develop and
              deliver any technical solution to your organization..
            </p>
            <div>
              <p>&copy;  Labyrinth Global Solutions 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 ">
          <div className="footerContact">
            <h1 className="footerHeader">Contact info</h1>
            <hr className="footerHorizontalLine" />
            <ol className="footerContactListClumzi">
              <li className="footerContactListItem ListItem1">
                <div>
                  <BiPhoneCall size="15" color="#0edae8" />
                </div>
                <p className="pl-2" style={{ color: "white" }}>
                  +91 8919078185
                </p>
              </li>
              <li className="footerContactListItem ListItem2">
                <div className="footerIcon">
                  <BiLogoGmail size="15" color="#0edae8" />
                </div>
                <div className="Footerdiv">
                  <p className="pl-2" style={{ color: "white" }}>
                    info@labyrinthglobalsolutions
                    <br />
                    Address: Cyber Space Building, 5th Floor, Madhapur Hi-Tech
                    City, 500081
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 ">
          <div className="footerUsefullLinks">
            <h1 className="footerHeader">Useful Links</h1>
            <hr className="footerHorizontalLine" />
            <ol className="footerContactList">
              <li className="footerContactListItem ListItem3">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    Home
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem4">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/aboutus" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    About Us
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem5">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/contactus" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    FAQ
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem6">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/contactus" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    Policies
                  </p>
                </Link>
              </li>
            </ol>
          </div>
        </div>
        <div className=" col-12 col-lg-3 col-md-6 ">
          <div className="footerServices">
            <h1 className="footerHeader">Our Services</h1>
            <hr className="footerHorizontalLine" />
            <ol className="footerContactList">
              <li className="footerContactListItem ListItem7">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/polarianalm" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    Polarion ALM
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem8">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/saascloudsolutions" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    SAAS & Cloud Solutions
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem9">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/resellermendix" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    Mendix
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem10">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/mobileandappdevelopment" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    Web Development
                  </p>
                </Link>
              </li>
              <VisitTracker visitCount={visitCount} />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
