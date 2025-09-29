import React from "react";
import { Stack, IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const socials = [
  {
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/ajesh-jose/",
    name: "LinkedIn",
    hoverColor: "#0A66C2"
  },
  {
    icon: <GitHubIcon />,
    url: "https://github.com/Ajeshjose11",
    name: "GitHub",
    hoverColor: "#333"
  },
  {
    icon: <WhatsAppIcon />,
    url: "https://wa.me/918590389472",
    name: "WhatsApp",
    hoverColor: "#25D366"
  },
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/_ajesh_22/",
    name: "Instagram",
    hoverColor: "#C13584"
  },
  {
    icon: <SportsEsportsIcon />,
    url: "https://aj-22.itch.io/",
    name: "itch.io",
    hoverColor: "#fa5c5c"
  }
];

function SocialLinks({ darkMode }) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
      {socials.map((soc, i) => (
        
          <IconButton
            href={soc.url}
            target="_blank"
            size="large"
            sx={{
              color: darkMode ? "#bb86fc" : "#8b2ff6",
              border: `1.5px solid ${darkMode ? "#222" : "#8b2ff6"}`,
              bgcolor: darkMode ? "#222" : "#fff",
              transition: "all 0.2s",
              "&:hover": {
                bgcolor: soc.hoverColor,
                color: "#fff",
                transform: "scale(1.15)"
              }
            }}
          >
            {soc.icon}
          </IconButton>
        
      ))}
    </Stack>
  );
}
export default SocialLinks;
