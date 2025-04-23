import "./roadsComponent.css"

const renderGrid = (selectedTab) => {
  if (selectedTab === "R/B") {
    return (
      <div className="roads-component">
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">2</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">5</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">9</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">24</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">20</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">5</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">9</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">24</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">5</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">1</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">14</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">3</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">7</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">4</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">21</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">3</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">16</div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">1</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">16</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">2</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">6</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">3</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">23</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">1</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">7</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">23</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">20</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">24</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">1</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">5</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">5</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">20</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">11</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">24</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">7</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">9</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">6</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">16</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">16</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">9</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">23</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">1</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">20</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">14</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">5</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">1</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">16</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">23</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">24</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">20</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">16</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">14</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">9</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">6</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">14</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">9</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">23</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">5</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">1</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if (selectedTab === "S/B") {
    return (
      <div className="roads-component">
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">B</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">S</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if (selectedTab === "O/E") {
    return (
      <div className="roads-component">
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">E</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
          <div className="roads-cell">
            <div className="roads-ball">O</div>
          </div>
          <div className="roads-cell">
            <div className="roads-dot">
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="4" height="4" rx="2" fill="#535353" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function RoadsGridComponent({ selectedTab }) {
  return (
    <div className="roads-grid-container">
      {renderGrid(selectedTab)}
    </div>
  );
}