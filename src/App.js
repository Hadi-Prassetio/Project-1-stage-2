import "./landingPages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";
import LandingPages from "./pages/landingPages";
import Profile from "./pages/profile";
import DetailProduct from "./pages/DetailProduct";
import AddProduct from "./pages/AddProduct";
import AddTopping from "./pages/AddTopping";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:id" element={<DetailProduct />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/addTopping" element={<AddTopping />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
