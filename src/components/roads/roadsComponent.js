import { useState } from "react";
import "./roadsComponent.css";
import RoadsTabSelector from "./roadsTabSelector";
import RoadsGridComponent from "./roadsGridComponent";

export default function RoadsComponent() {
  const [selectedTab, setSelectedTab] = useState("R/B");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    console.log("Roads: selected Tab:", tab);
  };

  return (
    <div className="roads-container">
      <RoadsTabSelector onTabChange={handleTabChange} />
      <RoadsGridComponent selectedTab={selectedTab}/>
    </div>
  );
}