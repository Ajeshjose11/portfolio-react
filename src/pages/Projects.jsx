import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Stack,
  Chip
} from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import bankImg from "../assets/images/bank.png";
import movieImg from "../assets/images/movie.png";
import empImg from "../assets/images/EmpDetails.png";
import foodImg from "../assets/images/OnlineFood.png";
import todoImg from "../assets/images/todolist.png";
import travelImg from "../assets/images/TravelBlog.png";
import discountImg from "../assets/images/discount.png";
import ageImg from "../assets/images/agecalculator.png";
import furnitureImg from "../assets/images/furniture.png";

const allProjects = [
  {
    title: "Online Bank",
    desc: "A secure, modern online banking platform built with the MERN stack.",
    image:  bankImg ,
    techStack: ["Javascript", "Tailwind"],
    github: "https://github.com/Ajeshjose11/onlinebanking",
    live: "https://onlinebankingwebsite.vercel.app/"
  },
  {
    title: "Movie Search",
    desc: "An app displaying movie details using React and public APIs.",
    image:  movieImg,
    techStack: ["Javascript", "Tailwind", "API"],
    github: "https://github.com/Ajeshjose11/MovieDetails",
    live: "https://movie-details-nu.vercel.app/"
  },
  {
    title: "Employee Details",
    desc: "Employee management web app storing data persistently.",
    image:  empImg ,
    techStack: ["Javascript", "Tailwind"],
    github: "https://github.com/Ajeshjose11/employeedetailsstorage",
    live: "https://employeedetailsstorage.vercel.app/"
  },
  {
    title: "Food Website",
    desc: "A responsive food ordering website using React and Tailwind CSS.",
    image:  foodImg ,
    techStack: ["HTML", "CSS"],
    github: "https://github.com/Ajeshjose11/onlinefoodwebsite",
    live: "https://onlinefoodwebsite.vercel.app/"
  },
  {
    title: "To-Do List",
    desc: "Task management app built with React.",
    image:  todoImg,
    techStack: ["Javascript", "Tailwind"],
    github: "https://github.com/Ajeshjose11/Task-Manager",
    live: "https://task-manager-zeta-brown.vercel.app/"
  },
  {
    title: "Travel Blog",
    desc: "Travel blogging platform made with React and CSS.",
    image:  travelImg,
    techStack: ["HTML", "Bootstrap"],
    github: "https://github.com/Ajeshjose11/travelblog",
    live: "https://travelblog-virid.vercel.app/"
  },

  {
    title: "Discount Calulator",
    desc: "Discount Calculator made with React and Javascript",
    image: discountImg ,
    techStack: ["CSS", "Javascript", "React"],
    github: "https://github.com/Ajeshjose11/Discount-Calculator",
    live: "https://discount-calculator-iota.vercel.app/"
  },

  {
    title: "Age Calulator",
    desc: "Age Calculator made with React and Javascript",
    image:  ageImg ,
    techStack: ["CSS", "Javascript", "React"],
    github: "https://github.com/Ajeshjose11/agecalculator",
    live: "https://agecalculator-oqyj.vercel.app/"
  },

  {
    title: "Furniture Website",
    desc: "Online Furniture Website made with HTML and Bootstrap",
    image:  furnitureImg ,
    techStack: ["HTML", "Bootstrap"],
    github: "https://github.com/Ajeshjose11/online-furniture",
    live: "https://online-furniture-delta.vercel.app/"
  },
];

const filterOptions = [
  "All",
  "HTML & CSS",
  "Javascript",
  "Bootstrap",
  "Tailwind",
  "React",
  "API"
];

function Projects({ darkMode }) {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? allProjects
      : active === "HTML & CSS"
        ? allProjects.filter((p) =>
          p.techStack.some(
            (t) => t.toLowerCase() === "html" || t.toLowerCase() === "css"
          )
        )
        : active === "Javascript"
          ? allProjects.filter((p) =>
            p.techStack.some(
              (t) =>
                t.toLowerCase().includes("javascript") ||
                t.toLowerCase() === "react"
            )
          )
          : allProjects.filter((p) =>
            p.techStack.some((t) => t.toLowerCase() === active.toLowerCase())
          );

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
      <Container maxWidth="lg">
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
               Projects
              </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 4, flexWrap: "wrap", gap: 2, justifyContent: "center" }}
        >
          {filterOptions.map((option, idx) => (
            <Chip
              key={idx}
              label={option}
              onClick={() => setActive(option)}
              sx={{
                px: 2,
                py: 1,
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                bgcolor:
                  active === option
                    ? "#8b2ff6"
                    : darkMode
                      ? "#1a1917"
                      : "#ececec",
                color:
                  active === option
                    ? "#fff"
                    : darkMode
                      ? "#fff"
                      : "#222",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: "#8b2ff6",
                  color: "#fff"
                }
              }}
            />
          ))}
        </Stack>
        <Grid container spacing={4} justifyContent="center">
          {filteredProjects.map((proj, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ProjectCard {...proj} darkMode={darkMode} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
