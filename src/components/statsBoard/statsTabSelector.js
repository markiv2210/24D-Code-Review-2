import React, { useState } from "react";
import "./statsComponent.css";

const tabs = [
  { name: "HOT & COLD" },
  { name: "CHARTS" },
];

export default function StatsTabSelector({ onTabChange }) {
  const [selectedTab, setSelectedTab] = useState("HOT & COLD");

  const handleTabClick = (short) => {
    setSelectedTab(short);
    onTabChange && onTabChange(short);
  };

  return (
    <div className="stats-tab-selector">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`tab ${selectedTab === tab.name ? "selected" : ""}`}
          onClick={() => handleTabClick(tab.name)}
        >
          <span>
            {tab.name}
          </span>
        </button>
      ))}
    </div>
  );
};