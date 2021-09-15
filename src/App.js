import React, { useState } from "react";
import "./styles.css";

let foodlist = {
  NorthIndian: ["KadhaiPaneer", "PaneerLababdar", "MatarPaneer"],
  SouthIndian: ["IdliSambhar", "VadaSambhar", "Dosa"],
  Sweets: ["Rasgulla", "Rasmalai", "Gulabjamun"],
  Namkeen: ["Sev", "Mixture", "Bundi", "Gathiya"]
};

export default function App() {
  let itemKey = Object.keys(foodlist);

  const [list1, setlist] = useState([]);

  function inputClickHandler(item) {
    let listValue = foodlist[item];
    setlist(listValue);
  }

  return (
    <div className="App">
      <div className="Heading">
        <h1>Food Recommendation</h1>
        <h2>Click on any option to see some Recommendations</h2>
      </div>
      {itemKey.map(function (item) {
        return (
          <span
            className="list-btn"
            key={item}
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              border: "solid black",
              cursor: "pointer",
              margin: "1rem",
              backgroundColor: "yellow"
            }}
            onClick={() => inputClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
      {list1.map(function (item) {
        return (
          <div
            key={item}
            className="list-btn"
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              border: "solid black",
              cursor: "pointer",
              margin: "2rem",
              backgroundColor: "yellow"
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
