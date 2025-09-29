import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Stack
} from "@mui/material";

function ProjectCard({ title, desc, image, techStack, github, live, darkMode }) {
  return (
    <Card
      sx={{
        width: 340,
        height: 350,
        bgcolor: darkMode ? "#1a1917" : "#fff",
        color: darkMode ? "#fff" : "#222",
        boxShadow: 3,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.17s, box-shadow 0.18s, border 0.18s",
        "&:hover": {
          transform: "translateY(-9px) scale(1.045)",
          boxShadow: 7,
          border: "2.5px solid #b923e1"
        }
      }}
    >
      <CardMedia
        sx={{ height: 140, backgroundSize: "cover" }}
        image={image}
        title={title}
        component="img"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: darkMode ? "#ddd" : "#555" }}>
          {desc}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
          {techStack.map((tech, idx) => (
            <Chip
              label={tech}
              size="small"
              key={idx}
              sx={{
                bgcolor: darkMode ? "#222" : "#ececec",
                color: darkMode ? "#fff" : "#222",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "#8b2ff6",
                  color: "#fff"
                }
              }}
              clickable={false}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          size="small"
          href={github}
          target="_blank"
          variant="outlined"
          sx={{
            color: "#8b2ff6",
            border: "1.5px solid #8b2ff6",
            "&:hover": {
              color: "#fff",
              bgcolor: "#8b2ff6"
            }
          }}
        >
          GitHub
        </Button>
        <Button
          size="small"
          href={live}
          target="_blank"
          variant="contained"
          sx={{
            bgcolor: "#8b2ff6",
            color: "#fff",
            "&:hover": {
              bgcolor: "#f6ae2d",
              color: "#222"
            }
          }}
        >
          Live
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
