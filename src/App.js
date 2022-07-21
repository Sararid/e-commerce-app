
import { Routes, Route } from "react-router-dom";
//pages
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shop" element={<Shop />} />

      </Routes>

    </>
  );
}

export default App;
