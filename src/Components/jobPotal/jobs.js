import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./jobs.css";

const apiUrl = process.env.REACT_APP_API_BASE_URL

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    experience: "",
    location: "",
  });

  useEffect(() => {
    async function fetchJobs() {
      try {
        const queryParams = new URLSearchParams(filters).toString();
        const response = await fetch(
          `${apiUrl}/alljobs?${queryParams}`
        );
        const data = await response.json();
        setJobs(data.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    fetchJobs();
  }, [filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      <h1 className="jobs-portal-heading">Jobs</h1>
      <div className="filters">
        <input
        className="filters-input"
          type="text"
          name="keyword"
          placeholder="Search by keyword"
          value={filters.keyword}
          onChange={handleFilterChange}
        />
        <input
        className="filters-input"
          type="text"
          name="experience"
          placeholder="Filter by experience"
          value={filters.experience}
          onChange={handleFilterChange}
        />
        <input
        className="filters-input"
          type="text"
          name="location"
          placeholder="Filter by location"
          value={filters.location}
          onChange={handleFilterChange}
        />
      </div>
      
      <div className="job-container">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="job-card-container" key={job._id}>

                <h2 className="job-card-heading">
                  Title: <span className="job-main-title">{job.title}</span>
                </h2>
              
                <p className="job-description">{job.description}</p>
          
                <div className="job-location-button-container">
                <div>
                <p className="job-details">
                  <span className="job-card-heading">Experience:</span> {job.experience} years
                </p>
                <p className="job-details"><span className="job-card-heading">Location:</span> {job.location}</p>
                </div>
                <div>
                <Link className="apply-link" to={`/career/${job._id}`}>
                  Apply
                </Link>
                </div>
                </div>
              </div>
            
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
