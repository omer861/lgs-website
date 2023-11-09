import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import meet from "../images/meeting.jpg";
import Header from "../navbar";
import Footer from "../Footer";
import { BeatLoader } from "react-spinners";
import "./index.css";

const DigitalCardDetails = [
  {
    id: 1,
    description:
      "Welcome to the forefront of the digital age, where innovation meets unparalleled marketing prowess! At LGS, we are not just another run-of-the-mill IT company; we are trailblazers in the realm of digital marketing. In today's fast-paced world, where the digital landscape is constantly evolving, businesses must adapt and excel to stay ahead of the competition. That's where we come in - armed with cutting-edge technology and a passion for strategic marketing, we empower businesses to transcend their limits and thrive in the digital realm.",
  },
  {
    id: 2,
    description:
      "Our journey began with a vision - to revolutionize the way businesses connect, engage, and succeed online. Through our comprehensive suite of digital marketing solutions, we forge powerful connections between brands and their target audiences. Our dynamic team of tech-savvy experts, creative minds, and analytical gurus work in synergy to deliver results that exceed expectations. From crafting captivating websites that leave lasting impressions to implementing data-driven SEO strategies that propel businesses to the top of search engines, we leave no stone unturned in our pursuit of digital excellence. Social media marketing, content creation, email campaigns, and everything in between, we orchestrate the perfect symphony of marketing tactics tailored to your specific needs.",
  },
  {
    id: 3,
    description:
      "We understand that success in the digital world is not just about technology - it's about empathy, understanding, and building authentic relationships. Our client-centric approach ensures that we delve deep into your business, understanding its unique DNA, and tailor strategies that resonate with your audience, creating genuine engagement and long-term loyalty. So, whether you are a startup looking to make a grand entrance or an established enterprise seeking to reinvent your digital identity, let LGS be your guiding light in the ever-changing digital universe. Together, we will unlock the true potential of your business and embark on a journey of boundless success. Join us in shaping a brighter future where innovation meets marketing magic, and let's redefine what it means to thrive in the digital era. Welcome to the extraordinary world of LGS where digital dreams become reality.",
  },
];

class DigitalMarketing extends Component {
  state = { loading: true };

  componentDidMount() {
    // Simulate an API call or any async operation
    window.scrollTo(0,0)
    setTimeout(() => {
      this.setState({ loading: false }); // Set loading to false when your data is ready
    }, 2000); // Simulating a 2-second delay
  }
  render() {
    const { loading } = this.state;
    return (
      <>
        <Header />
        {loading ? (
          <div className="spinner">
            <BeatLoader size={20} color={"#123abc"} loading={loading} />
          </div>
        ) : (
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-6 heading-container">
                  <h1 className="digital-marketing-heading">
                    DIGITAL MARKETING
                  </h1>
                </div>
                <div className="col-12 col-md-6 digital-image-container">
                  <img
                    src={meet}
                    alt="meeting"
                    className="digital-marketing-image"
                  />
                </div>
              </div>
              <div className="row mt-5 p-5">
                {DigitalCardDetails.map((eachDetail) => (
                  <div
                    className="col-12 digital-content-card"
                    key={eachDetail.id}
                  >
                    <p className="digital-paragraph">
                      {eachDetail.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
        )}

        <Footer />
      </>
    );
  }
}

export default DigitalMarketing;
