import { useState } from "react";
import "./statsComponent.css";
import StatsTabSelector from "./statsTabSelector";
import StatsTabComponent from "./statsTabComponent";

export default function StatsComponent() {
  const [selectedTab, setSelectedTab] = useState("HOT & COLD");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    console.log("Stats: selected Tab:", tab);
  };

  return (
    <div className="stats-container">
      <StatsTabSelector onTabChange={handleTabChange} />
      <StatsTabComponent selectedTab={selectedTab}/>
    </div>
  );
}