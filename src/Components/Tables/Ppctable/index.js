import React from "react";
import "./index.css";
import Header from "../../navbar";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const Data = [
  {
    Basic: "PPC Packages",
    Advanced: "PPC Packages",
    Enterprise: "PPC Packages",
  },
  {
    Basic: " Campaign – 1",
    Advanced: " Campaign – 2",
    Enterprise: " Campaign – 5",
  },
  {
    Basic: " AD Groups – 2",
    Advanced: " AD Groups – 6",
    Enterprise: " AD Groups – 10",
  },
  {
    Basic: " Ad Copies – Maximum 6",
    Advanced: " Ad Copies – Maximum 15",
    Enterprise: " Ad Copies – Maximum 50",
  },
  {
    Basic: " No. of Keywords-50",
    Advanced: " No. of Keywords-100",
    Enterprise: " No. of Keywords-150",
  },
  {
    Basic: " Search Ads",
    Advanced: " Search Ads",
    Enterprise: " Search Ads",
  },
  {
    Basic: "  Display Ads",
    Advanced: " Display Ads",
    Enterprise: " Display Ads",
  },
  {
    Basic: " Gmail Ads",
    Advanced: " Gmail Ads",
    Enterprise: " Gmail Ads",
  },
  {
    Basic: " Video Ads",
    Advanced: " Video Ads",
    Enterprise: " Video Ads",
  },
  {
    Basic: " Shopping Ads",
    Advanced: " Shopping Ads",
    Enterprise: " Shopping Ads",
  },
  {
    Basic: " App Promotion Ads",
    Advanced: " App Promotion Ads",
    Enterprise: " App Promotion Ads",
  },
  {
    Basic: " Remarketing List",
    Advanced: " Remarketing List",
    Enterprise: " Remarketing List",
  },
  {
    Basic: " Conversion Tracking",
    Advanced: " Conversion Tracking",
    Enterprise: " Conversion Tracking",
  },
  {
    Basic: "PPC CAMPAIGN MANAGEMENT",
    Advanced: "PPC CAMPAIGN MANAGEMENT",
    Enterprise: "PPC CAMPAIGN MANAGEMENT",
  },
  {
    Basic: " Competitor Analysis – Yes",
    Advanced: " Competitor Analysis – Yes",
    Enterprise: " Competitor Analysis – Yes",
  },
  {
    Basic: " Keyword Optimization – Yes",
    Advanced: " Keyword Optimization – Yes",
    Enterprise: " Keyword Optimization – Yes",
  },
  {
    Basic: " Ad Copy Optimization – Yes",
    Advanced: " Ad Copy Optimization – Yes",
    Enterprise: " Ad Copy Optimization – Yes",
  },
  {
    Basic: "VALUE ADDS",
    Advanced: "VALUE ADDS",
    Enterprise: "VALUE ADDS",
  },
  {
    Basic: " ROI Analysis",
    Advanced: " ROI Analysis",
    Enterprise: " ROI Analysis",
  },
  {
    Basic: " Landing Page Optimization",
    Advanced: "  Landing Page Optimization",
    Enterprise: "  Landing Page Optimization",
  },
  {
    Basic: " REPORTING",
    Advanced: " REPORTING",
    Enterprise: " REPORTING",
  },
  {
    Basic: "  Reports – Monthly",
    Advanced: "  Reports – Monthly",
    Enterprise: "  Reports – Monthly",
  },
  {
    Basic: " Dedicated Account Manager",
    Advanced: " Dedicated Account Manager",
    Enterprise: " Dedicated Account Manager",
  },
  {
    Basic: " Support – Email, Chat",
    Advanced: "  Support – Email, Chat",
    Enterprise: " Support – Email, Chat",
  },
];

const PpcTable = () => {
  return (
    <>
      <Header />
      <div className="ppc-main-container">
        <h1 className="ppc-heading">
          <center>Price Per Click</center>
        </h1>
        <table>
          <thead>
            <tr>
              <th className="ppc-column">BASIC</th>
              <th className="ppc-column-1">ADVANCED</th>
              <th className="ppc-column-2">ENTERPRISE</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((row, index) => (
              <tr key={index}>
                <td className="row-cell">{row.Basic}</td>
                <td>{row.Advanced}</td>
                <td>{row.Enterprise}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="ppc-button">
          <Link to="/contactus">
            <button className="learn-more-button-ppc">Get Quote</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PpcTable;
