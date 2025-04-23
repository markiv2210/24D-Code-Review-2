import "./statsComponent.css"

const renderTab = (selectedTab) => {
  if (selectedTab === "HOT & COLD") {
    return (
      <div>
        Hot & Cold Tab
      </div>
    );
  }
  else if (selectedTab === "CHARTS") {
    return (
      <div>
        Charts Tab
      </div>
    );
  }
}

export default function StatsTabComponent({ selectedTab }) {
  return (
    <div className="stats-grid-container">
      {renderTab(selectedTab)}
    </div>
  );
}