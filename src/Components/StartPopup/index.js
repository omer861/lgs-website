import React, { useState, useEffect } from "react";
import "./index.css";
import { RxCross2 } from "react-icons/rx";
import "bootstrap/dist/css/bootstrap.min.css";
import ReCAPTCHA from "react-google-recaptcha";

const apiUrl = process.env.REACT_APP_API_BASE_URL;
const googleCaptcha = process.env.REACT_APP_CAPTCHA;
console.log(apiUrl);

const FirstTimePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("Mendix");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [Submitbtn, setSubmitbtn] = useState(false);
  const [isPopupRecaptchaVerified, setIsPopupRecaptchaVerified] =
    useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      console.log(course, comment, email, name, phoneNumber);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (event) => {
    console.log(course, comment, email, name, phoneNumber);
    const service = course;
    const message = comment;
    event.preventDefault();
    setSubmitbtn(true);
    const phone = phoneNumber;
    try {
      const response = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          service,
          phone,
          message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMsg(data.success);
        alert("registration successful");
        setErrorMsg("");
        setEmail("");
        setName("");
        setCourse("");
        setPhoneNumber("");
        setComment("");
      } else {
        console.log(course, comment, email, name, phoneNumber);
        const data = await response.json();
        console.log(data.error);
        setErrorMsg(data.error);
        setSuccessMsg("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitbtn(false);
    }
  };

  const onChange = (value) => {
    setIsPopupRecaptchaVerified(true);
  };

  const [captchaStyles, setCaptchaStyles] = useState({
    transform: "scale(0.77)",
    WebkitTransform: "scale(0.77)",
    transformOrigin: "0 0",
    WebkitTransformOrigin: "0 0",
  });

  return (
    <>
      {showPopup && (
        <div className="ppr-popup1">
          <form onSubmit={handleSubmit} className="ppr-popup-content1">
            <div className="ppr-pop-content-image-container1">
                <h1 className="popup-heading">Get a Free Demo</h1>
                <p className="popup-para">
                  Please Fill the form our expert will contact you
                </p>
                <img
                  className="ppr-callback-logo1"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690546385/10-work_2x_fazttu.png"
                  alt="website login"
                />
            </div>
            <div className="ppr-pop-content-content-container1">
              <div className="close-container1" onClick={closePopup}>
                <RxCross2 className="ppr-close1" />
              </div>
              <h1 className="popup-mbl-heading">Get a Free Demo</h1>
              <div className="ppr-popup-input1-container">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name || ""}
                  onChange={(e) => setName(e.target.value)}
                  className="ppr-popup-input1"
                  required
                />
              </div>
              <div className="ppr-popup-input1-container">
                <select
                  id="course"
                  value={course || ""}
                  onChange={(e) => setCourse(e.target.value)}
                  className="ppr-popup-input1 ppr-popup-select1"
                  required
                >
                  <option value="Mendix">Mendix</option>

                  <option value="Polarian">polarion</option>

                  <option value="Salesforce">Salesforce</option>

                  <option value="Mobile And Web Application">
                    Mobile and Web Application
                  </option>

                  <option value="Saas And Cloud Solutions">
                    SAAS And Cloud Solutions
                  </option>
                </select>
              </div>
              <div className="ppr-popup-input1-container">
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  value={phoneNumber || ""}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="ppr-popup-input1"
                  required
                />
              </div>
              <div className="ppr-popup-input1-container">
                {" "}
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ppr-popup-input1"
                  required
                />
              </div>

              <div className="ppr-popup-input1-container">
                <input
                  type="text"
                  id="comment"
                  placeholder="Enter your Comment"
                  value={comment || ""}
                  onChange={(e) => setComment(e.target.value)}
                  className="ppr-popup-input1"
                />
              </div>

              <div className="popup-button-container">
                <div
                  className="g-recaptcha google-captcha-container"
                  data-theme="light"
                  data-sitekey="XXXXXXXXXXXXX"
                  style={captchaStyles}
                >
                  <ReCAPTCHA sitekey={googleCaptcha} onChange={onChange} />
                </div>
                <button
                  className="login-button"
                  type="submit"
                  disabled={!isPopupRecaptchaVerified}
                >
                  {Submitbtn ? "Submitting.." : "SUBMIT"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FirstTimePopup;
