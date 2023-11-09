import { useEffect, useState } from "react";
import FaqItem from "../FaqItem";
import "./index.css";
import Header from "../navbar";
import Footer from "../Footer";

const MendixDetails = [
  {
    id: 1,
    question: "What is Mendix",
    answer:
      "LGS specialize in web and mobile app development, which means they have a team of skilled professionals with years of experience in this field. They have the expertise to understand your specific requirements and deliver high-quality solutions. ",
  },
  {
    id: 2,
    question: "Cost-Effectiveness",
    answer:
      "While internal development teams can be costly to maintain, partnering with LGS allows you to access a skilled workforce without the overhead expenses. You pay for the services you need, making it a cost-effective solution.",
  },
  {
    id: 3,
    question: "Full-Service Solutions",
    answer:
      "LGS offer end-to-end services, from concept to design, development, testing, and maintenance. This means you get comprehensive support throughout the entire development lifecycle. ",
  },
  {
    id: 4,
    question: "Customization",
    answer:
      "LGS tailor solutions to meet your specific business needs. They can create custom features, user interfaces, and experiences that align with your brand and target audience.",
  },
  {
    id: 5,
    question: "Faster Time-to-Market",
    answer:
      "With a dedicated team of experts, LGS can develop your web and mobile apps more efficiently. This leads to faster time-to-market, helping you gain a competitive advantage and reach your customers sooner.",
  },
];

const PolarianDetails = [
  {
    id: 1,
    question: "What is Polarion",
    answer:
      "LGS specialize in web and mobile app development, which means they have a team of skilled professionals with years of experience in this field. They have the expertise to understand your specific requirements and deliver high-quality solutions. ",
  },
  {
    id: 2,
    question: "Cost-Effectiveness",
    answer:
      "While internal development teams can be costly to maintain, partnering with LGS allows you to access a skilled workforce without the overhead expenses. You pay for the services you need, making it a cost-effective solution.",
  },
  {
    id: 3,
    question: "Full-Service Solutions",
    answer:
      "LGS offer end-to-end services, from concept to design, development, testing, and maintenance. This means you get comprehensive support throughout the entire development lifecycle. ",
  },
  {
    id: 4,
    question: "Customization",
    answer:
      "LGS tailor solutions to meet your specific business needs. They can create custom features, user interfaces, and experiences that align with your brand and target audience.",
  },
  {
    id: 5,
    question: "Faster Time-to-Market",
    answer:
      "With a dedicated team of experts, LGS can develop your web and mobile apps more efficiently. This leads to faster time-to-market, helping you gain a competitive advantage and reach your customers sooner.",
  },
];

const SalesForceDetails = [
  {
    id: 1,
    question: "What is salesforce",
    answer:
      "LGS specialize in web and mobile app development, which means they have a team of skilled professionals with years of experience in this field. They have the expertise to understand your specific requirements and deliver high-quality solutions. ",
  },
  {
    id: 2,
    question: "Cost-Effectiveness",
    answer:
      "While internal development teams can be costly to maintain, partnering with LGS allows you to access a skilled workforce without the overhead expenses. You pay for the services you need, making it a cost-effective solution.",
  },
  {
    id: 3,
    question: "Full-Service Solutions",
    answer:
      "LGS offer end-to-end services, from concept to design, development, testing, and maintenance. This means you get comprehensive support throughout the entire development lifecycle. ",
  },
  {
    id: 4,
    question: "Customization",
    answer:
      "LGS tailor solutions to meet your specific business needs. They can create custom features, user interfaces, and experiences that align with your brand and target audience.",
  },
  {
    id: 5,
    question: "Faster Time-to-Market",
    answer:
      "With a dedicated team of experts, LGS can develop your web and mobile apps more efficiently. This leads to faster time-to-market, helping you gain a competitive advantage and reach your customers sooner.",
  },
];

const WebDevelopmentDetails = [
  {
    id: 1,
    question: "What is web Development",
    answer:
      "LGS specialize in web and mobile app development, which means they have a team of skilled professionals with years of experience in this field. They have the expertise to understand your specific requirements and deliver high-quality solutions. ",
  },
  {
    id: 2,
    question: "Cost-Effectiveness",
    answer:
      "While internal development teams can be costly to maintain, partnering with LGS allows you to access a skilled workforce without the overhead expenses. You pay for the services you need, making it a cost-effective solution.",
  },
  {
    id: 3,
    question: "Full-Service Solutions",
    answer:
      "LGS offer end-to-end services, from concept to design, development, testing, and maintenance. This means you get comprehensive support throughout the entire development lifecycle. ",
  },
  {
    id: 4,
    question: "Customization",
    answer:
      "LGS tailor solutions to meet your specific business needs. They can create custom features, user interfaces, and experiences that align with your brand and target audience.",
  },
  {
    id: 5,
    question: "Faster Time-to-Market",
    answer:
      "With a dedicated team of experts, LGS can develop your web and mobile apps more efficiently. This leads to faster time-to-market, helping you gain a competitive advantage and reach your customers sooner.",
  },
];

const MobilleDevelopmentDetails = [
  {
    id: 1,
    question: "What is mobile Development",
    answer:
      "LGS specialize in web and mobile app development, which means they have a team of skilled professionals with years of experience in this field. They have the expertise to understand your specific requirements and deliver high-quality solutions. ",
  },
  {
    id: 2,
    question: "Cost-Effectiveness",
    answer:
      "While internal development teams can be costly to maintain, partnering with LGS allows you to access a skilled workforce without the overhead expenses. You pay for the services you need, making it a cost-effective solution.",
  },
  {
    id: 3,
    question: "Full-Service Solutions",
    answer:
      "LGS offer end-to-end services, from concept to design, development, testing, and maintenance. This means you get comprehensive support throughout the entire development lifecycle. ",
  },
  {
    id: 4,
    question: "Customization",
    answer:
      "LGS tailor solutions to meet your specific business needs. They can create custom features, user interfaces, and experiences that align with your brand and target audience.",
  },
  {
    id: 5,
    question: "Faster Time-to-Market",
    answer:
      "With a dedicated team of experts, LGS can develop your web and mobile apps more efficiently. This leads to faster time-to-market, helping you gain a competitive advantage and reach your customers sooner.",
  },
];

let Details = MendixDetails;

const Faqpage = () => {
  const [active, setActive] = useState("mendix");
  const [Details, setDetails] = useState(MendixDetails);

  const onchangeMendix = (event) => {
    setActive(event.target.value);
  };

  useEffect(() => {
    switch (active) {
      case "mendix":
        setDetails(MendixDetails);
        break;
      case "polarion":
        setDetails(PolarianDetails);
        break;
      case "salesforce":
        setDetails(SalesForceDetails);
        break;
      case "development":
        setDetails(WebDevelopmentDetails);
        break;
      default:
        setDetails(MobilleDevelopmentDetails);
        break;
    }
  }, [active]);

  console.log(Details);

  return (
    <>
    <Header />
    <div className="faq-page-main-container">
    
      <h1>FAQ</h1>
      <div className="faq-page-mini-container">
        <ul className="faq-page-tabs-unordered-list-container">
          <li>
            <button onClick={onchangeMendix} value="mendix">
              Mendix
            </button>
          </li>
          <li>
            <button onClick={onchangeMendix} value="polarion">
              Polarion
            </button>
          </li>
          <li>
            <button onClick={onchangeMendix} value="salesforce">
              Salesforce
            </button>
          </li>
          <li>
            <button onClick={onchangeMendix} value="development">
              Web Design & Development
            </button>
          </li>
          <li>
            <button onClick={onchangeMendix} value="mobileapplication">
              Mobile Application
            </button>
          </li>
        </ul>
        <ul className="Faq-page-faqs-container">
          {Details.map((eachItem) => (
            <FaqItem key={eachItem.id} details={eachItem} />
          ))}
        </ul>
        <div></div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Faqpage;
