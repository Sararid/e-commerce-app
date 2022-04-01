import { useEffect, useState } from "react";
//nav
import { Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collection from './pages/Collection';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
//nav
import NavBars from './navigation/NavBars';
//styles
import './Styles/App.scss'
import Cart from "./pages/Cart";

function App() {



  return (
    <>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Collection" element={<Collection />} />
        <Route path="Contact" element={<ContactUs />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>

    </>
  );
}

export default App;
