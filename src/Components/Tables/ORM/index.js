import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../Footer";
import Header from "../../navbar";
import "./index.css";
const OrmTable = () => {
  return (
    <>
      <Header />
      <div className="orm-main-container">
        <h1 className="orm-heading">
          Our Online Reputation Management Packages
        </h1>
        <table>
          <thead>
            <tr>
              <th className="orm-column">BASIC</th>
              <th className="orm-column-1">ADVANCED</th>
              <th className="orm-column-2">ENTERPRISE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ORM Packages</td>
              <td>ORM Packages</td>
              <td>ORM Packages</td>
            </tr>
            <tr>
              <td>12000 INR/165 USD</td>
              <td>24000 INR/330 USD</td>
              <td>35000 INR/480 USD</td>
            </tr>
            <tr>
              <td>EXCLUSIVE OF ALL TAXES</td>
              <td>EXCLUSIVE OF ALL TAXES</td>
              <td>EXCLUSIVE OF ALL TAXES</td>
            </tr>
            <tr>
              <td className="ormsub-heading">CONTENT MARKETING</td>
              <td className="ormsub-heading">CONTENT MARKETING</td>
              <td className="ormsub-heading">CONTENT MARKETING</td>
            </tr>
            <tr>
              <td className="artical">
                Article Submission (500–700 words) - 2 Per Month
              </td>
              <td>Blog Submission - 2 Per Month</td>
              <td>Press Release Submission - 2 Per Month</td>
            </tr>
            <tr>
              <td>Blog Submission - 1 Per Month</td>
              <td className="artical">
                Article Submission (500–700 words) - 4 Per Month
              </td>
              <td className="artical">
                Article Submission (500–700 words) - 6 Per Month
              </td>
            </tr>
            <tr>
              <td>Press Release Submission - 2 Per Month</td>
              <td>Blog Submission - 2 Per Month</td>
              <td className="artical">
                Press Release Submission (300–500 words) - 2 Per Month
              </td>
            </tr>
            <tr>
              <td className="ormsub-heading">Link Building</td>
              <td className="ormsub-heading">Link Building</td>
              <td className="ormsub-heading">Link Building</td>
            </tr>
            <tr>
              <td> Local Citation* – 5 Per Month</td>
              <td> Local Citation* – 10 Per Month</td>
              <td> Local Citation* – 15 Per Month</td>
            </tr>
            <tr>
              <td> Social Sharing- 25 Per Month</td>
              <td> Social Sharing- 40 Per Month</td>
              <td> Social Sharing- 60 Per Month</td>
            </tr>
            <tr>
              <td> Local Classifieds* – 5 Per Month</td>
              <td> Local Classifieds* – 10 Per Month</td>
              <td> Local Classifieds* – 15 Per Month</td>
            </tr>
            <tr>
              <td> GMB Posting – 5 Per Month</td>
              <td> GMB Posting – 10 Per Month</td>
              <td> GMB Posting – 15 Per Month</td>
            </tr>
            <tr>
              <td className="ormsub-heading">
                YOUTUBE (ALL THE VIDEOS WILL BE PROVIDED BY CLIENT)
              </td>
              <td className="ormsub-heading">
                YOUTUBE (ALL THE VIDEOS WILL BE PROVIDED BY CLIENT)
              </td>
              <td className="ormsub-heading">
                YOUTUBE (ALL THE VIDEOS WILL BE PROVIDED BY CLIENT)
              </td>
            </tr>
            <tr>
              <td> Video Upload</td>
              <td> Video Upload – 2 Per Month</td>
              <td> Video Upload – 4 Per Month</td>
            </tr>
            <tr>
              <td> Video Optimization</td>
              <td> Video Optimization – 2 Per Month</td>
              <td> Video Optimization – 4 Per Month</td>
            </tr>
            <tr>
              <td className="ormsub-heading">FACEBOOK</td>
              <td className="ormsub-heading">FACEBOOK</td>
              <td className="ormsub-heading">FACEBOOK</td>
            </tr>
            <tr>
              <td> Page Creation</td>
              <td> Page Creation</td>
              <td> Page Creation</td>
            </tr>
            <tr>
              <td> Profile Pic Creation</td>
              <td> Profile Pic Creation</td>
              <td> Profile Pic Creation</td>
            </tr>
            <tr>
              <td> Cover Pic Creation</td>
              <td> Cover Pic Creation</td>
              <td> Cover Pic Creation</td>
            </tr>
            <tr>
              <td> Posting</td>
              <td> Posting – 2 Per week</td>
              <td> Posting – 4 Per week</td>
            </tr>
            <tr>
              <td className="ormsub-heading">LINKEDIN</td>
              <td className="ormsub-heading">LINKEDIN</td>
              <td className="ormsub-heading">LINKEDIN</td>
            </tr>
            <tr>
              <td> Page Creation</td>
              <td> Page Creation</td>
              <td> Page Creation</td>
            </tr>
            <tr>
              <td> Profile Pic Creation</td>
              <td> Profile Pic Creation</td>
              <td> Profile Pic Creation</td>
            </tr>
            <tr>
              <td> Cover Pic Creation</td>
              <td> Cover Pic Creation</td>
              <td> Cover Pic Creation</td>
            </tr>
            <tr>
              <td> Posting</td>
              <td> Posting</td>
              <td> Posting </td>
            </tr>
            <tr>
              <td className="ormsub-heading">TWITTER</td>
              <td className="ormsub-heading">TWITTER</td>
              <td className="ormsub-heading">TWITTER</td>
            </tr>
            <tr>
              <td> Page Creation</td>
              <td> Page Creation</td>
              <td> Page Creation</td>
            </tr>
            <tr>
              <td> Profile Pic Creation</td>
              <td> Profile Pic Creation</td>
              <td> Profile Pic Creation</td>
            </tr>
            <tr>
              <td> Cover Pic Creation</td>
              <td> Cover Pic Creation</td>
              <td> Cover Pic Creation</td>
            </tr>
            <tr>
              <td> Tweet</td>
              <td> Tweet</td>
              <td> Tweet- 4 Tweet Per Week</td>
            </tr>
            <tr>
              <td className="ormsub-heading">SUPPORT</td>
              <td className="ormsub-heading">SUPPORT</td>
              <td className="ormsub-heading">SUPPORT</td>
            </tr>
            <tr>
              <td> Email</td>
              <td> Email</td>
              <td> Email</td>
            </tr>
            <tr>
              <td> Chat</td>
              <td> Chat</td>
              <td> Chat</td>
            </tr>
            <tr>
              <td> Call</td>
              <td> Call</td>
              <td> Call</td>
            </tr>
            <tr>
              <td className="ormsub-heading">REPORTING</td>
              <td className="ormsub-heading">REPORTING</td>
              <td className="ormsub-heading">REPORTING</td>
            </tr>
            <tr>
              <td> Monthly</td>
              <td> Monthly</td>
              <td> Monthly</td>
            </tr>
            <tr>
              <td> Weekly</td>
              <td> Weekly</td>
              <td> Weekly</td>
            </tr>
          </tbody>
        </table>
        <div className="orm-button">
          <Link to="/contactus">
            <button className="learn-more-button-orm">Get Quote</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrmTable;
