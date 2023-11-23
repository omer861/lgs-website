import { Component } from "react";

import "./index.css";
import plusICon from "../images/faqs-plus-icon-img.webp";
import minusICon from "../images/faqs-minus-icon-img.webp";

const PLUS_IMAGE = plusICon;

const MINUS_IMAGE = minusICon;

class WhyUs extends Component {
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
          <hr className="horizontal-line" />

          <p className="answer">{answer}</p>
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
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} alt={altText} />
      </button>
    );
  };

  render() {
    const { details } = this.props;
    const { question } = details;

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{question}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    );
  }
}

export default WhyUs;
