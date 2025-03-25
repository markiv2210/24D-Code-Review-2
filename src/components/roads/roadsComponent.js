import { useRef, useState } from "react";
import "./roadsComponent.css";

export default function RoadsComponent() {
  const gridRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("redblack"); 

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="roads-container">
      <div className="roads-tab-selector">
        <button 
          id="redblack" 
          className={selectedTab === "redblack" ? "selected" : ""} 
          onClick={() => setSelectedTab("redblack")}
        >
          Red/Black
        </button>
        <div className="roads-divider"></div>
        <button 
          id="oddeven" 
          className={selectedTab === "oddeven" ? "selected" : ""} 
          onClick={() => setSelectedTab("oddeven")}
        >
          Odd/Even
        </button>
        <div className="roads-divider"></div>
        <button 
          id="smallbig" 
          className={selectedTab === "smallbig" ? "selected" : ""} 
          onClick={() => setSelectedTab("smallbig")}
        >
          Small/Big
        </button>
      </div>
      <div className="grid-container">
        <button className="scroll-btn scroll-left" onClick={scrollLeft}>&#60;</button>
        <div className="roads-component" ref={gridRef}>
          <div className="grid-structure">
            <div class="roads-cell">
            <div class="roads-ball">2</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">5</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">9</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">24</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">20</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">5</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">9</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">24</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">5</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">1</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">14</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">3</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">7</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">4</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">21</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">3</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">6</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">1</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">16</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">2</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">6</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">3</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">23</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">1</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">7</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">23</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">20</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">24</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">1</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">5</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">5</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">20</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">11</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">24</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">7</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">9</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">6</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">16</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">16</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">9</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">23</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">1</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">20</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">14</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">5</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">1</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">16</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">23</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">24</div>
          </div>
          <div class="roads-cell">
            <div class="roads-ball">20</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">16</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">14</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">9</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">6</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">14</div>
          </div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell">
            <div class="roads-ball">9</div>
          </div>
          <div class="roads-cell"></div>

          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          <div class="roads-cell"></div>
          </div>
        </div>
        <button className="scroll-btn scroll-right" onClick={scrollRight}>&#62;</button>
      </div>
    </div>
  );
}