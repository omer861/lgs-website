import { Component } from "react";
import "./index.css";

class SaasPageCarouselSlider extends Component {
  render() {
    const { cardDetails } = this.props;
    const { description, imgurl, id } = cardDetails;

    return (
      <div className="courseTransformingcard">
        <div className="courseTransformingContainer1">
          <p className="courseTransformingDescription">{description}</p>
        </div>
        <div className="saas-carousel-image-container">
          <img
            className="courseReviewProfileImage"
            src={imgurl}
            alt={`card ${id}`}
          />
        </div>
      </div>
    );
  }
}

export default SaasPageCarouselSlider;
