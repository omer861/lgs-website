import "./index.css";

const ContactTabItem = (props) => {
  const { tabDetails, changeTab, isActive } = props;
  const { tabId, displayText } = tabDetails;

  const onChangeTab = () => {
    changeTab(tabId);
    console.log(tabId);
  };

  const activeTabItem = isActive ? "contactactivetab" : "";

  return (
    <li className="contact-tab-item">
      <button
        className={`contact-tab-button ${activeTabItem}`}
        type="button"
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  );
};

export default ContactTabItem;
