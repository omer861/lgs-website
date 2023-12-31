import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import mendix from "../images/mendix.webp";
import salesforce from "../images/salesforce.webp";
import polarian from "../images/polarian.webp";
import webdesign from "../images/webdesign.webp";
import mobile from "../images/mobile.webp";
import digital from "../images/marketing.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"; // Create a CSS file to style the slider (Slider.css)

class ReactSlick extends Component {
  render() {
    const slides = [
      {
        title: "Mendix",
        content:
          "World's No#1 Low Code Platform Build Your Apps 5X Faster LGS Asia's Preferred Development Partner",
        buttonText: "Contact Us",
        img: mendix,

        // Replace with the actual image path
      },
      {
        title: "Polarion",
        content:
          "World's No#1 Application Lifecycle Management Tool One Stop Solution To Streamline, Automate and Optimize Development Processes",
        buttonText: "Contact Us",
        img: polarian,
        // Replace with the actual image path
      },
      {
        title: "Salesforce",
        content:
          "World's No#1 CRM Software Save Time, Money and give your Business the attention it deserves",
        buttonText: "Contact Us",
        img: salesforce,
        // Replace with the actual image path
      },
      {
        title: "Web Design & Development",
        content:
          "Unleash the Power of Innovation with Our Custom Web Design & Development Solutions Transform Your Vision into Reality with Our Expert Web Developers!",
        buttonText: "Contact Us",
        img: webdesign,
        // Replace with the actual image path
      },
      {
        title: "Mobile Application",
        content:
          "Building Apps that WOW - Elevate Your User Experience Your Dreams, Our Code - Together, We Build Amazing Apps!",
        buttonText: "Contact Us",
        img: mobile,
        // Replace with the actual image path
      },
      {
        title: "Digital Marketing",
        content:
          "Drive More Traffic, Generate More Leads, and Boost Sales with Us! Harness the Full Potential of Digital Marketing for Explosive Growth",
        buttonText: "Contact Us",
        img: digital,
        // Replace with the actual image path
      },
    ];

    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      lazyLoad: "ondemand",
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: false,
    };

    return (
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide" key={`index${index}`}>
            <div className="slider-container">
              <h1 className="slider-heading">{slide.title}</h1>
              <p className="slider-paragraph">{slide.content}</p>
              <div>
                <Link to="/contactus">
                  <button className="slider-button">{slide.buttonText}</button>
                </Link>
              </div>
            </div>
            <div className="image-container">
              <img src={slide.img} alt={slide.title} className="slider-image" />
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default ReactSlick;
