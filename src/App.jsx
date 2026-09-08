import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import BikeDetails from "./pages/BikeDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bike/:id" element={<BikeDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
