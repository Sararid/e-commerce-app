
import { Routes, Route } from "react-router-dom";
//pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from "./components/product/productDetail/ProductDetails";
import './App.scss';
//component
import Header from "./components/header/Header";
function App() {

  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>

    </>
  );
}

export default App;
