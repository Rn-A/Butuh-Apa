import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="relative font-sans text-primary-black antialiased selection:bg-red-100 selection:text-primary-red min-h-screen flex flex-col">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary-red origin-left z-50 pointer-events-none" style={{ scaleX }} />
        
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan/:id" element={<ServicePage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
