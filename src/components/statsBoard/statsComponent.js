import { useState } from "react";
import "./statsComponent.css";

export default function StatsComponent() {
  const [selectedTab, setSelectedTab] = useState("hotandcold"); 

  return (
    <div class="stats-container">
      <div class="stats-tab-selector">
        <button 
          id="hotandcold" 
          className={selectedTab === "hotandcold" ? "selected" : ""} 
          onClick={() => setSelectedTab("hotandcold")}
        >
          Hot &amp; Cold
        </button>
        <div className="stats-divider"></div>
        <button 
          id="charts" 
          className={selectedTab === "charts" ? "selected" : ""} 
          onClick={() => setSelectedTab("charts")}
        >
          Charts
        </button>
      </div>
      <div class="content">
        <div class="stats">
          <div class="frame">
            <hr class="top"/>
            <hr class="middle"/>
            <div class="hotframe plot1 plot"></div>
            <div class="coldframe plot2 plot"></div>
            <div class="extremehotframe plot3 plot"></div>
            <div class="coldframe plot4 plot"></div>
            <div class="extremehotframe plot5 plot"></div>
            <div class="coldframe plot6 plot"></div>
            <div class="extremehotframe plot7 plot"></div>
            <div class="extremehotframe plot8 plot"></div>
            <div class="extremehotframe plot9 plot"></div>
            <div class="extremehotframe plot10 plot"></div>
            <div class="extremehotframe plot11 plot"></div>
            <div class="extremehotframe plot12 plot"></div>
            <div class="extremehotframe plot13 plot"></div>
            <div class="extremehotframe plot14 plot"></div>
            <div class="extremehotframe plot15 plot"></div>
            <div class="extremehotframe plot16 plot"></div>
            <div class="hotframe plot17 plot"></div>
            <div class="extremehotframe plot18 plot"></div>
            <div class="coldframe plot19 plot"></div>
            <div class="coldframe plot20 plot"></div>
            <div class="hotframe plot21 plot"></div>
            <div class="hotframe plot22 plot"></div>
            <div class="hotframe plot23 plot"></div>
            <div class="extremehotframe plot24 plot"></div>
          </div>
          <hr class="number-hr"/>
          <div class="numbers">
            <div class="number">1</div>
            <div class="number">2</div>
            <div class="number">3</div>
            <div class="number">4</div>
            <div class="number">5</div>
            <div class="number">6</div>
            <div class="number">7</div>
            <div class="number">8</div>
            <div class="number">9</div>
            <div class="number">10</div>
            <div class="number">11</div>
            <div class="number">12</div>
            <div class="number">13</div>
            <div class="number">14</div>
            <div class="number">15</div>
            <div class="number">16</div>
            <div class="number">17</div>
            <div class="number">18</div>
            <div class="number">19</div>
            <div class="number">20</div>
            <div class="number">21</div>
            <div class="number">22</div>
            <div class="number">23</div>
            <div class="number">24</div>
          </div>
        </div>
        <div class="hotandcold">
          <div class="hot">
            <div class="label"></div>
            <div class="ball">2</div>
            <div class="ball">11</div>
            <div class="ball">5</div>
            <div class="ball">24</div>
            <div class="ball">16</div>
          </div>
          <div class="cold">
            <div class="label"></div>
            <div class="ball">20</div>
            <div class="ball">3</div>
            <div class="ball">14</div>
            <div class="ball">7</div>
            <div class="ball">21</div>
          </div>
        </div>
      </div>
    </div>
  );
}