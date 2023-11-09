import React, { Component } from "react";
import salesforceanimation from "./salesforceanimation.json";
import Lottie from "lottie-react";
import Header from "../navbar";
import Footer from "../Footer";
import { BeatLoader } from "react-spinners";
import "./index.css";

const SalesForceList = [
  {
    id: 1,
    title: "Expertise and Guidance",
    src: "https://png.pngtree.com/png-vector/20190622/ourmid/pngtree-checklistcheckexpertiselistclipboard-flat-color-icon-vec-png-image_1490531.jpg",
  },
  {
    id: 2,
    title: "Seamless Implementation",
    src: "https://www.pngall.com/wp-content/uploads/4/Solution-PNG-Images.png",
  },
  {
    id: 3,
    title: "Training and Support",
    src: "https://img.freepik.com/premium-vector/isometric-flat-3d-illustration-concept-businessman-business-development-training_18660-4828.jpg",
  },
  {
    id: 4,
    title: "Value-Added Services",
    src: "https://w7.pngwing.com/pngs/432/490/png-transparent-value-added-trade-service-flags-text-service-logo.png",
  },
  {
    id: 5,
    title: "Long-Term Partnership",
    src: "https://png.pngtree.com/png-clipart/20220812/ourmid/pngtree-handshake-partnership-deal-png-image_6105842.png",
  },
  {
    id: 6,
    title: "Data-Driven Insights",
    src: "https://cdn-icons-png.flaticon.com/512/2620/2620254.png",
  },
];

class SalesForce extends Component {
  state = {loading: true}
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
      // Simulate an API call or any async operation
      setTimeout(() => {
        this.setState({ loading: false }); // Set loading to false when your data is ready
      }, 500); // Simulating a 2-second delay

  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".salesforce-reval");
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
    const {loading} = this.state
    return (
      <>
        <Header />
        {loading ? (
          <div className="spinner">
            <BeatLoader size={20} color={"#123abc"} loading={loading} />
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row p-5 salesforce-bg-image">
              <div className="col-12 salesforce-content-container">
                <h1 className="salesforce-banner-heading">
                  Sales<span style={{ color: "#ffffff" }}>Force</span>
                </h1>
                <h3 className="salesforce-banner-heading-2">
                  Experience the Power of Salesforce with Labyrinth Global
                  Solutions
                </h3>
              </div>
            </div>
            <div className="row  salesforce-reval p-5 ">
              <div className="col-md-6 col-12">
                <h1 className="salesforce-heading">SalesForce</h1>
                <p className="salesforce-paragraph">
                  Welcome to Labyrinth Global Solutions, your premier provider
                  of Salesforce Industries solutions. We specialize in
                  leveraging the power of Salesforce Industries to help
                  businesses transform their operations, drive growth, and
                  deliver exceptional customer experiences.
                </p>
                <p className="salesforce-paragraph">
                  We provide businesses with access to the industry-leading
                  customer relationship management (CRM) platform, empowering
                  organizations to enhance their sales, marketing, and customer
                  support processes.
                </p>
                <p className="salesforce-paragraph">
                  Unlock the full potential of your business with Salesforce,
                  implemented and supported by Labyrinth Global Solutions.
                  Contact us today to schedule a consultation and discover how
                  Salesforce can revolutionize your sales, marketing, and
                  customer support processes.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <Lottie
                  loop={true}
                  animationData={salesforceanimation}
                  className="animation-image"
                />
              </div>
            </div>

            <div className="row p-5">
              <h1 className="salesforce-heading text-center">
                LABYRINTH OFFERING
              </h1>
              {SalesForceList.map((eachSale) => (
                <div key={eachSale.title} className="col-md-6 col-12 col-lg-4 my-5 d-flex justify-content-center salesforce-reval">
                  <div className="sales-box sales-dark-graybg p-4 sales-radius5">
                    <figure>
                      {" "}
                      <div className="sales-img-block sales-bgdarkblue">
                        <img
                          className="polarian-card-image-2"
                          src={eachSale.src}
                          alt={`salesforce ${eachSale.title}`}
                          width="100"
                          height="100"
                        />
                      </div>
                      <figcaption>
                        <div className="fs-18 text-uppercase my-3 polarian-alm-card-heading text-center">
                          {eachSale.title}
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <Footer />
      </>
    );
  }
}

export default SalesForce;
