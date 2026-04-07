import React, { useState, useEffect, useRef } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Background3D from "./components/Background3D";
import { motion, useScroll, useSpring, LayoutGroup } from "framer-motion";

const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#1548ed" },
      background: {
        default: "transparent",
        paper: darkMode ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.7)",
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
    },
  });

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [imageTarget, setImageTarget] = useState('home');
  const theme = getTheme(darkMode);
  const { scrollYProgress } = useScroll();
 
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const cursorRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    const onMove = (e) => {
      mousePosRef.current.x = e.clientX;
      mousePosRef.current.y = e.clientY;
    };

    
    const tick = () => {
      const lerp = 0.22;
      const mp = mousePosRef.current;
      const cp = cursorPosRef.current;

      cp.x += (mp.x - cp.x) * lerp;
      cp.y += (mp.y - cp.y) * lerp;

      cursorEl.style.transform = `translate3d(${cp.x - 10}px, ${cp.y - 10}px, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    document.body.style.transition = "background-color 0.3s ease-in-out, filter 0.3s ease-in-out";
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      if (scrollY > vh * 0.4) {
        setImageTarget('about');
      } else {
        setImageTarget('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Background3D />
      
      <div ref={cursorRef} className="custom-cursor" />

      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      
      <LayoutGroup>
        <main>
          <section id="home"><Home darkMode={darkMode} imageTarget={imageTarget} /></section>
          <section id="about"><About darkMode={darkMode} imageTarget={imageTarget} /></section>
          <section id="tech-stack"><TechStack darkMode={darkMode} /></section>
          <section id="projects"><Projects darkMode={darkMode} /></section>
          <section id="experience"><Experience darkMode={darkMode} /></section>
          <section id="contact"><Contact darkMode={darkMode} /></section>
        </main>
      </LayoutGroup>

      <Footer darkMode={darkMode} />
    </ThemeProvider>
  );
}

export default App;
