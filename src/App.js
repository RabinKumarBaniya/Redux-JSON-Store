import Navbar from './components/Navbar';
import ProductCart from './components/ProductCart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './components/cartPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCart />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
