import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import Header from "../navbar";
const AdminLoginPage = () => {
  const history = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiUrl}/` + (isRegistering ? "adminreg" : "login"),
        {
          username,
          password,
        },
        {
          withCredentials: true, // Enable sending cookies
        }
      );

      if (response.data.success) {
        if (isRegistering) {
          // Show an alert for successful registration
          alert("Registration successful! Please log in.");
        } else {
          // Login successful, navigate to the admin dashboard
          history("/umarmohammadsheikh/dashboard");
        }
      } else {
        console.error("Error:", response.data.error || "An error occurred.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="admin-card">
        <div className={`admin-inner-card ${isRegistering ? "card-flip" : ""}`}>
          <div className="card-face card-front">
            <h2>{isRegistering ? "Register" : "Login"}</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                className="admin-input-field"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="admin-input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="admin-submit-btn" type="submit">
                {isRegistering ? "Register" : "Login"}
              </button>
            </form>
            <p
              className="toggle-link"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </p>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default AdminLoginPage;
