import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ResellerMendix from "./Components/ResellerMendixPage";
import ResellerPolarian from "./Components/ResellerPolarianPage";
import WebMobile from "./Components/MobileandAppDevelopment";
import PolarianALM from "./Components/PolarianALM";
import About from "./Components/Aboutus";
import HomePage from "./Components/Homepage";
import Chat from "./Components/chat";
import DigitalMarketing from "./Components/DigitalMarketing";
import SaasPage from "./Components/SaasPage";
import Careers from "./Components/Careers";
import WhatsAppIntegration from "./Components/WhatsappIcon";
import SalesForce from "./Components/SalesforcePage/index";
import ScrollToTopButton from "./Components/scroll/Scroll";
import ContactPage from "./Components/ContactPage";
import Consultant from "./Components/Consultant";
import TestingPage from "./Components/TestingPage";
import axios from "axios";
import JobDetails from "./Components/jobPotal/jobdetails";
import AdminLoginPage from "./Components/Admin/adminLogin";
import AdminDashboard from "./Components/Admin/admindashboard";
import { useEffect, useState } from "react";
import Faqpage from "./Components/FaqPage";

import Pods from "./Components/PodsPage";

function App() {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(`${apiUrl}/check-auth`, {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error("Authentication check error:", error);
      }
    };

    checkAuthentication();
  }, []);
  return (
    <>
      <div>
        <Chat />
        <WhatsAppIntegration />
        <ScrollToTopButton />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/resellerpolarian"
            element={<ResellerPolarian />}
          />
          <Route exact path="/resellermendix" element={<ResellerMendix />} />
          <Route
            exact
            path="/mobileandappdevelopment"
            element={<WebMobile />}
          />
          <Route exact path="/polarianalm" element={<PolarianALM />} />
          <Route
            exact
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route exact path="/consultant" Component={Consultant} />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/saascloudsolutions" element={<SaasPage />} />
          <Route
            exact
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route exact path="/testing" element={<TestingPage />} />

          <Route exact path="/contactus" element={<ContactPage />} />
          <Route exact path="/salesforcepage" element={<SalesForce />} />

          <Route exact path="/contactus" element={<ContactPage />} />
          <Route exact path="/testing" element={<TestingPage />} />
          <Route exact path="/testing" element={<TestingPage />} />
          <Route path="/career/:id" element={<JobDetails />} />
          <Route
            path="/admin/dashboard"
            element={
              isAuthenticated ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/admin/login" />
              )
            }
          />
          {/* Login page */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/faqsPage" element={<Faqpage />} />
          <Route path="/pods" Component={Pods} />
        </Routes>
      </div>
    </>
  );
}

export default App;
