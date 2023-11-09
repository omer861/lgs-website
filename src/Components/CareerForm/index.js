import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import Jobs from "../jobPotal/jobs";

const CareerForm = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

      const apiUrl = process.env.REACT_APP_API_BASE_URL
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

  return (
    
    <form className="form-container" onSubmit={handleSubmit}>
      
      <div>
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone No *</label>
        <input
          type="text"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Total Exp *</label>
        <input
          type="text"
          name="totalExp"
          value={formData.totalExp || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Career Gap (Reason)</label>
        <input
          type="text"
          name="careerGap"
          value={formData.careerGap || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Current Location</label>
        <input
          type="text"
          name="currentLocation"
          value={formData.currentLocation || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Preferred Location</label>
        <input
          type="text"
          name="preferredLocation"
          value={formData.preferredLocation || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Reason for Job Change *</label>
        <input
          type="text"
          name="reasonForJobChange"
          value={formData.reasonForJobChange || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Job Profile *</label>
        <input
          type="text"
          name="jobProfile"
          value={formData.jobProfile || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Relevant Exp *</label>
        <input
          type="text"
          name="relevantExp"
          value={formData.relevantExp || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Current CTC *</label>
        <input
          type="text"
          name="currentCTC"
          value={formData.currentCTC || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Expected CTC (Offer if any) *</label>
        <input
          type="text"
          name="expectedCTC"
          value={formData.expectedCTC || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Notice Period (LWD if serving) *</label>
        <input
          type="text"
          name="noticePeriod"
          value={formData.noticePeriod || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Attach your resume *</label>
        <input type="file" name="resume" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CareerForm;
