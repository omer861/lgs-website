import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
import Header from "../../navbar";
import Footer from "../../Footer";

const Data = [
  {
    Basic: "Logo Design Package",
    Professional: "Logo Design Package",
    Advanced: "Logo Design Package",
  },
  {
    Basic: " Logo Design Idea – 1",
    Professional: " Logo Design Idea – 2",
    Advanced: " Logo Design Idea – 3",
  },
  {
    Basic: " Logo Revisions – 1",
    Professional: " Logo Design Duration – 2 – 4 Working Day",
    Advanced: "  Logo Design Duration – 2 – 6 Working Day",
  },
  {
    Basic: " Logo Design Duration – 1 Working Day",
    Professional: " Logo Design Duration – 1 Working Day",
    Advanced: "Logo Design Package",
  },
  {
    Basic: " Logo Design Format – JPG/PNG",
    Professional: " Logo Design Format – JPG/PNG",
    Advanced: " Logo Design Format – JPG/PNG",
  },
  {
    Basic: " Logo Source File(AI)",
    Professional: " Logo Source File(AI)",
    Advanced: " Logo Source File(AI)",
  },
  {
    Basic: " Custom Graphic",
    Professional: " Custom Graphic",
    Advanced: " Custom Graphic",
  },
  {
    Basic: " Text Logo",
    Professional: " Text Logo",
    Advanced: " Text Logo",
  },
  {
    Basic: " Business Card",
    Professional: " Business Card",
    Advanced: " Business Card",
  },
  {
    Basic: " Tag Line",
    Professional: " Tag Line",
    Advanced: " Tag Line",
  },
  {
    Basic: " Payment Options – 100% Advance",
    Professional: " Payment Options – 50%- Advance & 50% After Completion",
    Advanced: " Responsive YouTube Cover & Profile Pic,",
  },
  {
    Basic: " Competitors Logo Analysis",
    Professional: " Competitors Logo Analysis",
    Advanced: " Competitors Logo Analysis",
  },
  {
    Basic: " Extra Design",
    Professional: " Extra Design",
    Advanced: " Extra Design",
  },
  {
    Professional: " Responsive Facebook Cover & Profile Pic",
    Advanced: " Responsive Facebook Cover & Profile Pic",
  },
  {
    Professional: " Responsive YouTube Cover & Profile Pic",
    Advanced: " Responsive YouTube Cover & Profile Pic",
  },
  {
    Professional: " Instagram Profile Pic",
    Advanced: " Letterhead,",
  },
  {
    Advanced: " LinkedIn Cover & Profile Pic",
  },
  {
    Advanced: " Twitter Cover & Profile Cover",
  },
  {
    Advanced: "  Instagram Profile Pic",
  },
];

const Ourlogo = () => {
  return (
    <>
      <Header />

      <div className="logo-package-main-container">
        <h1 className="logo-heading">
          <center>Our Logo Design Packages</center>
        </h1>
        <table>
          <thead>
            <tr>
              <th className="logo-column">BASIC</th>
              <th className="logo-column-1"> PROFESSIONAL</th>
              <th className="logo-column-2">ADVANCED</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((row, index) => (
              <tr key={index}>
                <td>{row.Basic}</td>
                <td>{row.Professional}</td>
                <td>{row.Advanced}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="logo-button">
          <Link to="/contactus">
            <button className="learn-more-button-logo">Get Quote</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ourlogo;
