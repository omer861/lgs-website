import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../navbar";

const WebsiteDevelopment = () => {
  return (
    <>
      <Header />
      <div className="web-development-main-container">
        <h1 className="web-development-heading">Website Development</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th className="web-development-column">STARTUP</th>
                <th className="web-development-column-1">SMALL BUSINESS</th>
                <th className="web-development-column-2">ECOMMERCE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Development Package</td>
                <td>Website Development Package</td>
                <td>Website Development Package</td>
              </tr>
              <tr>
                <td> Upto 5 Pages/td</td>
                <td>10 Pages</td>
                <td>Up to 50 Products</td>
              </tr>
              <tr>
                <td>Logo</td>
                <td> Logo</td>
                <td> Logo</td>
              </tr>

              <tr>
                <td>Slider</td>
                <td>Slider</td>
                <td> Contact Form – 3</td>
              </tr>

              <tr>
                <td>Dynamic Website</td>
                <td>Dynamic Website</td>
                <td>Content – Free</td>
              </tr>

              <tr>
                <td> Domain-1st Year Free</td>
                <td> Domain-1st Year Free</td>
                <td>300 Rs/Extra Page</td>
              </tr>

              <tr>
                <td>Hosting Free For 1st Year</td>
                <td>Hosting Free For 1st Year</td>
                <td>WhatsApp Chat Integration</td>
              </tr>
              <tr>
                <td> 2 Email – 500 MB Quota Each</td>
                <td> 2 Email – 500 MB Quota Each</td>
                <td> Social Media Profiles Integration</td>
              </tr>

              <tr>
                <td> 1 Contact Form</td>
                <td> 1 Contact Form</td>
                <td> Social Profile Link</td>
              </tr>

              <tr>
                <td> Free SSL</td>
                <td> Free SSL</td>
                <td> WordPress Login Details Will be Given</td>
              </tr>

              <tr>
                <td> Testimonials</td>
                <td> Testimonials </td>
                <td> Payment Gateway</td>
              </tr>

              <tr>
                <td> Gallery Section</td>
                <td> Gallery Section</td>
                <td>Extra Support – 500 Rs/Hour</td>
              </tr>

              <tr>
                <td> Chat Feature</td>
                <td> Chat Feature</td>
                <td> Revisions – 2</td>
              </tr>

              <tr>
                <td> 300 Rs/Extra Page</td>
                <td> 300 Rs/Extra Page</td>
                <td> Call/Email/Chat Support</td>
              </tr>

              <tr>
                <td> Social Profile Link</td>
                <td> 200 Rs – Content/Page</td>
                <td></td>
              </tr>

              <tr>
                <td> Facebook Page Creation</td>
                <td>Social Profile Link</td>
                <td></td>
              </tr>

              <tr>
                <td> Click to Call/Email</td>
                <td> Facebook Page Creation</td>
                <td></td>
              </tr>

              <tr>
                <td> Mobile Responsive</td>
                <td> Click to Call/Email</td>
                <td></td>
              </tr>

              <tr>
                <td> Login Details Will Be Given</td>
                <td>Mobile Responsive</td>
                <td></td>
              </tr>

              <tr>
                <td> Delivery in 3 Days</td>
                <td>Login Details Will Be Given</td>
                <td></td>
              </tr>

              <tr>
                <td>Renewal – 2000 Rs + Domain Price Plus GST</td>
                <td>Delivery in 7 Days</td>
                <td></td>
              </tr>
              <tr>
                <td> Support – 500 Rs/Hr</td>
                <td> Renewal – 3000 Rs + Domain Price Plus GST</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="website-development-button">
            <Link to="/contactus">
              <button className="learn-more-button-website">Get Quote</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebsiteDevelopment;
