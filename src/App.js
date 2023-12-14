import Navigation from './customer/components/Navigation/Navigation';
import './App.css';
import HomePage from './customer/pages/HomePage';
import HomeSectionCard from './customer/components/HomeSectionCard/HomeSectionCard';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <div className="App">
  <Navigation/>
     <div>
      <HomePage/>
      <HomeSectionCard/>
     </div>
     <div>
      <Footer/>
     </div>
    </div>
  );
}

export default App;
