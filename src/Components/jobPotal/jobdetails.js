import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css"; // Import your custom CSS file
import ContactForm from "../Careers/CarrerContactform";
import Footer from "../Footer";
import Header from "../navbar";
//job portal
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobDetails() {
      try {
        console.log("jobId:", id);
        const response = await fetch(`${apiUrl}/job/${id}`);
        const data = await response.json();
        setJobDetails(data);
        console.log("job details", jobDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    }

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return <div className="job-details-container">Loading...</div>;
  }

  if (!jobDetails) {
    return (
      <div className="job-details-container">Error fetching job details</div>
    );
  }

  return (
    <div>
      <Header />
      <div className="job-details-container">
      <h1 className="text-center">Job Details</h1>
      <div className="job-card-container">
        <h2 className="job-card-heading">
          Title: <span className="job-main-title">{jobDetails.title}</span>
        </h2>

        <p className="job-description">{jobDetails.description}</p>

        <div className="job-location-button-container">
          <div>
            <p className="job-details">
              <span className="job-card-heading">Experience:</span>{" "}
              {jobDetails.experience} years
            </p>
            <p className="job-details">
              <span className="job-card-heading">Location:</span>{" "}
              {jobDetails.location}
            </p>
          </div>
        </div>
      </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default JobDetails;
