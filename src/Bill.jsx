import "./Bill.css";

function Bill(props) {
  return (
    <div className="bill">
      <div className="bill-type-and-number">{`${props.type} ${props.number}`}</div>
      <div className="bill-title">{props.title}</div>
      <div className="bill-latest-update">
        <span className="latest-update-text">Latest Update</span> -{" "}
        {props.latestAction.text}{" "}
        <span className="latest-update-date">
          ({props.latestAction.actionDate})
        </span>
      </div>
    </div>
  );
}

export default Bill;
