import React, { Component } from "react";
import "./index.css";
import pods1 from "../images/pods1.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import pods3 from "../images/pods3.png";
import Header from "../navbar";
import Footer from "../Footer";

class Pods extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="pods-first-section-background-color-akhila">
          <div className="pods-first-section-mini-content-container">
            <h1 className="pods-first-section-heading">Understand Our Pods</h1>
            <p className="pods-first-section-paragraph">
              We supply Mendix development teams known as Pods. Our team was put
              together from a diversity of backgrounds. Each Pod has between two
              and five developers.
            </p>
            <Link to="/contactus">
              <button className="pods-first-section-button">Hire a Pod</button>
            </Link>
          </div>
        </div>
        <div className="pods-second-section">
          <AiOutlineThunderbolt className="pods-react-icon-size" />
          <h1 className="pods-second-section-heading">Minimize Your Risk</h1>
          <p className="pods-second-section-paragraph">
            IT leaders face delivery risk when senior leaders leave your
            project. Unfortunately, finding successors for such jobs takes time
            and effort. If such jobs are not filled in a timely manner, your
            project's delivery is jeopardized.
          </p>
        </div>
        <div className="pods-third-section-container">
          <img className="pods-image-third-section" src={pods1} alt="" />
          <div className="pods-third-sub-section">
            <BsFillPersonFill className="pods-react-icon-size" />
            <h1 className="pods-second-section-heading">Our Pods</h1>
            <p className="pods-second-section-paragraph">
              Reduce risk by making sure team members can step up if someone
              leaves.
            </p>
            <p className="pods-third-section-paragraph">
              We are native English speakers operating in EU time zones. As an
              ISO 27001 certified company, we're committed to excellence. Pods
              can connect with other pods for technical expertise and input if
              needed.
            </p>
            <Link to="/contactus">
              <button className="our-pods-section-hire-button">
                Hire a Pod
              </button>
            </Link>
          </div>
        </div>
        <div className="pods-fourth-section">
          <h1 className="pods-fourth-section-heading">Our Levels</h1>
          <p className="pods-fourth-section-paragraph">
            Mendix developers are ranked under multiple levels in Comotion
          </p>
          <div className="pods-fourth-section-container">
            <div className="pods-fourth-sub-cards-levels">
              <AiOutlineThunderbolt className="pods-react-icon-size" />
              <h1 className="pods-fourth-section-sub-heading">Our Levels</h1>
              <p className="pods-fourth-section-sub-paragraph">
                Mendix developers are ranked under multiple levels in Comotion
              </p>
              <div className="pods-fourth-section-sub-container">
                <div className="pods-fourth-section-sub-cards">
                  <p className="pods-fourth-section-sub-paragraph">Architect</p>
                </div>
                <div className="pods-fourth-section-sub-cards">
                  <p className="pods-fourth-section-sub-paragraph">Craftsman</p>
                </div>
                <div className="pods-fourth-section-sub-cards">
                  <p className="pods-fourth-section-sub-paragraph">Qualified</p>
                </div>
                <div className="pods-fourth-section-sub-cards">
                  <p className="pods-fourth-section-sub-paragraph">
                    Sr. Team Player
                  </p>
                </div>
                <div className="pods-fourth-section-sub-cards">
                  <p className="pods-fourth-section-sub-paragraph">
                    Team Player
                  </p>
                </div>
                <div className="pods-fourth-section-sub-cards">
                  <p className="pods-fourth-section-sub-paragraph">
                    Apprentice
                  </p>
                </div>
                <div className="pods-fourth-section-sub-cards">
                  <p className="pods-fourth-section-sub-paragraph">Intern</p>
                </div>
              </div>
            </div>
            <hr className="pods-horizontal-line" />
            <div className="pods-fourth-sub-cards-levels">
              <AiOutlineThunderbolt className="pods-react-icon-size" />
              <h1 className="pods-fourth-section-sub-heading">
                Industry Levels
              </h1>
              <p className="pods-fourth-section-sub-paragraph">
                How our roles map to the traditional levels of developers
                defined by the industry
              </p>
              <div className="pods-fourth-section-sub-container">
                <div className="pods-fourth-section-sub-cards2">
                  <p className="pods-fourth-section-sub-paragraph">senior</p>
                </div>
                <div className="pods-fourth-section-sub-cards2">
                  <p className="pods-fourth-section-sub-paragraph">Mid</p>
                </div>
                <div className="pods-fourth-section-sub-cards2">
                  <p className="pods-fourth-section-sub-paragraph">Junior</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="pods-fourth-sub-cards-levels">
              <AiOutlineThunderbolt className="pods-react-icon-size" />
              <h1 className="pods-fourth-section-sub-heading">
                Certification Levels
              </h1>
              <p className="pods-fourth-section-sub-paragraph">
                How our ranks map against Mendix certifications
              </p>
              <div className="pods-fourth-section-sub-container">
                <div className="pods-fourth-section-sub-cards3">
                  <p className="pods-fourth-section-sub-paragraph">Expert</p>
                </div>
                <div className="pods-fourth-section-sub-cards3">
                  <p className="pods-fourth-section-sub-paragraph">Advanced</p>
                </div>
                <div className="pods-fourth-section-sub-cards3">
                  <p className="pods-fourth-section-sub-paragraph">
                    Intermediate
                  </p>
                </div>
                <div className="pods-fourth-section-sub-cards3">
                  <p className="pods-fourth-section-sub-paragraph">Beginner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pods-first-section-background-color-akhila1">
          <h1 className="pods-first-section-heading">Select a Pod</h1>
          <p className="pods-first-section-paragraph">
            Each pod is headed by a craftsman and consists of at least one
            dedicated Mendix developer for your project.
          </p>
          <div className="pods-fourth-section-container">
            <div className="pods-select-pod-section">
              <BsFillPersonFill className="pods-select-pod-section-icon" />
              <h1 className="pods-select-pod-section-heading">Small Pod</h1>
              <p className="pods-select-pod-section-paragraph">
                Small pods are designed for stabilizing existing projects and
                managing support
              </p>
              <div>
                <div>
                  <p className="pods-select-pod-section-sub-heading">
                    Craftsman
                  </p>
                  <p className="pods-select-pod-section-sub-paragraph">50%</p>
                </div>
                <div>
                  <p className="pods-select-pod-section-sub-heading">
                    Team Player
                  </p>
                  <p className="pods-select-pod-section-sub-paragraph">
                    dedicated
                  </p>
                </div>
                <Link to="/contactus">
                  <button
                    className="pods-select-section-button"
                    style={{ marginTop: "150px" }}
                  >
                    Hire a small Pod
                  </button>
                </Link>
              </div>
            </div>
            <div className="pods-select-pod-section">
              <BsFillPersonFill className="pods-select-pod-section-icon" />
              <h1 className="pods-select-pod-section-heading">Medium Pod</h1>
              <p className="pods-select-pod-section-paragraph">
                Medium pods are designed for increasing development capacity
              </p>
              <div>
                <div>
                  <p className="pods-select-pod-section-sub-heading">
                    Craftsman
                  </p>
                  <p className="pods-select-pod-section-sub-paragraph">50%</p>
                </div>
                <div>
                  <p className="pods-select-pod-section-sub-heading">
                    Team Player
                  </p>
                  <p className="pods-select-pod-section-sub-paragraph">
                    dedicated
                  </p>
                </div>
                <div>
                  <p className="pods-select-pod-section-sub-heading">
                    Apprentice
                  </p>
                  <p className="pods-select-pod-section-sub-paragraph">
                    dedicated
                  </p>
                </div>
                <Link to="/contactus">
                  <button className="pods-select-section-button">
                    Hire a Medium Pod
                  </button>
                </Link>
              </div>
            </div>
            <div className="pods-select-pod-section">
              <BsFillPersonFill className="pods-select-pod-section-icon" />
              <h1 className="pods-select-pod-section-heading">Large Pod</h1>
              <p className="pods-select-pod-section-paragraph">
                Large Pod Large pods are designed for large-scale deliveries
              </p>
              <div>
                <div>
                  <p className="pods-select-pod-section-sub-heading">
                    Craftsman
                  </p>
                  <p className="pods-select-pod-section-sub-paragraph">50%</p>
                </div>
                <div>
                  <p className="pods-select-pod-section-sub-heading">
                    Team Player
                  </p>
                  <p className="pods-select-pod-section-sub-paragraph">
                    dedicated
                  </p>
                </div>
                <div>
                  <p className="pods-select-pod-section-sub-heading">
                    Apprentice
                  </p>
                  <p className="pods-select-pod-section-sub-paragraph">
                    dedicated
                  </p>
                </div>
                <Link to="/contactus">
                  <button className="pods-select-section-button">
                    Hire a Large Pod
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pods-third-section-container">
          <img
            className="pods-image-third-section"
            src={pods3}
            alt=""
            style={{ marginTop: "20px" }}
          />
          <div className="pods-third-sub-section">
            <BsFillPersonFill className="pods-react-icon-size" />
            <h1 className="pods-second-section-heading">
              The Cape Wine Experience
            </h1>
            <p className="pods-second-section-paragraph">
              South Africa not only offers great developers, we also offer great
              wines.
            </p>
            <p className="pods-third-section-paragraph">
              Join us for a regular Cape Town wine tasting experience over a
              presentation over the latest developments in the Mendix world and
              how our pods are positioned to help your project succeed. Join our
              community of fellow Mendix users.
            </p>
            <Link to="/contactus">
              {" "}
              <button className="pods-get-list-button">Get on the List</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Pods;
