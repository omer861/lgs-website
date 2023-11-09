
import "./index.css";
import "./index.css";
import { Component, useState,useEffect } from "react";
import ContactTabItem from "../ContactTabs";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../Footer";
import Header from "../navbar";
import ReactSelect from "react-select";
import countries from "countries-list";

const tabsList = [
  { tabId: "Services", displayText: "Request for Services" },
  { tabId: "Team", displayText: "Join our Team" },
  { tabId: "Queries", displayText: "Other Queries" },
];

// Write your code here

const googleCaptcha = process.env.REACT_APP_CAPTCHA

const ContactPage = () => {
  const [tab, changeTabId] = useState(tabsList[0].tabId);
  const [firstName, setservicesFirstName] = useState("");
  const [lastName, setserviesLastName] = useState("");
  const [email, setservicesBusinessEmail] = useState("");
  const [message, setservicesMessage] = useState("");
  const [Submitbtn, setSubmitbtn] = useState(false);
  const [queryFirstName, setqueryFirstName] = useState("");
  const [queryLastName, setqueryLastName] = useState("");
  const [queryEmail, setqueryEmail] = useState("");
  const [queryCountry, setqueryCountry] = useState("");
  const [queryMessage, setqueryMessage] = useState("");
  const [querySubmitbtn, setQuerySubmitbtn] = useState(false);
  const [isServicesRecaptchaVerified, setIsServicesRecaptchaVerified] =
    useState(false);
  const [isQueryRecaptchaVerified, setIsQueryRecaptchaVerified] =
    useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeTab = (tabId) => {
    changeTabId(tabId);
  };
  const countryOptions = Object.keys(countries.countries).map((code) => ({
    value: code,
    label: countries.countries[code].name,
  }));
  console.log(countryOptions);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const submitContactServices = async (e) => {
    e.preventDefault();
    setSubmitbtn(true);
    const servicesformData = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const response = await fetch(`${apiUrl}/contactlgs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(servicesformData),
      });
      if (response.ok) {
        console.log("services Form submitted successfully");
        setservicesFirstName("");
        setserviesLastName("");
        setservicesBusinessEmail("");
        setservicesMessage("");
        alert("Form Submitted Successfully");
      } else {
        console.error("form submission falied");
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setSubmitbtn(false);
    }
  };

  const submitContactQueries = async (e) => {
    e.preventDefault();
    setQuerySubmitbtn(true);
    const queriesformData = {
      queryFirstName,
      queryLastName,
      queryEmail,
      queryCountry,
      queryMessage,
    };
    console.log(queriesformData);
    try {
      const queryresponse = await fetch(`${apiUrl}/queries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queriesformData),
      });
      if (queryresponse.ok) {
        console.log("queries Form submitted successfully");
        setqueryFirstName("");
        setqueryLastName("");
        setqueryEmail("");
        setqueryCountry("");
        setqueryMessage("");
        alert("your query has been Submitted Successfully");
      } else {
        console.error("query form submission falied");
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setQuerySubmitbtn(false);
    }
  };

  const handleServicesCaptchaChange = (value) => {
    setIsServicesRecaptchaVerified(true);
  };

  const handleQueryCaptchaChange = (value) => {
    setIsQueryRecaptchaVerified(true);
  };

  const [captchaStyles, setCaptchaStyles] = useState({
    transform: "scale(0.77)",
    WebkitTransform: "scale(0.77)",
    transformOrigin: "0 0",
    WebkitTransformOrigin: "0 0",
  });

  const showServicesPage = () => (
    <form onSubmit={submitContactServices} className="contact-form-container">
      <h1 className="contact-services-heading">Let’s Work Together</h1>
      <div className="contact-input-fields-container">
        <input
          required
          type="text"
          className="contact-input-field"
          value={firstName}
          placeholder="First Name*"
          onChange={(e) => setservicesFirstName(e.target.value)}
        />
        <input
          required
          type="text"
          value={lastName}
          className="contact-input-field"
          placeholder="Last Name*"
          onChange={(e) => setserviesLastName(e.target.value)}
        />
        <input
          required
          type="email"
          value={email}
          className="contact-input-field"
          placeholder="Business Email Address*"
          onChange={(e) => setservicesBusinessEmail(e.target.value)}
        />
      </div>
      <div className="servicesTextarea-container">
        <textarea
          required
          value={message}
          className="servicesTextarea"
          placeholder="Message*"
          onChange={(e) => setservicesMessage(e.target.value)}
        />
      </div>
      <div>
        <div className="checkbox-container mb-2 mt-2">
          <input type="checkbox" required />
          <p className="contact-terms-description m-0">
            Agree Terms & Coditions
          </p>
        </div>
        <p className="contact-terms-description">
          Send me occasional information about Labyrinth Global Solutions, a LGS
          Group Company news and events to the provided email address.
        </p>
        <p className="contact-terms-description">
          You may withdraw your consent at any time.
        </p>
        <p className="contact-terms-description">
          For more information about how Labyrinth Global Solutions protects
          your privacy and processes your personal data please see our{" "}
          <a>Privacy Policy</a>
        </p>
      </div>
      <div
        className="g-recaptcha"
        data-theme="light"
        data-sitekey="XXXXXXXXXXXXX"
        style={captchaStyles}
        className="google-captcha-container"
      >
        <ReCAPTCHA
          sitekey={googleCaptcha}
          onChange={handleServicesCaptchaChange}
        />
      </div>
      <button
        className="contact-submit-button"
        type="submit"
        disabled={!isServicesRecaptchaVerified}
      >
        {Submitbtn ? "Submitting.." : "SUBMIT"}
      </button>
    </form>
  );

  const showTeamPage = () => {
    return <Navigate to="/careers" />;
  };

  const showQueriesPage = () => (
    <form
      className="contact-query-form-container"
      onSubmit={submitContactQueries}
    >
      <h1>Reach Out To Us</h1>
      <div className="contact-query-input-fields-container">
        <input
          className="query-input-field"
          placeholder="First Name*"
          required
          type="text"
          id="firstName"
          value={queryFirstName}
          name="FirstName"
          onChange={(e) => setqueryFirstName(e.target.value)}
        />
        <input
          className="query-input-field"
          placeholder="Last Name*"
          required
          type="text"
          id="lastName"
          value={queryLastName}
          name="LastName"
          onChange={(e) => setqueryLastName(e.target.value)}
        />
        <input
          placeholder="Email*"
          type="email"
          required
          id="email"
          value={queryEmail}
          className="query-input-field"
          name="Email"
          onChange={(e) => setqueryEmail(e.target.value)}
        />

        <ReactSelect
          options={countryOptions}
          onChange={(selectedOption) => setqueryCountry(selectedOption.value)}
          className="query-input-field"
          value={countryOptions.find((option) => option.value === queryCountry)}
          placeholder="Country"
          styles={{
            // Override default styles
            control: (provided) => ({
              ...provided,
              border: "1px solid #ccc",
              borderRadius: "4px",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#007bff" : "white",
              color: state.isSelected ? "white" : "black",
            }),
          }}
        />
      </div>
      <div className="query-Textarea-container">
        <textarea
          placeholder="Message*"
          required
          value={queryMessage}
          className="queryTextarea"
          onChange={(e) => setqueryMessage(e.target.value)}
        ></textarea>
      </div>
      <div>
        <div className="checkbox-container mb-2 mt-2">
          <input type="checkbox" required />
          <p className="contact-terms-description m-0">
            Agree Terms & Coditions
          </p>
        </div>
        <p className="contact-terms-description">
          Send me occasional information about Labyrinth Global Solutions, a LGS
          Group Company news and events to the provided email address.
        </p>
        <p className="contact-terms-description">
          You may withdraw your consent at any time.
        </p>
        <p className="contact-terms-description">
          For more information about how Labyrinth Global Solutions protects
          your privacy and processes your personal data please see our{" "}
          <a>Privacy Policy</a>
        </p>
      </div>
      <div
        className="g-recaptcha"
        data-theme="light"
        data-sitekey="XXXXXXXXXXXXX"
        style={captchaStyles}
        className="google-captcha-container"
      >
        <ReCAPTCHA
          sitekey={googleCaptcha}
          onChange={handleQueryCaptchaChange}
        />
      </div>
      <button
        className="contact-submit-button"
        type="submit"
        disabled={!isQueryRecaptchaVerified}
      >
        {querySubmitbtn ? "Submitting.." : "SUBMIT"}
      </button>
    </form>
  );

  const ShowForm = () => {
    switch (tab) {
      case "Services":
        return showServicesPage();
      case "Team":
        return showTeamPage();
      default:
        return showQueriesPage();
    }
  };

  return (
    <>
      <Header />
      <div className="contact-page-main-container">
        <div className="Contact-hero-section">
          <h1>How Can We help You ?</h1>
          <p className="contactus-hero-section-description">
            Whether you’re searching for a new engineering partner or starting a
            new career, we would love to hear from you.
          </p>
        </div>
        <div className="contact-container">
          <h1>Get in touch</h1>
          <p className="contact-getin-touch-description">
            Please fill out the form below. You can also contact us via
            email/phone, and our team will gladly handle your request!
          </p>
          <ul className="tabs-container">
            {tabsList.map((eachTab) => (
              <ContactTabItem
                isActive={tab === eachTab.tabId}
                tabDetails={eachTab}
                changeTab={changeTab}
                key={eachTab.tabId}
              />
            ))}
          </ul>
          <div className="contact-form-main-contianer">{ShowForm()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
