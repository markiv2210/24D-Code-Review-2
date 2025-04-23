import { useState, useEffect } from 'react';
import './App.css';

import RoadsComponent from './components/roads/roadsComponent';
import BetBoard from './components/betBoard/betBoard';
import StatsComponent from './components/statsBoard/statsComponent';

export default function App() {
  const [scaleFactor, setScaleFactor] = useState(getScale());
    
  function getScale() {
    const maxWidth = 1800;
    const maxHeight = 1013;
    const width = Math.min(window.innerWidth, maxWidth);
    const height = Math.min(window.innerHeight, maxHeight);
    return 0.0007 * Math.sqrt(width * height) + 0.16464;
  }

  useEffect(() => {
    const handleResize = () => setScaleFactor(getScale());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="game-ui" style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'bottom center' }}>
      <RoadsComponent />
      <BetBoard />
      <StatsComponent />
    </div>
  );
}

