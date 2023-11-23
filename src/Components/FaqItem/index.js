import { Component } from "react";
import plusicon from "../images/faqs-plus-icon-img.webp";
import minusicon from "../images/faqs-minus-icon-img.webp";

import "./index.css";

const PLUS_IMAGE = plusicon;

const MINUS_IMAGE = minusicon;

class FaqItem extends Component {
  state = {
    isActive: false,
  };

  renderAnswer = () => {
    const { details } = this.props;

    const { answer } = details;

    const { isActive } = this.state;

    if (isActive) {
      return (
        <div>
          <hr className="faqpage-horizontal-line" />

          <p className="faqpage-answer">{answer}</p>
        </div>
      );
    }

    return null;
  };

  onToggleIsActive = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  renderActiveImage = () => {
    const { isActive } = this.state;

    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE;

    const altText = isActive ? "minus" : "plus";

    return (
      <button
        className="faqpage-button"
        type="button"
        onClick={this.onToggleIsActive}
      >
        <img className="faqpage-image" src={image} alt={altText} />
      </button>
    );
  };

  render() {
    const { details } = this.props;
    const { question } = details;

    return (
      <li className="faqpage-faq-item">
        <div className="faqpage-question-container">
          <h1 className="faqpage-question">{question}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    );
  }
}

export default FaqItem;
