import Bill from "./Bill";

function BillsList(props) {
  return (
    <div className="bills-list">
      {props.bills.map((bill) => {
        return <Bill {...bill} />;
      })}
    </div>
  );
}

export default BillsList;
