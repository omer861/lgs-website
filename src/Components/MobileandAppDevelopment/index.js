import Header from "../navbar";
import Footer from "../Footer";
import React, { Component } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css";
import { BeatLoader } from "react-spinners";

import "./index.css";

const HoverCardList = [
  {
    id: 1,
    src: "https://www.12grids.com/uploads/blogs/original_cover_images/7-reasons-why-responsive-web-design-is-important-why-you-should-embrace-it-1.png",
    heading: "RESPONSIVE WEBSITES",
    para: "We strive to ensure that your website looks great across different devices and offers best user experience.",
  },
  {
    id: 2,
    src: "https://www.brandignity.com/wp-content/uploads/2016/07/seo-friendly-website-design.jpg",
    heading: "SEO FRIENDLY",
    para: "We can optimize your website to make it SEO friendly and help it reach the top in Google search results.",
  },
  {
    id: 3,
    class: "chat-image",
    src: "https://img.freepik.com/free-vector/chatbot-concept-background-with-mobile-device_23-2147831507.jpg",
    heading: "CHAT & SOCIAL INTEGRATION",
    para: "We promote effective communication between you and your audience by using easy-to-use components",
  },
  {
    id: 4,
    class: "chat-image",
    src: "https://i0.wp.com/www.energise.co.nz/wp-content/uploads/2019/07/browsers.png?resize=640%2C640&ssl=1",
    heading: "Has Cross Browser Compatibility",
    para: "The latest versions of internet browsers have come a long way in making sure that you get a consistent browsing experience.",
  },
  {
    id: 5,
    src: "https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?size=626&ext=jpg&ga=GA1.1.1105777500.1683981584&semt=sph",
    heading: "BLOG INTEGRATION",
    para: "We integrate all your blog post to keep your customers informed about the latest development",
  },
  {
    id: 6,
    src: "https://static.vecteezy.com/system/resources/previews/005/746/564/original/user-experience-design-gradient-icon-for-dark-theme-product-integration-process-support-user-behavior-thin-line-color-symbol-modern-style-pictogram-isolated-outline-drawing-vector.jpg",
    heading: "CUSTOMIZE / THEME INTEGRATION",
    para: "We make sure to adjust the style and aesthetic value that suit your brand in the best possible manner",
  },
  {
    id: 7,
    class: "chat-image",
    src: "https://cdn-icons-png.flaticon.com/512/1484/1484799.png",
    heading: "INQUIRY FORM INTEGRATION",
    para: "We allow your visitors to make a general inquiry about your products or services without efforts",
  },
  {
    id: 8,
    class: "chat-image",
    src: "https://smartinternz.com/assets/2023/Fac_buidathon/cyber-security.png",
    heading: "Must Have Top Security",
    para: "Robust website security fortifies your digital presence,safeguarding users and data from potential threats,providing peace of mind",
  },
];

class WebMobile extends Component {
  state = { loading: true };
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => {
      this.setState({ loading: false }); // Set loading to false when your data is ready
    }, 500);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".web-reval");
    for (var i = 0; i < revals.length; i++) {
      var windowheight = window.innerHeight;
      var revaltop = revals[i].getBoundingClientRect().top;
      var revalpoint = 150;
      if (revaltop < windowheight - revalpoint) {
        revals[i].classList.add("active");
      } else {
        revals[i].classList.remove("active");
      }
    }
  };
  render() {
    const { loading } = this.state;
    return (
      <>
        <Header />
        {loading ? (
          <div className="spinner">
            <BeatLoader size={20} color={"#123abc"} loading={loading} />
          </div>
        ) : (
          <div className="container-fluid web-mobile-bg-colour">
            <div className="row p-5">
              <h1 className="text-center web-mobile-heading ">
                Web & Mobile App Development
              </h1>

              <div className="col-12 col-md-12 col-lg-7 order-2 order-md-1 p-3 mt-5 ">
                <p className="web-mobile-paragraph">
                  Labyrinth Global Solutions is one of the best Website
                  Development Companies in India. We have a team of professional
                  experts having years of experience in this field . Our
                  specialised team can provide custom web solutions to establish
                  your business online.
                </p>
                <div className="d-flex web-mobile-list-container">
                  <ul>
                    <li className="web-mobile-list">
                      <TiTick className="web-mobile-tick" />
                      Custom Web Development Services
                    </li>
                    <li className="web-mobile-list">
                      {" "}
                      <TiTick className="web-mobile-tick" />
                      Mobile Optimized Web Development
                    </li>
                    <li className="web-mobile-list">
                      {" "}
                      <TiTick className="web-mobile-tick" /> Intranet
                      Applications
                    </li>
                  </ul>
                  <ul>
                    <li className="web-mobile-list">
                      {" "}
                      <TiTick className="web-mobile-tick" />
                      B2B Portal
                    </li>
                    <li className="web-mobile-list">
                      {" "}
                      <TiTick className="web-mobile-tick" />
                      User-Friendly Interface
                    </li>
                    <li className="web-mobile-list">
                      <TiTick className="web-mobile-tick" />
                      Responsive Website
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-5 order-1 order-md-2 web-mobile-images-container ">
                <img
                  className="first-image"
                  src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
                  alt="web-app"
                />{" "}
              </div>
            </div>
            <div className="row p-3">
              <h1 className="text-center web-mobile-heading ">
                Web Development Features
              </h1>
              {HoverCardList.map((eachHoverImage) => (
                <div key={eachHoverImage.id} className="col-12 col-md-6 col-lg-3 web-reval">
                  <div className="card-container">
                    <div className="card">
                      <div className="img-box">
                        <img
                          className={eachHoverImage.class}
                          src={eachHoverImage.src}
                          alt={`mobile${eachHoverImage.id}`}
                        />
                      </div>
                      <div className="content">
                        <h1 className="web-mobile-card-heading">
                          {eachHoverImage.heading}
                        </h1>
                        <p className="para">{eachHoverImage.para}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row p-3 web-reval">
              <h1 className="text-center web-mobile-heading ">Services</h1>
              <div className="col-12 col-md-12 col-lg-7 order-2 order-md-1 order-lg-1  web-mobile-card">
                <h1 className="web-mobile-heading ">Web Design & Web Assets</h1>
                <ul>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    E-commerce applications
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Custom Mobile applications on HTML5.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Distributed applications
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Windows and Unix applications.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Client/server applications.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Desktop applications.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    ERP solutions.
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 col-lg-5 order-1 order-md-2 order-lg-2 web-mobile-images-container ">
                <img
                  className="web-mobile-image"
                  src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?size=626&ext=jpg&ga=GA1.2.1105777500.1683981584&semt=ais"
                  alt="first"
                />
              </div>
            </div>
            <div className="row p-3 web-reval">
              <div className="col-sm-12 col-md-12 col-lg-5 order-2 order-md-2 order-lg-1 web-mobile-images-container ">
                <img
                  className="web-mobile-image"
                  alt="second"
                  src="https://img.freepik.com/premium-vector/young-man-works-mobile-application-data-collection-analysis-flat-character-concept-web-design_130740-686.jpg?size=626&ext=jpg&ga=GA1.1.1105777500.1683981584&semt=ais"
                />
              </div>
              <div className="col-12 col-md-12 col-lg-7 order-1 order-md-1 order-lg-2 web-mobile-card">
                <h1 className="web-mobile-heading ">
                  Application Re-Engineering
                </h1>
                <ul>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Perform source application portfolio analysis / reverse
                    engineering to create use cases for target application.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Forward engineer or build in target technologies using the
                    latest application development products and tools.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Understand the challenges in legacy applications and Re-use
                    components and tools (if any) for the new applications.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row p-3 web-reval">
              <div className="col-12 col-md-12 col-lg-5 order-2 order-md-2 web-mobile-images-container ">
                <img
                  className="web-mobile-image"
                  alt="third"
                  src="https://img.freepik.com/free-vector/software-development-app-optimization-programming-mobile-content-concept_335657-368.jpg?size=626&ext=jpg&ga=GA1.2.1105777500.1683981584&semt=ais"
                />
              </div>
              <div className="col-12 col-md-7 col-lg-7 order-1 order-md-1 web-mobile-card">
                <h1 className="web-mobile-heading ">
                  Mobile Application Development
                </h1>
                <ul>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Mobile apps for iOS and Android phones.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Custom Mobile applications on HTML5.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    HTML5 responsive websites.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Web-based mobile applications.
                  </li>
                  <li className="web-mobile-list">
                    <BsArrowRightShort className="web-mobile-arrow" />
                    Responsive design, native applications (Games,
                    entertainment,business, Payment transferring applications,
                    etc).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </>
    );
  }
}

export default WebMobile;
