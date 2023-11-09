import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../navbar";
import Footer from "../Footer";
import Services from "../images/services.jpg";
import Rapid from "../images/rapid.png";
import Lottie from "lottie-react";
import salesConsultant from "./salesConsultant.json";
import frontenddevelopment from "../images/frontenddevelopment.jpg";
import backenddevelopment from "../images/backenddevelopment.jpg";
import mobiledevelopment from "../images/mobiledevelopment.jpg";
import softwaredevelopment from "../images/softwaredevelopment.jpg";
import { BeatLoader } from "react-spinners";

import "./index.css";

class Consultant extends Component {
  state = { loading: true };

  componentDidMount() {
    // Simulate an API call or any async operation
    window.scrollTo(0,0);
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
          <div className="cosultant-main-contianer">
            <div className="cosultant-heading-contianer">
              <div className="consultant-data-container">
                <h1 className="consultant-page-main-heading">
                  Discover LGS Consulting Excellence{" "}
                </h1>
                <p className="consultant-description">
                  Our consultants are dedicated to helping our clients overcome
                  challenges and achieve their objectives. They offer unbiased
                  viewpoints and specialized knowledge, working collaboratively
                  and strategically to provide valuable insights that lead to
                  the best solutions. Their commitment to excellence inspires us
                  all to strive for greatness in everything we do.
                </p>
              </div>
              <div>
                <img
                  className="consultant-services-image"
                  alt="services"
                  src={Services}
                />
              </div>
            </div>
            <div>
              <h1 className="consultant-page-main-heading text-center">
                Mendix Solution Consultant
              </h1>
              <p className="consultant-description">
                We had certified rapid, Intermediate, and advanced developers to
                help drive more productive and collaborative development,
                enabling organizations to build applications that meet specific
                customer needs within the framework.
              </p>
            </div>
            <div className="mendix-cards-container">
              <div className="mendix-card">
                <img className="mendix-icon" src={Rapid} />
                <h6 className="consultant-cards-headings">Mendix Rapid</h6>
                <p className="consultant-cards-description">
                  Rapid developers specialize in building and deploying
                  applications quickly, without getting into complex coding or
                  advanced features. They prioritize speed and agility, aiming
                  to create functional applications with minimal effort and
                  coding.
                </p>
              </div>
              <div className="mendix-card">
                <img className="mendix-icon" src={Rapid} />
                <h6 className="consultant-cards-headings">
                  Mendix Intermediate
                </h6>
                <p className="consultant-cards-description">
                  Intermediate developers possess a greater understanding of the
                  platform, having progressed beyond initial stages of
                  developing simple applications. They can build more complex
                  applications, leveraging the platform's capabilities to
                  include custom logic
                </p>
              </div>
              <div className="mendix-card">
                <img className="mendix-icon" src={Rapid} />
                <h6 className="consultant-cards-headings">Mendix Advanced</h6>
                <p className="consultant-cards-description">
                  Mendix advanced developers have progressed beyond the basics
                  and are proficient in using advanced features and techniques
                  to create innovative solutions. Our developers can implement
                  complex business logic, workflows, and decision-making.
                </p>
              </div>
            </div>
            <div>
              <h1 className="consultant-page-main-heading text-center">
                Polarion Solution Consultant
              </h1>
              <p className="consultant-description">
                Polarion ALM is an enterprise-level application lifecycle
                management (ALM) tool that helps organizations manage the entire
                software development lifecycle, from requirements gathering to
                deployment and maintenance. It provides a unified platform for
                teams to collaborate on requirements, design, development,
                testing, and deployment.
              </p>

              <h2 className="consultant-side-headings">Polarion Developers</h2>
              <p className="consultant-description">
                Our team of experts in Polarion development plays a crucial role
                in customizing, implementing, and optimizing software
                development and testing processes for organizations. We tailor
                the Polarion platform to meet the specific needs of each
                organization by configuring work items, workflows, fields,
                templates, and dashboards to match their software development
                processes and methodologies.
              </p>
            </div>
            <div className="mendix-cards-container">
              <div className="mendix-card">
                <img className="mendix-icon" src={Rapid} />
                <h6 className="consultant-cards-headings">Configuration</h6>
                <p className="consultant-cards-description">
                  Our polarion developers play a crucial role in working with
                  this platform to customize, implement, and optimize software
                  development and testing processes within organizations. They
                  customize the Polarion platform to align with an
                  organization's specific needs.
                </p>
              </div>
              <div className="mendix-card">
                <img className="mendix-icon" src={Rapid} />
                <h6 className="consultant-cards-headings">Customization</h6>
                <p className="consultant-cards-description">
                  Through customization, the client’s experience with the
                  software will help the requirement goals more efficiently. We
                  follow customization steps where we gather requirements,
                  objects based on our client’s requirements. Engage in
                  discussions with key stakeholders to identify the specific
                  features
                </p>
              </div>
              <div className="mendix-card">
                <img className="mendix-icon" src={Rapid} />
                <h6 className="consultant-cards-headings">Integration</h6>
                <p className="consultant-cards-description">
                  We not only configure Polarion ALM, but also integrate it with
                  other tools. Our Polarion developers conduct a thorough
                  evaluation of your organization's needs and select the
                  integrations that will provide the most benefits. We will
                  continuously improve the customization.
                </p>
              </div>
            </div>
            <h1 className="consultant-page-main-heading text-center">
              Salesforce Solution Consultant
            </h1>
            <div className="salesconsultant-main-container">
              <div>
                <Lottie
                  className="salesConsultant-animation"
                  animationData={salesConsultant}
                />
              </div>
              <div className="salesconsultant-data-container">
                <p className="consultant-description">
                  Salesforce empowers clients to build stronger customer
                  relationships, optimize their operations, and innovate in
                  today’s fast-paced business landscape. It helps clients to
                  focus on what matters most: delivering value to their
                  customers and driving business success. At LGS, we have a team
                  of certified experts in Sales Force Administration and
                  Development. Our professionals possess the necessary expertise
                  to effectively manage and configure the Salesforce platform to
                  meet the specific needs of any organization.
                </p>
                <h5 className="consultant-quoutes">
                  "Guiding Success in the Cloud: Your Trusted Salesforce
                  Consulting Partner for Business Growth"
                </h5>
              </div>
            </div>
            <h1 className="consultant-page-main-heading text-center">
              Conventional Development Consultant
            </h1>
            <div className="consultant-frontend-main-contianer consultant-frontend-main-mbl-contianer">
              <div className="consultant-data-container">
                <h2 className="consultant-side-headings">
                  Frontend Developers
                </h2>

                <p className="consultant-description">
                  LGS is home to highly proficient designers who excel in
                  creating inventive designs for the frontend part of an
                  application. They are expertise at implementing animations,
                  transitions, and interactive elements to enhance user
                  engagement and make the user interface visually appealing.
                  They are skilled in using technologies like HTML, CSS,
                  JavaScript, and React JS. Our commitment is to deliver a
                  website crafted with organized, efficient, and maintainable
                  code.
                  <Link to="/contactus">KnowMore</Link>
                </p>
                <h5 className="consultant-quoutes">
                  "Elevate Your Brand with Our Front-End Development Expertise"
                </h5>
              </div>
              <div>
                <img
                  className="consultant-frontend-image"
                  src={frontenddevelopment}
                />
              </div>
            </div>
            <div className="consultant-frontend-main-contianer consultant-backend-main-mbl-contianer">
              <div>
                <img
                  className="consultant-backend-image"
                  src={backenddevelopment}
                />
              </div>
              <div className="consultant-data-container">
                <h2 className="consultant-side-headings">Backend Developers</h2>

                <p className="consultant-description">
                  Our team creates code that manages server-side logic, data
                  processing, and business operations in the backend. Our
                  experienced backend developers are capable of handling
                  database management, API development, server configuration,
                  and system integration. They ensure data integrity and
                  seamless communication between different components. Our
                  developers are proficient in programming languages such as
                  Python and Java, and they have a solid understanding of
                  relational databases like MySQL, PostgreSQL, as well as NoSQL
                  databases like Mongo DB.
                  <Link to="/contactus">KnowMore</Link>
                </p>
                <h5 className="consultant-quoutes">
                  "Harness the Potential of Your Applications with Our Expert
                  Backend Development Services"
                </h5>
              </div>
            </div>
            <div className="consultant-frontend-main-contianer consultant-mobile-main-mbl-contianer">
              <div className="consultant-data-container">
                <h2 className="consultant-side-headings">
                  Mobile Application Development
                </h2>

                <p className="consultant-description">
                  As we see, Innovations in mobile application has
                  revolutionized IT industry. Embrace the power of mobile apps
                  to transform business, enhance user experiences, and drive
                  growth. Our group has over 7+ skilled developers who are
                  experts in creating mobile apps, keeping them running
                  smoothly, and providing support. We're also great at making
                  projects happen.
                  <Link to="/contactus">KnowMore</Link>
                </p>
                <h5 className="consultant-quoutes">
                  "Stay a head of the competition by embracing the endless
                  possibilities of mobile technology"
                </h5>
              </div>
              <div>
                <img
                  className="consultant-frontend-image"
                  src={mobiledevelopment}
                />
              </div>
            </div>
            <div className="consultant-frontend-main-contianer consultant-software-main-mbl-contianer">
              <div>
                <img
                  className="consultant-frontend-image"
                  src={softwaredevelopment}
                />
              </div>
              <div className="consultant-data-container">
                <h2 className="consultant-side-headings">
                  {" "}
                  Software Development
                </h2>

                <p className="consultant-description">
                  When it comes to LGS software development, our team of
                  experienced developers have been at it for over 6 years. They
                  know all the ins and outs of planning, designing, coding,
                  testing, and deployment. We like to use Agile methodologies
                  such as Scrum and Kanban, which help us work efficiently and
                  good at writing clean code and implementing CI/CD practices.
                  Development team is passionate about creating applications and
                  tools that help businesses optimize their processes.
                  <Link to="/contactus">KnowMore</Link>
                </p>
                <h5 className="consultant-quoutes">
                  "Empowering Innovation Through Expert Software Development
                  Services"
                </h5>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </>
    );
  }
}

export default Consultant;
