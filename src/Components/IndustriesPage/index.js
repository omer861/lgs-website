import React from "react";
import { useInView } from "react-intersection-observer";
import booklogo from "../images/booklogo.webp";
import Hospitalicon from "../images/hospitalicon.webp";
import travelicon from "../images/travelicon.webp";
import logicshippingicon from "../images/logicshippingicon.webp";
import bankingicon from "../images/bankingicon.webp";
import technologyicon from "../images/technologyicon.webp";
import manufactoringicon from "../images/manufactoringicon.webp";
import ecommerceicon from "../images/ecommerceicon.webp";

import "./index.css";

const IndustriesList = [
  {
    id: 1,
    src: Hospitalicon,
    industriesClass: "industriesImage",
    title: "HOSPITAL",
  },
  {
    id: 2,
    src: travelicon,
    industriesClass: "industriesImage",
    title: "TRAVEL",
  },
  {
    id: 3,
    src: logicshippingicon,
    industriesClass: "industriesImage",
    title: "LOGISTIC & SHIPPING",
  },
  {
    id: 4,
    src: bankingicon,
    industriesClass: "industriesImage",
    title: "BANKING",
  },
  {
    id: 5,
    src: technologyicon,
    industriesClass: "industriesImage",
    title: "TECHNOLOGY",
  },
  {
    id: 6,
    src: manufactoringicon,
    industriesClass: "industriesImage",
    title: "MANUFACTURING",
  },
  {
    id: 7,
    src: ecommerceicon,
    industriesClass: "industriesImage",
    title: "ECOMMERCE",
  },
  {
    id: 8,
    src: booklogo,
    industriesClass: "industriesImage",
    title: "EDUCATION",
  },
];

const IndustriesPage = () => {
  return (
    <div className="container totalToolsPageContainer">
      <div className="row">
        <div className="col-12">
          <h1 className="industries-heading">Industries</h1>
          <div className="h-line"></div>

          <div className="ToolsPageContainer">
            {IndustriesList.map((eachIndustrie) => (
              <div
                className="col-6 col-lg-3 col-md-4 text-center"
                key={eachIndustrie.id}
              >
                <div className="imageContainer">
                  <ImageElement
                    alt={`industries ${eachIndustrie.id}`}
                    className={eachIndustrie.industriesClass}
                    src={eachIndustrie.src}
                  />
                  <p className="industries-para">{eachIndustrie.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageElement = ({ src, className, alt }) => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div className={`image-evolution ${visible ? "evolved" : ""}`} ref={ref}>
      <img src={src} className={className} alt={alt} />
    </div>
  );
};

export default IndustriesPage;
