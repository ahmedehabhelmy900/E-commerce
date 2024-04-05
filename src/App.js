import "./App.css";
import NavBar from "./component/navbar";
import "./framework.css";
import { Routes, Route } from "react-router-dom";
import Products from "./component/products";
import ProductDetails from "./component/productDetails";
import About from "./component/About";
import Contact from "./component/contact";
import Cart from "./component/cart";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:product" element={<ProductDetails />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
