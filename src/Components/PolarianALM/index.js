import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../navbar";
import Footer from "../Footer";
import "./index.css";
import { BeatLoader } from "react-spinners";


const PolarianAlmList = [
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/512/4768/4768975.png",
    title: "Installation, upgrades and maintenance of Polarion",
    height: 90,
    width: 90,
  },
  {
    id: 2,
    src: "https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-implementation-flat-icon-vector-png-image_6701398.png",
    title: "Implementation (Large & Small)",
    height: 110,
    width: 110,
  },
  {
    id: 3,
    src: "https://missdetails.com/wp-content/uploads/2022/04/preparing-for-brand-rollout.jpg",
    title: "Roll Outs",
    height: 100,
    width: 100,
  },
  {
    id: 4,
    src: "https://w7.pngwing.com/pngs/500/498/png-transparent-application-programming-interface-representational-state-transfer-web-api-computer-software-hackathon-api-icon-logo-computer-program-computer-programming-thumbnail.png",
    title: "Integration",
    height: 110,
    width: 110,
  },
  {
    id: 5,
    src: "https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-plugin-icon-connect-and-disconnect-concept-png-image_4703328.png",
    title: "Custom Developed Plugins",
    height: 110,
    width: 110,
  },
  {
    id: 6,
    src: "https://www.pngall.com/wp-content/uploads/3/Report.png",
    title: "Custom Developed Reports",
    height: 100,
    width: 100,
  },
];

class Polarian extends Component {
  state = {loading:true} 
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
    var revals = document.querySelectorAll(".polarian-alm-reval");
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
          <div className="container-fluid polarian-alm-bg-colour">
            <div className="row polarain-alm-first-page plarian-alm-reval p-4">
              <div className="col-12 col-md-7">
                <h1 className="polarian-alm-heading p-3">POLARION ALM</h1>
                <p className="polarian-alm-paragraph">
                  Labyrinth brings 25+ years of application life cycle
                  management experience and catering to 100’s of client across
                  the ocean.
                </p>
                <p className="polarian-alm-paragraph">
                  We have been working with cutting edge technologies over the
                  several years and have deployed successful and proven
                  solutions to Automotive, Medical Devices, ESP, Pharmaceutical
                  industries.
                </p>
                <p className="polarian-alm-paragraph">
                  We developed custom plugins, custom reports, custom developed
                  servlets by leveraging Polarion’s power reporting engine ,
                  Software Development Kit, SOAP, OSLC
                </p>
              </div>
              <div className="col-12 col-md-5 mb-4 polarian-image-container">
                <img
                  src="https://miro.medium.com/v2/resize:fit:600/1*xBu5h-5wTAzLvjvAZw6DZA.png"
                  alt="polarian"
                  className="polarian-home"
                />
              </div>
            </div>
            <div className="row p-5">
              <h1 className="polarian-alm-heading text-center">
                LABYRINTH OFFERING
              </h1>
              {PolarianAlmList.map((eachPolarian) => (
                <div className="col-md-6 col-12 col-lg-4 d-flex justify-content-center my-5 polarian-alm-reval ">
                  <div className="feature-box dark-graybg p-4 radius5">
                    <figure>
                      {" "}
                      <div className="img-block bgdarkblue">
                        <img
                          className="polarian-card-image-2"
                          src={eachPolarian.src}
                          alt={`eachPolarian ${eachPolarian.id}`}
                          width={eachPolarian.width}
                          height={eachPolarian.height}
                        />
                      </div>
                      <figcaption>
                        <div className="fs-18 text-uppercase my-3 polarian-alm-card-heading">
                          {eachPolarian.title}
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

export default Polarian;
