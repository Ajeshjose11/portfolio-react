import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Switch } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Header({ toggleTheme, darkMode }) {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#8b2ff6",
        color: "#222",
        boxShadow: 3,
        width: "100vw",
        left: 0
      }}
      elevation={4}
    >
      <Toolbar sx={{ maxWidth: "1300px", mx: "auto", width: "100%",minHeight: 76, py:2 }}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            fontFamily: '"Rye", serif',
            letterSpacing: 1,
            color: "#222"
            
          }}
        >
          AJESH JOSE
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            color: location.pathname === "/" ? "#fff" : "#222",
            fontWeight: 600
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={{
            color: location.pathname === "/about" ? "#fff" : "#222",
            fontWeight: 600
          }}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/projects"
          sx={{
            color: location.pathname === "/projects" ? "#fff" : "#222",
            fontWeight: 600
          }}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={{
            color: location.pathname === "/contact" ? "#fff" : "#222",
            fontWeight: 600
          }}
        >
          Contact
        </Button>
        <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Switch checked={darkMode} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
}
export default Header;
