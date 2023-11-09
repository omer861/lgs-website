import React, { Component } from "react";
import ReactSlick from "../Slider";
import ImageSlider from "../ImageSlider";
import WhyUs from "../Whyus";
import about from "../images/whyusimage.png";
import StartPopup from "../StartPopup";
import HomepageHeader from "../HomePageNavbar";
import Chat from "../chat";
import Services from "../Services";
import { BsArrowRightShort } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import IndustriesPage from "../IndustriesPage";
import TechnologiesPage from "../Technologies";
import Card from "../Card";
import lgshome from "../images/lgsaboutushomei.png";
import Minicards from "../MiniCards";
import { BeatLoader } from "react-spinners";
import Footer from "../Footer";

const Details = [
  {
    id: 1,
    question: "Expertise and Experience",
    answer:
      "LGS specialize in web and mobile app development, which means they have a team of skilled professionals with years of experience in this field. They have the expertise to understand your specific requirements and deliver high-quality solutions. ",
  },
  {
    id: 2,
    question: "Cost-Effectiveness",
    answer:
      "While internal development teams can be costly to maintain, partnering with LGS allows you to access a skilled workforce without the overhead expenses. You pay for the services you need, making it a cost-effective solution.",
  },
  {
    id: 3,
    question: "Full-Service Solutions",
    answer:
      "LGS offer end-to-end services, from concept to design, development, testing, and maintenance. This means you get comprehensive support throughout the entire development lifecycle. ",
  },
  {
    id: 4,
    question: "Customization",
    answer:
      "LGS tailor solutions to meet your specific business needs. They can create custom features, user interfaces, and experiences that align with your brand and target audience.",
  },
  {
    id: 5,
    question: "Faster Time-to-Market",
    answer:
      "With a dedicated team of experts, LGS can develop your web and mobile apps more efficiently. This leads to faster time-to-market, helping you gain a competitive advantage and reach your customers sooner.",
  },
];

class HomePage extends Component {
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
    var revals = document.querySelectorAll(".home-reval");
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
        <div>
          <HomepageHeader />
          {loading ? (
            <div className="spinner">
              <BeatLoader size={20} color={"#123abc"} loading={loading} />
            </div>
          ) : (
            <div>
              <div className="container-fluid">
                <div className="home-page-slider-main-container row">
                  <div className="col-12 col-md-6">
                    <ReactSlick />
                  </div>
                  <div className="col-12 col-md-6">
                    <ImageSlider />
                  </div>
                </div>

                <div className="row p-5">
                  <div className="col-12 col-md-7 home-page-content-container">
                    <h1 className="home-page-heading">About LGS</h1>
                    <h5 className="mb-4 home-page-paragraph">
                      Welcome to the world of innovation and digital excellence!
                      At Labyrinth Global Solutions, we are more than just an IT
                      company; we are your partners in transforming ideas into
                      reality. As pioneers in web and app development, we
                      harness the power of technology to create seamless digital
                      experiences that drive growth and inspire change.
                    </h5>
                    <h4 className="home-page-heading">
                      Industries We are Serving{" "}
                    </h4>
                    <div className="home-page-list-container">
                      <ul>
                        <li className="home-page-list">
                          <TiTick className="home-page-tick" />
                          Health Tech
                        </li>
                        <li className="home-page-list">
                          {" "}
                          <TiTick className="home-page-tick" />
                          Automotive & Transportation
                        </li>
                        <li className="home-page-list">
                          {" "}
                          <TiTick className="home-page-tick" /> Aerospace
                        </li>
                      </ul>
                      <ul>
                        <li className="home-page-list">
                          {" "}
                          <TiTick className="home-page-tick" />
                          Oil & Gas
                        </li>
                        <li className="home-page-list">
                          {" "}
                          <TiTick className="home-page-tick" />
                          Enterprise Agile (SAFE)
                        </li>
                      </ul>
                    </div>
                    <Link to="/contactus">
                      <button className="learn-more-button">
                        Learn More{" "}
                        <BsArrowRightShort className="home-page-arrow" />
                      </button>
                    </Link>
                  </div>
                  <div className="col-12 col-md-5">
                    <img
                      src={lgshome}
                      alt="home-page"
                      className="home-page-image "
                    />
                  </div>
                  <div className="col-12 mincards-container">
                    <Minicards />
                  </div>
                </div>
                <div className="row">
                  <h1 className="text-center home-page-heading">
                    BRIDGING THE GAP BETWEEN BUSINESS AND TECHNOLOGY
                  </h1>
                </div>
                <div className="row">
                  <Services />
                </div>
                <div className="row p-5">
                  <h1 className="home-page-heading text-center">Why Us</h1>
                  <div className="col-12 col-lg-5 mt-3 home-reval about-us-image-container">
                    <img
                      className="home-about-us-image"
                      src={about}
                      alt="why-us"
                    />
                  </div>
                  <div className="col-12 col-lg-7 mt-4 home-reval">
                    <ul className="home-page-why-us-container">
                      {Details.map((eachItem) => (
                        <WhyUs key={eachItem.id} details={eachItem} />
                      ))}
                    </ul>
                  </div>
                  <IndustriesPage />
                  <div className="Technology-mbl-container" id="technologies">
                    <TechnologiesPage />
                  </div>
                  <div className="home-clients" id="clients">
                    <Card />
                  </div>
                </div>
                <StartPopup />
                {/* <Chat /> */}
              </div>
            </div>
          )}
          <Footer />
        </div>
      </>
    );
  }
}

export default HomePage;
