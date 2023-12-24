import Navigation from './customer/components/Navigation/Navigation';
import './App.css';
import HomePage from './customer/pages/HomePage';
import HomeSectionCard from './customer/components/HomeSectionCard/HomeSectionCard';
import Footer from './customer/components/Footer/Footer';
import ProductCard from './customer/components/Product/ProductCard';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
  <Navigation/>
     <div>
      <ProductDetails/>
     {/* <Product/> */}
      {/* <HomePage/>
      <HomeSectionCard/>
     </div>
     <div>*/}
      <Footer/> 
      
     </div>
    </div>
  );
}

export default App;
