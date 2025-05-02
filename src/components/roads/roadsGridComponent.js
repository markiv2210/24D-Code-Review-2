import "./roadsComponent.css"
import RedBlackTab from "./redBlack";
import SmallBigTab from "./smallBig";
import OddEvenTab from "./oddEven";

const renderGrid = (selectedTab) => {
  if (selectedTab === "R/B") return <RedBlackTab/>;
  else if (selectedTab === "S/B") return <SmallBigTab/> 
  else if (selectedTab === "O/E") return <OddEvenTab/>
}

export default function RoadsGridComponent({ selectedTab }) {
  return (
    <div className="roads-grid-container">
      {renderGrid(selectedTab)}
    </div>
  );
}