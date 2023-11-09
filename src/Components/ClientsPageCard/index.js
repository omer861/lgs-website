import "./index.css";

const ClientsPageCard = (props) => {
  const { cardData } = props;
  const { companyName, Description, companyLink, button, companyLogo } =
    cardData;
    
  return (
    <div className="shadow-container"
    style={{ backgroundImage: `url(${cardData.backgroundImg})` }}>
      <div className="main-container2">
        <h1 className="clients-heading">{companyName}</h1>
        <p className="clients-paragraph">{Description}</p>
        <div>
          <a
            href={companyLink}
            target="_black"
            className="learn-Container"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div>
          <a href={companyLink} target="_black" rel="noopener noreferrer">
            <button className="website-button">{button}</button>
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={companyLogo} alt="" className="image-container2" />
      </div>
    </div>
  );
};

export default ClientsPageCard;
