import Bill from "./Bill";
import React, { useState, useEffect } from "react";

function BillsList(props) {
  const [bills, setBills] = useState([]);

  // run once on component load
  useEffect(() => {
    setBills(props.bills);
  }, []);

  const handleClick = (type, number, isSupported) => {
    // deep copy bills array
    const newBills = JSON.parse(JSON.stringify(bills));

    for (let i = 0; i < newBills.length; i++) {
      if (newBills[i].type === type && newBills[i].number === number) {
        newBills[i].isSupported = isSupported;
      }
    }

    setBills(newBills);
  };

  return (
    <div className="bills-list">
      {bills.map((bill, index) => {
        return <Bill handleClick={handleClick} key={index} {...bill} />;
      })}
    </div>
  );
}

export default BillsList;
