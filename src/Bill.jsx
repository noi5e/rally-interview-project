import "./Bill.css";
import SupportPanel from "./SupportPanel";

function Bill(props) {
  let supportPanel;

  if (props.hasOwnProperty("isSupported") && props.isSupported) {
    supportPanel = (
      <div className="supported-bill">You Support this bill. 👍</div>
    );
  } else if (props.hasOwnProperty("isSupported") && !props.isSupported) {
    supportPanel = (
      <div className="unsupported-bill">You Do Not Support this bill. 👎</div>
    );
  } else {
    supportPanel = (
      <SupportPanel
        handleClick={props.handleClick}
        type={props.type}
        number={props.number}
      />
    );
  }

  return (
    <div className="bill">
      <div className="bill-data">
        <h4 className="bill-type-and-number">{`${props.type} ${props.number}`}</h4>
        <h3 className="bill-title">{props.title}</h3>
        <div className="bill-latest-update">
          <span className="latest-update-text">Latest Update</span> -{" "}
          {props.latestAction.text}{" "}
          <span className="latest-update-date">
            ({props.latestAction.actionDate})
          </span>
        </div>
      </div>
      {supportPanel}
    </div>
  );
}

export default Bill;
