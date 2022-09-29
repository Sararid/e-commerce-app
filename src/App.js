import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./components/product/productDetail/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import Category from "./pages/Category";
//style
import "./App.scss";
//component
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="shop" element={<Shop />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="checkout/paymentSuccess" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
}

export default App;
