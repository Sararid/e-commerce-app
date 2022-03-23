import { useEffect, useState } from "react";
//nav
import { Routes, Route, Link, Router } from "react-router-dom";

//pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collection from './pages/Collection';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
//nav
import NavBars from './navigation/NavBars';
//styles
import './App.css';
//api
import api from "./services/api";


function App() {
  const [data, setData] = useState([])
  // call to API
  useEffect(() => {
    api().then((initialData) => {
      console.log(initialData);
      setData(initialData);
    });
  }, []);

  return (
    <>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Collection" element={<Collection />} />
        <Route path="Contact" element={<ContactUs />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>

    </>
  );
}

export default App;
