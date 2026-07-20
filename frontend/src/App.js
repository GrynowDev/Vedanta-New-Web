import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Snowfall from "./components/Snowfall";
import AmbientSound from "./components/AmbientSound";
import Home from "./pages/Home";
import Villas from "./pages/Villas";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App grain">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Snowfall count={55} />
        <AmbientSound />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#1A362D",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#F9F6F0",
              fontFamily: "Outfit, sans-serif",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
