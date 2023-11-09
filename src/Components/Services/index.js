import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import polarianCard from "../images/polarian2.png";
import mendixCard from "../images/mendix2.png";
import digitalmarketingCard from "../images/digitalmarketing2.png";
import webdevelopmentCard from "../images/webdevelopment.png";


class Services extends Component {
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);

  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".services-reval");
    for (var i = 0; i < revals.length; i++) {
      var windowheight = window.innerHeight;
      var revaltop = revals[i].getBoundingClientRect().top;
      var revalpoint = 150;
      if (revaltop < windowheight - revalpoint) {
        revals[i].classList.add("active");
      } else {
        revals[i].classList.remove("active");
      }
    }
  };
  render() {
    return (

      <div>
        <div className="row1-container">
          <div className="box box-down cyan services-reval">
            <h2 className="services-heading">Web & Mobile App Development </h2>
            <p className="services-paragraph">
              At Labyrinth Global Solutions, we don't just build websites and
              apps; we build experiences that connect, inspire, and empower. We
              are not just developers; we are dreamers and visionaries who are
              passionate about making a difference in the digital world ...
              <Link to="/mobileandappdevelopment">Know More</Link>
            </p>
            <div className="services-image-container">
              <img
                src={webdevelopmentCard}
                alt="web-development"
                className="services-card-image"
              />
            </div>
          </div>

          <div className="box red services-reval">
            <h2 className="services-heading">Mendix</h2>
            <p className="services-paragraph">
              In today's fast-paced world, staying ahead of the competition
              requires agility, adaptability, and the ability to rapidly deploy
              custom applications. That's where Mendix comes in a powerful
              low-code development platform that enables us to build robust and
              scalable applications faster than ever before...
              <Link to="/resellermendix">Know More</Link>
            </p>
            <div className="services-image-container">
              <img
                src={mendixCard}
                alt="mendix"
                className="services-card-image-mendix"
              />
            </div>
          </div>

          <div className="box box-down blue services-reval">
            <h2 className="services-heading">Digital Marketing</h2>
            <p className="services-paragraph">
              From crafting captivating websites that leave lasting impressions
              to implementing data-driven SEO strategies that propel businesses
              to the top of search engines, we leave no stone unturned in our
              pursuit of digital excellence. Social media marketing, content
              creation, email campaigns, and everything in between, we
              orchestrate the perfect symphony of marketing tactics tailored to
              your specific needs ...
              <Link to="/digitalmarketing">Know More</Link>
            </p>
            <div className="services-image-container">
              <img
                src={digitalmarketingCard}
                alt="digital-marketing"
                className="services-card-image"
              />
            </div>
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange services-reval">
            <h2 className="services-heading">Polarion</h2>
            <p className="services-paragraph">
              Welcome to the cutting-edge world of Polarion Solutions &
              Development, where innovation meets excellence! We empower
              businesses and individuals with state-of-the-art Polarion
              Solutions that redefine possibilities and accelerate growth....
              <Link to="/resellerpolarian">Know More</Link>
            </p>
            <div className="services-image-container">
              <img
                src={polarianCard}
                alt="polarian"
                className="services-card-image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
