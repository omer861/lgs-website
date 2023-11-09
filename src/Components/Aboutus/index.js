import ReactPlayer from "react-player";

import "./index.css";
import aboutus from "../images/AboutUs.jpg";
import mission from "../images/Mission.jpg";
import video from "../images/Core Values.mp4";
import whychoosevideo from "../images/whyChooseLGS.mp4";
import Footer from "../Footer";
import Header from "../navbar";
import { BeatLoader } from "react-spinners";
import { TbTargetArrow } from "react-icons/tb";
import { BiLowVision } from "react-icons/bi";
import { GiJumpAcross } from "react-icons/gi";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import React, { Component } from "react";
import aboutusImage from "../images/aboutusbannerimage.png";
import { icons } from "react-icons";

class about extends Component {
  state = { loading: true };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    // Simulate an API call or any async operation
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.setState({ loading: false }); // Set loading to false when your data is ready
    }, 500);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".aboutus-reval");
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
          <div className="mainContainer">
            <div className="aboutus-banner-container">
              <div className="about-us-banner-heading-container">
                <h1 className="aboutus-banner-heading">
                  Discover Our Story:
                  <br /> Who We Are and What We Stand For
                </h1>
              </div>
              <div className="about-us-banner-img-contianer">
                <img
                  className="aboutus-banner-img"
                  alt="aboutus-banner-image"
                  src={aboutusImage}
                />
              </div>
            </div>
            <div className="aboutUsCard-main-contianer">
              <div className="about-us-quote-main-container">
                <div className="about-us-quote-mini-container">
                  <div className="about-us-quote-description-container">
                    <h5 className="about-us-quote-description-heading">
                      Navigating Digital Transformation​
                    </h5>
                    <p className="about-description">
                      At Labyrinth Global Solutions, we're your trusted partner
                      in digital transformation. With a decade of experience,
                      we've served diverse industries, delivering excellence,
                      on-time solutions, and quality. Our commitment is to
                      empower your digital journey, driving your success, and
                      positioning you for continued growth in the digital age.
                    </p>
                  </div>
                  <div className="about-us-quote">
                    <h3 style={{textAlign: 'center'}}>
                      <BiSolidQuoteAltLeft />
                      Committed to Excellence, Crafting Success, One Client at a
                      Time.
                      <BiSolidQuoteAltRight />
                    </h3>
                  </div>
                </div>
              </div>

              <div className="about-us-cards-main-container aboutus-reval">
                <h1 className="about-us-cards-main-heading">VALUES</h1>
                <div className="about-us-cards-container">
                  <div className="about-us-card-contianer">
                    <div className="about-us-card-reacticon-heading-container">
                      <h3 className="about-us-card-heading">Mission</h3>
                      <div className="about-us-card-react-icon-conatainer">
                        <TbTargetArrow className="about-us-card-react-icon" />
                      </div>
                    </div>
                    <p className="about-us-card-para">
                      At the heart of our mission is a commitment to help
                      businesses thrive in the digital era through top-tier IT
                      services and world-class products.
                    </p>
                  </div>

                  <div className="about-us-card-contianer">
                    <div className="about-us-card-reacticon-heading-container">
                      <h3 className="about-us-card-heading">Vision</h3>
                      <div className="about-us-card-react-icon-conatainer">
                        <BiLowVision className="about-us-card-react-icon" />
                      </div>
                    </div>
                    <p className="about-us-card-para">
                      Our vision is to revolutionize IT, shaping a future where
                      our products and services empower businesses to achieve
                      their highest potential through seamless connectivity and
                      innovation.
                    </p>
                  </div>

                  <div className="about-us-card-contianer">
                    <div className="about-us-card-reacticon-heading-container">
                      <h3 className="about-us-card-heading">Way Forward</h3>
                      <div className="about-us-card-react-icon-conatainer">
                        <GiJumpAcross className="about-us-card-react-icon" />
                      </div>
                    </div>
                    <p className="about-us-card-para">
                      Our primary focus will be on understanding and addressing
                      the unique needs of our customers, ensuring their success
                      through tailored IT services and products.
                    </p>
                  </div>
                </div>
              </div>
              <center>
                <h1 className="thrive-content">
                  Transform with Us. Innovate with Us. Thrive with Us.
                </h1>
              </center>
              <div className="firstcard aboutus-reval">
                <div className="responsive-container about-video-setting react-player">
                  <ReactPlayer url={video} controls playing={true} />
                </div>
                <div>
                  <div>
                    <h1 className="heading">Our Core Values:</h1>
                    <p className="about-description">
                      <span className="sub-heading-aboutpage">Commitment:</span>
                      At the heart of our approach lies a deep commitment to our
                      clients' success. We forge strong partnerships built on
                      trust, transparency, and collaboration. Your goals become
                      our goals, and we work tirelessly to deliver results that
                      exceed expectations.
                    </p>
                  </div>

                  <p className="about-description">
                    <span className="sub-heading-aboutpage">
                      Timely Delivery:
                    </span>
                    We understand that time is of the essence in the fast-paced
                    world of business. Our dedicated teams are driven to deliver
                    solutions within agreed-upon timelines, ensuring that your
                    projects stay on track and achieve the desired outcomes.
                  </p>
                  {/* <p className="about-description">
                    <span className="sub-heading-aboutpage">
                      Quality with Cost-Effective Solutions:
                    </span>
                    We believe that quality should never be compromised, and
                    neither should your budget. Our team of experts leverages
                    their skills and experience to provide high-quality
                    solutions that are also cost-effective, allowing you to
                    maximize value.
                  </p> */}
                </div>
              </div>
              <div className="firstcard1 aboutus-reval">
                <div>
                  <h1 className="heading">Our Services:</h1>
                  <p className="about-description">
                    <span className="sub-heading-aboutpage">
                      Application Lifecycle Management (ALM):
                    </span>{" "}
                    Our ALM solutions streamline the entire software development
                    process, from ideation to deployment and beyond. We help you
                    manage the complexities of development, testing, and release
                    while ensuring the highest standards of quality and
                    efficiency.
                  </p>
                  {/*<p className='about-description'><span className='sub-heading-aboutpage'>Product Lifecycle Management (PLM):</span>With our PLM expertise, we empower your organization to manage product information, collaboration, and innovation seamlessly. From design to end-of-life, our solutions optimize your product development lifecycle.</p>*/}
                  <p className="about-description">
                    <span className="sub-heading-aboutpage">
                      Low-Code Development:{" "}
                    </span>
                    Embrace the power of low-code platforms to rapidly build and
                    deploy applications that meet your unique business needs.
                    Our low-code solutions accelerate development while
                    maintaining flexibility and scalability.
                  </p>
                </div>
                <div className="responsive-container about-video-setting react-player">
                  <ReactPlayer url={whychoosevideo} controls playing={true} />
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </>
    );
  }
}

export default about;
