import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./index.css";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("Mendix");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [comment, setComment] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const closePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  const apiUrl = process.env.REACT_APP_API_BASE_URL

  const handleSubmit = async (event) => {
    const service = course;
    const phone = phoneNumber;
    const message = comment;
    event.preventDefault();
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
        setErrorMsg("");
      } else {
        const data = await response.json();
        console.log(data.error);
        setErrorMsg(data.error);
        setSuccessMsg("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onChange = () => {
    
  }

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="card-container-3">
            <div className="popup-image-container ">
              <div>
                <h1 className="popup-heading">Get a Free Demo</h1>
                <p className="popup-para">
                  Please Fill the form our expert will contact you
                </p>
                <img
                  className="login-logo"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690546385/10-work_2x_fazttu.png"
                  alt="website login"
                />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="form-container">
              <div className="close-container" onClick={closePopup}>
                <RxCross2 className="close-1" />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name || ''}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="input-container">
                <select
                  id="course"
                  value={course || ''}
                  onChange={(e) => setCourse(e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="Mendix">Mendix</option>

                  <option value="Polarian">Polarian</option>

                  <option value="Salesforce">Salesforce</option>

                  <option value="Mobile And Web Application">
                    Mobile and Web Application
                  </option>

                  <option value="Saas And Cloud Solutions">
                    SAAS And Cloud Solutions
                  </option>
                </select>
              </div>
              <div className="input-container">
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  value={phoneNumber || ''}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="input-container">
                {" "}
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email || ''}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  id="comment"
                  placeholder="Enter your Comment"
                  value={comment || ''}
                  onChange={(e) => setComment(e.target.value)}
                  className="input-field"
                />
              </div>
              <ReCAPTCHA sitekey="6LfHycEnAAAAAF_Yt24Y7H6nxaAXeEZ9OCO4Cxz0" onChange={onChange} />
              <div className="popup-button-container">
                <button className="login-button" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;
