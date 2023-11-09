import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Jobs from "../jobPotal/jobs";

const apiUrl = process.env.REACT_APP_API_BASE_URL;
const googleCaptcha = process.env.REACT_APP_CAPTCHA;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    totalExp: "",
    careerGap: "",
    currentLocation: "",
    preferredLocation: "",
    reasonForJobChange: "",
    jobProfile: "0",
    email: "",
    relevantExp: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    resume: null,
  });

  const [captchaStyles, setCaptchaStyles] = useState({
    transform: "scale(0.77)",
    WebkitTransform: "scale(0.77)",
    transformOrigin: "0 0",
    WebkitTransformOrigin: "0 0",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Create a new FormData object to send the form data
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("totalExp", formData.totalExp);
      formDataToSend.append("careerGap", formData.careerGap);
      formDataToSend.append("currentLocation", formData.currentLocation);
      formDataToSend.append("preferredLocation", formData.preferredLocation);
      formDataToSend.append("reasonForJobChange", formData.reasonForJobChange);
      formDataToSend.append("jobProfile", formData.jobProfile);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("relevantExp", formData.relevantExp);
      formDataToSend.append("currentCTC", formData.currentCTC);
      formDataToSend.append("expectedCTC", formData.expectedCTC);
      formDataToSend.append("noticePeriod", formData.noticePeriod);
      formDataToSend.append("resume", formData.resume);

      // Send the form data to the server using axios
      const response = await axios.post(
        `${apiUrl}/career-form`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      alert("form has been submitted thank you");
      // Clear the form fields after successful submission
      setFormData({
        name: "",
        phone: "",
        totalExp: "",
        careerGap: "",
        currentLocation: "",
        preferredLocation: "",
        reasonForJobChange: "",
        jobProfile: "",
        email: "",
        relevantExp: "",
        currentCTC: "",
        expectedCTC: "",
        noticePeriod: "",
        resume: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onChange = () => {};

  return (
    <div className="row career-form ">
      {/* <Jobs/> */}
      <h4 className="col-12 semi_heading-career text-center text-uppercase p-0 font-weight-bold careers-heading">
        Come Work With Us
      </h4>
      <div className="text-uppercase text-center p-0">
        Don't be shY! Drop us a line and our team will get to you asap.
      </div>
      <form id="career_form" onSubmit={handleSubmit}>
        <div className="row career-contact rounded ">
          <div className="col-12 col-md-6 p-3 ">
            <div className="form-group">
              <label htmlFor="career_name">
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control career-fields career-input-fields"
                id="career_name"
                name="name"
                required
                value={formData.name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_phone">
                Phone No <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                className="form-control career-fields career-input-fields"
                id="career_phone"
                name="phone"
                minLength="10"
                maxLength="16"
                onKeyPress={(event) =>
                  event.charCode >= 48 && event.charCode <= 57
                }
                required
                value={formData.phone || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_total_exp">
                Total Exp <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields career-input-fields"
                id="career_total_exp"
                type="text"
                name="totalExp"
                required
                value={formData.totalExp || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_gap">Career Gap(Reason)</label>
              <input
                className="form-control career-fields career-input-fields"
                type="text"
                id="career_gap"
                name="careerGap"
                value={formData.careerGap || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_current_loc">Current Location</label>
              <input
                className="form-control career-fields career-input-fields"
                type="text"
                id="career_current_loc"
                name="currentLocation"
                value={formData.currentLocation || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_preferred_loc">Preferred Location</label>
              <input
                className="form-control career-fields career-input-fields"
                type="text"
                id="career_preferred_loc"
                name="preferredLocation"
                value={formData.preferredLocation || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_job_change">
                Reason for job change <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields career-input-fields"
                type="text"
                id="career_job_change"
                name="reasonForJobChange"
                required
                value={formData.reasonForJobChange || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Job Profile</label>
              <select
                name="jobProfile"
                className="custom-select m-3 career-fields career-input-fields"
                id="position"
                value={formData.jobProfile || ""}
                onChange={handleInputChange}
              >
                <option value="0">Select Job Profile</option>
                <option value="1">Android developer</option>
                <option value="2">Web developer</option>
                <option value="3">Sales & DigitalMarketing</option>
                <option value="4">Java</option>
                <option value="5">SEO</option>
                <option value="6">Others</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="form-group">
              <label htmlFor="career_email">
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control career-fields career-input-fields"
                id="career_email"
                name="email"
                required
                value={formData.email || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_relevant_exp">
                Relevant Exp <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields career-input-fields"
                type="text"
                id="career_relevant_exp"
                name="relevantExp"
                required
                value={formData.relevantExp || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_current_ctc">
                Current CTC <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields career-input-fields"
                type="text"
                id="career_current_ctc"
                name="currentCTC"
                required
                value={formData.currentCTC || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_exp_ctc">
                Expected CTC(Offer if any){" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields career-input-fields"
                type="text"
                id="career_exp_ctc"
                name="expectedCTC"
                required
                value={formData.expectedCTC || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_notice_period">
                Notice Period(LWD if serving){" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields career-input-fields"
                type="text"
                id="career_notice_period"
                name="noticePeriod"
                required
                value={formData.noticePeriod || ""}
                onChange={handleInputChange}
              />
            </div>
            <div
              className="g-recaptcha"
              data-theme="light"
              data-sitekey="XXXXXXXXXXXXX"
              style={captchaStyles}
              className="google-captcha-container"
            >
              <ReCAPTCHA
                className="mt-2"
                sitekey={googleCaptcha}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="attach_document">
                Attach your resume <span style={{ color: "red" }}>*</span>
              </label>
              <div
                className="custom-file cursor-pointer z-1 "
                id="attach_document"
              >
                <input
                  type="file"
                  className="custom-file-input cursor-pointer file-css"
                  id="customFile"
                  name="resume"
                  required
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="text-end mt-4">
              <button
                className=" text-uppercase ml-auto  career-form-submit-btn"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="hide-form"></div>
    </div>
  );
};

export default ContactForm;
