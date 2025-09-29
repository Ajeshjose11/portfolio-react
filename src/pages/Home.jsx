import React from "react";
import { Container, Box, Typography, Button, Avatar, Stack } from "@mui/material";
import SocialLinks from "../components/SocialLinks";
import { useNavigate } from "react-router-dom";
import Propic from "../assets/images/Propic.jpg";

function Home({ darkMode }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: darkMode ? "#11100f" : "#fff",
        color: darkMode ? "#fff" : "#222",
        minHeight: "93vh",
        width: "100vw",
        pt: 6,
        pb: 8,
        px: 0
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 2 }}>
        <Avatar
          alt="Ajesh Jose"
          src={Propic}
          sx={{
            width: 160,
            height: 160,
            mb: 3,
            mx: "auto",
            boxShadow: 3
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 1,
            background: "linear-gradient(90deg, #8B2FF6, #F6AE2D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {"I'm Ajesh Jose"}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: darkMode ? "#fff" : "#222",
            mb: 2
          }}
        >
          ME(A)RN Stack Developer
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: darkMode ? "#fff" : "#222",
            maxWidth: 700,
            mx: "auto"
          }}
        >
          Fullstack Developer Intern skilled in building seamless frontend and backend solutions.
        </Typography>
        <SocialLinks darkMode={darkMode} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            variant="outlined"
            onClick={() => window.open("/resume.pdf", "_blank")}
            sx={{
              fontSize: "1.1rem",
              color: darkMode ? "#fff" : "#222",
              border: "2px solid #f6ae2d",
              borderRadius: "30px",
              px: 5,
              py: 1,
              fontWeight: 600,
              transition: "background 0.2s,color 0.2s",
              "&:hover": {
                bgcolor: "#8b2ff6",
                color: "#fff",
                borderColor: "#8b2ff6"
              }
            }}
          >
            My Resume
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/projects")}
            sx={{
              fontSize: "1.1rem",
              bgcolor: "#8b2ff6",
              color: "#fff",
              borderRadius: "30px",
              px: 5,
              py: 1,
              fontWeight: 600,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#f6ae2d",
                color: "#222"
              }
            }}
          >
            View My Works
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
export default Home;
