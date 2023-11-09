import { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../navbar";
import Footer from "../Footer";
import { BeatLoader } from "react-spinners";
import ploarionlifecycle from "./ploarionlifecycle.json";
import Lottie from "lottie-react";

class ResellerPolarian extends Component {
  state = { loading: true };

  componentDidMount() {
    // Simulate an API call or any async operation
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.setState({ loading: false }); // Set loading to false when your data is ready
    }, 500);
  }

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
          <div className="resellar-polarian-main-container container-fluid">
            <div className="siemens-resellar-polarian-card row ">
              <div className="reseller-polarian-side-description col-12 col-md-6">
                <div className="resellar-polarian-card-description">
                  <h1 className="resellar-polarian-card-description-heading">
                    SIEMENS POLARION
                  </h1>
                  <p className="resellar-polarian-card-description-para">
                    LGS is Siemens Polarion Channel partner in India.
                  </p>
                  <p className="resellar-polarian-card-description-para">
                    LGS have been working in Polarion ALM space since 2014 even
                    before Siemens acquisition of Polarion.
                  </p>
                  <p className="resellar-polarian-card-description-para">
                    We have been delivering flawless services across global to
                    various industries such as Automotive, Aerospace, Oil & Gas
                    and Life Science.
                  </p>
                </div>
              </div>
              <div className="polarianpic-container col-12 col-md-6">
                <img
                  alt="mendixpic"
                  className="polaranpic"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689667771/1_xBu5h-5wTAzLvjvAZw6DZA_fspbjh.webp"
                />


              </div>
            </div>

            <div className="siemens-resellar-polarian-card row d-flex flex-colun">
              <div className="polarian-second-pic-container col-12 col-md-6">
                <img
                  alt="mendixpic"
                  className="polarian-second-pic"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458028/csm_Functional-Safety-automotive_b35b168de7_eu75p1.jpg"
                />
              </div>
              <div className="reseller-polarian-side-description col-12 col-md-6">
                <div className="resellar-polarian-card-description">
                  <h1 className="resellar-polarian-card-description-heading">
                    BENEFITS & VALUE ADDITION OF POLARION
                  </h1>
                  <ul className="labyrinth-offering-unorderedlist-contianer">
                    <li>
                      Achieve synergies across all collaborators with 100%
                      browser-based access to a single data source
                    </li>
                    <li>
                      Increase productivity with intuitive and role-based user
                      interface
                    </li>
                    <li>
                      Achieve better quality and regulatory compliance through
                      end-to-end traceability and automated audit trails
                    </li>
                    <li>
                      Adopt modern agile techniques at once or incrementally
                      with out of the box project templates that can be adjusted
                      to your needs
                    </li>
                    <li>
                      Optimize planning, prioritization and release
                      predictability via flexible planning and real-time
                      reporting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resellar-polarian-main-container">
              <div className="row p-3">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card-container">
                    <div className="polarian-card">
                      <div className="img-box">
                        <img
                          src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689920542/SAFe_kiglfu.png"
                          alt="safe"
                          className="img-box-image-polarion"
                        />
                      </div>
                      <div className="content">
                        <h1 className="polarian-resellsr-card-heading">
                          SAFe for Polarion
                        </h1>
                        <p className="polarian-resellar-card-para">
                          Labyrinth has successfully implemented SAFe (Agile
                          Scaled Framework) at several customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card-container">
                    <div className="polarian-card">
                      <div className="img-box">
                        <img
                          src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689920535/medical_s0sgks.png"
                          alt="seo-friendly"
                        />
                      </div>
                      <div className="content">
                        <h1 className="polarian-resellsr-card-heading">
                          Medical Devices
                        </h1>
                        <p className="polarian-resellar-card-para">
                          Labyrinth implemented Polarion solution at Med devices
                          companies and helped them with FDA 21 Part 11, Part
                          820, IEC 62304, ISO 14971 compliance, saved their
                          overall cost by 40% to 50%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card-container">
                    <div className="polarian-card">
                      <div className="img-box">
                        <img
                          className="chat-image"
                          src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689920528/embeded_bvh4fr.jpg"
                          alt="chat-social"
                        />
                      </div>
                      <div className="content">
                        <h1 className="polarian-resellsr-card-heading">
                          Embedded Systems
                        </h1>
                        <p className="polarian-resellar-card-para">
                          Automate systems engineering and develop quality
                          software and achieve high efficiency and ROI with
                          Polarion Application Life Cycle Management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card-container">
                    <div className="polarian-card">
                      <div className="img-box">
                        <img
                          src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689920519/automotive_jenrnw.png"
                          alt="theme"
                        />
                      </div>
                      <div className="content">
                        <h1 className="polarian-resellsr-card-heading">
                          Automotive
                        </h1>
                        <p className="polarian-resellar-card-para">
                          Achieve ISO 26262, ASPICE and CMMI standards by
                          implementing Polarion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card-container">
                    <div className="polarian-card">
                      <div className="img-box">
                        <img
                          className="chat-image"
                          src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689920499/aerospace_jtyuam.jpg"
                          alt="chat-social"
                        />
                      </div>
                      <div className="content">
                        <h1 className="polarian-resellsr-card-heading">
                          Aerospace
                        </h1>
                        <p className="polarian-resellar-card-para">
                          Polarion offers guaranteed end-to-end traceability for
                          DO-178C, quickly bring your products to market by 50%
                          reduce time with improved quality and safety.
                        </p>
                      </div>
                    </div>
                  </div>
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

export default ResellerPolarian;
