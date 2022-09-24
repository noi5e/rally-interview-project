import Bill from "./Bill";
import React, { useState, useEffect } from "react";

function BillsList(props) {
  const [bills, setBills] = useState([]);

  // run once on component load
  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes"));

    // deep copy
    const bills = JSON.parse(JSON.stringify(props.bills));

    if (storedVotes) {
      storedVotes.forEach((vote) => {
        const bill = bills.find(
          (bill) => vote.type === bill.type && vote.number === bill.number
        );

        if (bill) {
          bill.isSupported = vote.isSupported;
        }
      });
    }
    setBills(bills);
  }, []);

  const handleClick = (type, number, isSupported) => {
    // deep copy bills array
    const newBills = JSON.parse(JSON.stringify(bills));

    const updatedBill = newBills.find(
      (bill) => bill.type === type && bill.number === number
    );
    updatedBill.isSupported = isSupported;

    // update localStorage so that votes persist
    const votes = localStorage.getItem("votes")
      ? JSON.parse(localStorage.getItem("votes"))
      : [];

    votes.push({
      type,
      number,
      isSupported,
    });

    localStorage.setItem("votes", JSON.stringify(votes));

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
