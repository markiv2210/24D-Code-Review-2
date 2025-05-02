import "./statsComponent.css"
import HotAndColdTab from "./hotAndCold";
import ChartsTab from "./charts";

const renderTab = (selectedTab) => {
  if (selectedTab === "HOT & COLD") return <HotAndColdTab/>
  else if (selectedTab === "CHARTS") return <ChartsTab/>
}

export default function StatsTabComponent({ selectedTab }) {
  return (
    <div className="stats-grid-container">
      {renderTab(selectedTab)}
    </div>
  );
}