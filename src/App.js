import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Reservation from "./Reservation";
import Menu from "./Menu";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
  <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    <Footer />
  </div>
  );
}

export default App;
