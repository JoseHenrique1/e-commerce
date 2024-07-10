import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/about";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;