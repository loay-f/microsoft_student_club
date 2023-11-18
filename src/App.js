import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import Contact from "./pages/contact/Contact";
import Join from "./pages/joinUs/Join";
import Notfound from "./pages/NotFound/Notfound";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="join-us" element={<Join />} />
        <Route path="about-us" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
