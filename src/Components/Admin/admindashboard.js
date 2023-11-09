import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import Header from "../navbar";
import Footer from "../Footer";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    experience: "",
    location: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/alljobs`);
      setJobs(response.data.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleDeleteJob = async (_id) => {
    try {
      console.log("Deleting job with _id:", _id);

      const url = `${apiUrl}/jobs/${_id}`;

      const response = await fetch(url, {
        method: "DELETE",
        credentials: "include", // Include credentials for session handling
      });

      const data = await response.json();

      console.log("Response from server:", data);

      if (data.success) {
        console.log("Job deleted successfully.");
        fetchJobs(); // Refresh job list
      } else {
        console.error(
          "Error deleting job:",
          data.error || "An error occurred."
        );
      }
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleCreateJob = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/jobs`, newJob);

      if (response.data.success) {
        // Clear the form and refresh the job list
        setNewJob({
          title: "",
          description: "",
          experience: "",
          location: "",
        });
        fetchJobs();
        alert("job created");
      } else {
        console.error(
          "Error creating job:",
          response.data.error || "An error occurred."
        );
      }
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // Perform logout logic (e.g., sending a request to the server to invalidate the session)
      // You can use Axios or fetch to send the request

      // Assuming you have an API endpoint for logout
      await fetch(`${apiUrl}/logout`, {
        method: "DELETE",
        credentials: "include", // Include credentials for session handling
      });

      // After successful logout, navigate to the admin login page
      console.log("succuessfully logout");
      navigate("/umarmohammadsheikh");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="admin-dashboard">
        <div className="dashboard-content">
          <h2 className="admin-dashbord-heading-1">Admin Dashboard</h2>
          <div className="image-container"></div>
          <button onClick={handleLogout}>Logout</button>

          <div className="card-form">
            <h3 className="admin-dashbord-heading-2">Create New Job</h3>
            <form onSubmit={handleCreateJob}>
              <input
                type="text"
                placeholder="Title"
                value={newJob.title}
                onChange={(e) =>
                  setNewJob({ ...newJob, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Description"
                value={newJob.description}
                onChange={(e) =>
                  setNewJob({ ...newJob, description: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Experience"
                value={newJob.experience}
                onChange={(e) =>
                  setNewJob({ ...newJob, experience: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Location"
                value={newJob.location}
                onChange={(e) =>
                  setNewJob({ ...newJob, location: e.target.value })
                }
              />
              <button type="submit">Create Job</button>
            </form>
          </div>
        </div>
      </div>
      <div class="custom-job-listings">
        <ul class="custom-job-list">
          {jobs.map((job) => (
            // <li key={job._id} class="custom-job-item">
            //   <h4>TITLE: {job.title}</h4>
            //   <p>DESCRIPTION: {job.description}</p>
            //   <p>EXPERIENCE: {job.experience} years</p>
            //   <p>LOCATION: {job.location}</p>
            //   <button onClick={() => handleDeleteJob(job._id)}>Delete</button>
            // </li>

            <li className="job-card-container" key={job._id}>
              <h2 className="job-card-heading">
                Title: <span className="job-main-title">{job.title}</span>
              </h2>

              <p className="job-description">{job.description}</p>

              <div className="job-location-button-container">
                <div>
                  <p className="job-details">
                    <span className="job-card-heading">Experience:</span>{" "}
                    {job.experience} years
                  </p>
                  <p className="job-details">
                    <span className="job-card-heading">Location:</span>{" "}
                    {job.location}
                  </p>
                </div>
                <div>
                  <button
                    className="apply-link"
                    onClick={() => handleDeleteJob(job._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
