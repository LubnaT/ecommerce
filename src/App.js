import Navigation from './customer/components/Navigation/Navigation';
import './App.css';
import HomePage from './customer/pages/HomePage';
import HomeSectionCard from './customer/components/HomeSectionCard/HomeSectionCard';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <div>
      <HomePage/>
      <HomeSectionCard/>
     </div>
    </div>
  );
}

export default App;
