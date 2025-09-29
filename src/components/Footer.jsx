import React from "react";
import { Box, Typography } from "@mui/material";

function Footer({ darkMode }) {
  return (
    <Box
      sx={{
        mt: 4,
        py: 2,
        width: "100vw",
        bgcolor: darkMode ? "#11100f" : "#ececec",
        color: darkMode ? "#fff" : "#222",
        textAlign: "center"
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Ajesh Jose. All rights reserved.
      </Typography>
    </Box>
  );
}
export default Footer;
