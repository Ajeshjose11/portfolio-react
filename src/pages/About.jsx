import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "React"
];

function About({ darkMode }) {
  return (
    <Box
      sx={{
        bgcolor: darkMode ? "#11100f" : "#fff",
        color: darkMode ? "#fff" : "#222",
        minHeight: "93vh",
        width: "100vw",
        pt: 8,
        pb: 8
      }}
    >
      <Container maxWidth="md">
        <Typography
                align="center"
                variant="h3"
                sx={{
                  color: "transparent",
                  fontWeight: 700,
                  mb: 6,
                  background: "linear-gradient(90deg, #B923E1, #DA7C25)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  userSelect: "none"
                }}
              >
                About Me
              </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: "20px" }}>
          Hey! I’m Ajesh Jose, a Full Stack Developer intern who loves crafting seamless web experiences. I build interactive, responsive apps with React, Node.js, and a touch of creativity, turning ideas into real, usable products.
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600, fontSize: "25px" }}>
            Skills
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", gap: 2 }}>
            {skills.map((skill, idx) => (
              <Chip
                key={idx}
                label={skill}
                sx={{
                  px: 2,
                  py: 1,
                  fontSize: "17px",
                  fontWeight: 600,
                  fontFamily: '"Electrolize", sans-serif',
                  bgcolor: darkMode ? "#1a1917" : "#ececec",
                  color: darkMode ? "#fff" : "#222",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: "#8b2ff6",
                    color: "#fff",
                    boxShadow: 2
                  }
                }}
                clickable={false}
              />
            ))}
          </Stack>
        </Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={<span style={{ fontSize: "22px", fontWeight: 600 }}>Education</span>}
              secondary={
                <span style={{ fontSize: "18px" }}>
                  BTech in Computer Science and Design<br />
                  <b>College:</b> Viswajyothi College of Engineering and Technology<br />
                  <b>Duration:</b> 2021 - 2025
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EngineeringIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={<span style={{ fontSize: "22px", fontWeight: 600 }}>Career Goals</span>}
              secondary={<span style={{ fontSize: "18px" }}>Full Stack Developer</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkspacePremiumIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={<span style={{ fontSize: "22px", fontWeight: 600 }}>Internship</span>}
              secondary={<span style={{ fontSize: "18px" }}>MEARN Stack Intern at Luminar Technolabs </span>}

            />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}
export default About;
