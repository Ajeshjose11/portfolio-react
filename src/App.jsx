import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#11100f" : "#fff",
        paper: darkMode ? "#1a1917" : "#fff"
      },
      text: {
        primary: darkMode ? "#fff" : "#222",
        secondary: "#f6ae2d"
      },
      primary: { main: "#8b2ff6" },
      secondary: { main: "#f6ae2d" }
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
      allVariants: {
        color: darkMode ? "#fff" : "#222"
      }
    }
  });

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = getTheme(darkMode);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </ThemeProvider>
  );
}
export default App;
