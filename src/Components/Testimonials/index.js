import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import "./index.css";
import AlKhalijiBankclientlogo from "../images/Al-Khaliji-Bankclientlogo.webp";
import lantiqxLogo from "../images/lantiqx-logo.webp";
import pansoftLogo from "../images/pansoftLogo.png";
import drReddys from "./DrR_Logo_Primary_RGB.svg";
import companyLogo from "../images/companylogo.webp";

const data = [
  {
    id: 0,
    icon: <BiSolidQuoteAltRight className="home-carousel-icon" />,
    description:
      "Enthusiastically endorsing Labyrinth Global Solutions, I've experienced their unwavering dedication, expertise, and innovative problem-solving over 18 months. LGS consistently delivers outstanding results, with a proven track record of timely, cost-effective projects. Their responsive team builds lasting relationships through trust and transparent communication, exceeding expectations. I confidently recommend LGS for initiatives aligned with your objectives, as their expertise contributes significantly to success. Feel free to contact me for further insights; I look forward to witnessing a successful collaboration with LGS.",
    image: lantiqxLogo,
    name: "Lantiqx",
    Profile: "Imthiyaz Basha Gounda ",
    Role: "Co-Founder & CEO",
  },
  {
    id: 1,
    icon: <BiSolidQuoteAltRight className="home-carousel-icon" />,
    description:
      "Highly recommending Labyrinth Global Solutions as a trusted partner, I've witnessed their unwavering dedication and expertise over two years. LGS consistently delivers outstanding results with professionalism, attention to detail, and an innovative approach. Their proven track record of on-time project delivery and cost savings, coupled with a responsive team, makes them an invaluable asset. LGS not only meets but exceeds expectations, building lasting relationships through trust and effective communication. Partnering with LGS is a sure way to enhance and contribute to your ongoing success.",
    image: pansoftLogo,
    name: "PanSoft Systems Integrated",
    Profile: "Rishi Daryani",
    Role: "COO",
  },
  {
    id: 2,
    icon: <BiSolidQuoteAltRight className="home-carousel-icon" />,
    description:
      "For over a year, our partnership with LGS has been exceptional. Their team demonstrated a deep understanding of our intricate internal processes, successfully implementing multiple integrations on Mendix. Their sincerity and dedication were evident in delivering the product on time. We continue to engage with their team members, who consistently perform well in meeting project timelines. LGS has proven to be a trusted partner on our Mendix product build journey, and their expertise has been immensely valuable throughout.",
    image: drReddys,
    name: "DR Reddys",
    Profile: "Prakhar Sharma",
    Role: "Principal - Digital Products",
  },
];

const Testimonials = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-carousel-main-container">
      <div className="home-carousel-first-images-container">
        <img
          src={companyLogo}
          alt="first"
          className="home-carousel-side-image"
        />
        <img
          src={companyLogo}
          alt="first"
          className="home-carousel-first-center-image"
        />
        <img
          src={companyLogo}
          alt="first"
          className="home-carousel-side-image"
        />
      </div>
      <div className="home-carousel-container">
        <div>
          <h1 style={{ fontWeight: "bold" }}>Testimonial</h1>
        </div>
        <div>Client Feedback</div>
        <Slider {...settings} className="home-carousel-sub-container">
          {data.map((eachSlide) => (
            <div>
              <span className="home-carousel-icon-holder">
                {eachSlide.icon}
              </span>
              <p className="home-carousel-person-description">
                {eachSlide.description}
              </p>
              <div className="home-carousel-image-container">
                <img
                  className="home-carousel-image"
                  src={eachSlide.image}
                  alt={eachSlide.name}
                />
              </div>
              {/* <h3 className="home-carousel-person-name">{eachSlide.name}</h3> */}
              <h4 className="home-carousel-person-name">{eachSlide.Profile}</h4>
              <h4 className="home-carousel-person-role">{eachSlide.Role}</h4>
            </div>
          ))}
        </Slider>
      </div>
      <div className="home-carousel-second-images-container">
        <img
          src={companyLogo}
          alt="first"
          className="home-carousel-side-image"
        />
        <img
          src={companyLogo}
          alt="first"
          className="home-carousel-second-center-image"
        />
        <img
          src={companyLogo}
          alt="first"
          className="home-carousel-side-image"
        />
      </div>
    </div>
  );
};

export default Testimonials;
