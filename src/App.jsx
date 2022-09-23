import "./App.css";
import BillsList from "./BillsList";
import data from "./assets/bills.json";

function App() {
  return (
    <div className="App">
      <h1>Civix</h1>
      <h2>Bill Tracker</h2>
      <BillsList bills={data.bills} />
    </div>
  );
}

export default App;
