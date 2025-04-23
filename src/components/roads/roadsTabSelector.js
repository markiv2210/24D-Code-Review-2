import React, { useState } from "react";
import "./roadsComponent.css";

const tabs = [
  { short: "R/B", full: "RED/BLACK" },
  { short: "S/B", full: "SMALL/BIG" },
  { short: "O/E", full: "ODD/EVEN" }
];

const RoadsTabSelector = ({ onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState("R/B");

  const handleTabClick = (short) => {
    setSelectedTab(short);
    onTabChange && onTabChange(short);
  };

  return (
    <div className="roads-tab-selector">
      {tabs.map((tab) => (
        <button
          key={tab.short}
          className={`tab ${selectedTab === tab.short ? "selected" : ""}`}
          onClick={() => handleTabClick(tab.short)}
        >
          <span>
            {selectedTab === tab.short ? tab.full : tab.short}
          </span>
        </button>
      ))}
    </div>
  );
};

export default RoadsTabSelector;
