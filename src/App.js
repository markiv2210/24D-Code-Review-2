import Header from './components/header/header';
import RoadsComponent from './components/roads/roadsComponent';
import BetBoard from './components/betBoard/betBoard';
import StatsComponent from './components/statsBoard/statsComponent';
import Footer from './components/footer/footer';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <div class="game-ui">
        <RoadsComponent />
        <BetBoard />
        <StatsComponent/>
      </div>
      <Footer />
    </div>
  );
}

