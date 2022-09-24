import "./SupportPanel.css";

function SupportPanel(props) {
  const handleVote = (isSupported) => {
    props.handleClick(props.type, props.number, isSupported);
  };

  return (
    <div className="bill-support-panel">
      <h3 className="">Do you support this bill?</h3>
      <button onClick={(e) => handleVote(true)} className="yes-button">
        👍 Yes
      </button>
      <button onClick={(e) => handleVote(false)} className="no-button">
        👎 No
      </button>
    </div>
  );
}

export default SupportPanel;
