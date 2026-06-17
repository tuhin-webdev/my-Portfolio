import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* =========================
   Premium Page Loader
========================= */
function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 bg-white z-[100] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8">

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          {/* Rotating Gradient Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-28 h-28 rounded-full p-[4px]"
            style={{
              background:
                "conic-gradient(from 0deg, #a3e635, #facc15, #4ade80, #22d3ee, #a3e635)",
            }}
          >
            {/* Inner Glass Circle */}
            <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-2xl">
              <img
                src="/images/hasan-photo.png"
                alt="Tuhin"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-56 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full rounded-full bg-gradient-to-r from-lime-400 via-yellow-400 to-green-400"
          />
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h1 className="text-lg font-semibold tracking-widest text-gray-700">
            TUHIN
          </h1>
          <p className="text-xs text-gray-400 tracking-wider mt-1">
            Loading Portfolio...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================
   Main App
========================= */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-white"
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}