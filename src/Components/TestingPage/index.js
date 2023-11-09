import Header from "../navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import testing from "./testing.json";
import "./index.css";

const IconsList = [
  {
    heading: "Exceeding customer expectations",
    src: "https://cdn-icons-png.flaticon.com/512/4954/4954383.png",
    class: "testing-first",
    height: 50,
    width: 50,
  },
  {
    heading: "Reduce the complexity and cost",
    src: "https://cdn3d.iconscout.com/3d/premium/thumb/bar-chart-decrease-8905402-7277274.png",
    class: "testing-second",
    height: 50,
    width: 50,
  },
  {
    heading: "Focused IT Teams for developing innovative solutions",
    src: "https://icon-library.com/images/software-development-icon/software-development-icon-8.jpg",
    class: "testing-third",
    height: 50,
    width: 50,
  },
];

const ourServicesList = [
  {
    heading: "Unit Testing",
    subHeading: "A Comprehensive Guide to Unit Testing in LGS",
    para: "Considering clients as our main priority, we perform an In-depth exploration of unit testing strategies to ensure high-quality software through effective unit testing.Unit testing is an essential practice we follow for maximizing software quality, by adopting it we plan effective strategies which helps testers to avoid the common pitfalls, where developers can ensure robust and reliable software that meets the highest quality standards....",
  },
  {
    heading: "Integration Testing",
    subHeading: "Benefits of Integration testing with LGS",
    para: "Integration testing is a crucial aspect of software development, offering numerous benefits that cannot be ignored. It reduces the risk of system failures, improves software quality, enhances customer satisfaction, and increases overall productivity.Our testing team employs various strategies, including top-down, bottom-up, sandwich, and big-band approaches, to ensure the effectiveness of the testing process. The QA team selects the most suitable strategy, based on the client's project requirements....",
  },
  {
    heading: "System Testing",
    subHeading: "Benefits of System testing with LGS",
    para: "Our team at LGS conducts system testing to ensure that the system meets all specified requirements and functions as expected. This is crucial in building customer trust, providing a positive user experience, and maintaining the reputation of our clients.Our system testing is carried out after unit testing and integration testing. We have established regulations and standards that software products must adhere to during this process. By doing so, we ensure that the software meets compliance requirements, thus minimizing potential legal and regulatory risks for the company....",
  },
  {
    heading: "Deployment Automation Support",
    subHeading: "Streamline Your Deployments with Our Automation Support",
    para: "Deployment automation greatly enhances the speed at which products or services are rolled out, enabling organizations to promptly satisfy market requirements.Our experts select the best automation tool for your specific needs. Some tools help with putting code together smoothly, while others mainly focus on organizing and controlling settings and infrastructure. Scripts and files are used to automatically set up environments. This helps to avoid problems caused by manual setup. ",
  },
];

const TestingPage = () => (
  <>
    <Header />
    <div className="testing-main-container">
      <h1 className="testing-first-main-heading">SOFTWARE TESTING</h1>
      <div className="testing-first-container">
        <div className="testing-text-container">
          <h1 className="testing-heading">
            Welcome to Labyrinth Global Solutions
          </h1>
          <h3 className="testing-second-heading">
            The software testing from LGS, Ensure the quality and reliability of
            software products{" "}
          </h3>
          <p className="testing-paragraph">
            At LGS, we offer unrivaled software testing solutions for critical
            applications and infrastructure. Our dedication to reducing costs
            and preserving your brand's reputation is unmatched. We are
            committed to providing absolute excellence in our services.
          </p>
          <div>
            <button className="testing-button">Cantact Us</button>
          </div>
        </div>
        <div className="testing-image-container">
          <Lottie
            loop={true}
            animationData={testing}
            className="testing-animation"
          />
        </div>
      </div>
      <div>
        <h1 className="testing-second-main-heading">
          Empower IT teams and boost business
        </h1>
        <div className="testing-icons-container">
          {IconsList.map((eachIcon) => (
            <div  key={eachIcon.src}  className="testing-icon-card">
              <div className={eachIcon.class}>
                <img
                  height={eachIcon.height}
                  width={eachIcon.width}
                  src={eachIcon.src}
                  alt="icon"
                />
              </div>
              <h3 className="icon-heading">{eachIcon.heading}</h3>
            </div>
          ))}
        </div>
        <p className="icon-contianer-paragraph">
          We test website, mobile apps and other software’s. For us software
          testing is not a simple process, it’s a mindset that enables
          businesses to thrive in the digital age.{" "}
        </p>
      </div>
      <div className="testing-first-container">
        <div className="testing-image-container">
          <img
            srcSet="https://global-uploads.webflow.com/619e15d781b21202de206fb5/628b0828752166391a55d0f4_A-Complete-Guide-to-Functional-Testing-1280X720%20(1).jpg"
            alt="functional_testing"
            className="testing-image-2"
          />
        </div>
        <div className="testing-text-container">
          <h1 className="testing-heading">
            Enjoy The benefits of Outsourced Testing
          </h1>
          <p className="testing-paragraph">
            Our team provides flexible and comprehensive software testing
            services, including Unit, System, Integration, Mobile, and API
            testing. We use both manual and automated tools to streamline the
            process, with expertise in load and performance testing and
            accessibility. Our specialists consult on QA and develop quality
            processes, ensuring your software is thoroughly tested and of the
            highest quality.{" "}
          </p>
        </div>
      </div>
      <div>
        <h1 className="testing-second-main-heading">OUR SERVICES</h1>
        <div className="testing-service-container">
          {ourServicesList.map((eachSevice) => (
            <div key={eachSevice.heading} className="testing-service-card">
              <h1 className="testing-service-card-heading">
                {eachSevice.heading}
              </h1>
              <h3 className="testing-service-card-sub-heading">
                {eachSevice.subHeading}
              </h3>
              <p className="testing-service-card-para">
                {eachSevice.para}
                <span>
                  <Link to="/contactus">know more</Link>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default TestingPage;
