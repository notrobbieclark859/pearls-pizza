import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import PizzaDinnerMenu from "./pages/PizzaDinnerMenu";
import BagelBreakfastMenu from "./pages/BagelBreakfastMenu";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter basename="/pearls-pizza">
      <div className="app">
        <Nav />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza-menu" element={<PizzaDinnerMenu />} />
            <Route path="/bagel-menu" element={<BagelBreakfastMenu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
