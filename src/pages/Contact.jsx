import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  IconButton,
  TextField,
  Button,
  Alert
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const SOCIALS = [
  { icon: <GitHubIcon />, url: "https://github.com/Ajeshjose11" },
  { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/ajesh-jose/" },
  { icon: <EmailOutlinedIcon />, url: "mailto:ajeshjose11@gmail.com" }
];

const initialForm = { name: "", email: "", message: "" };

function validate(form) {
  return (
    form.name.length > 1 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.message.length > 2
  );
}

function Contact({ darkMode }) {
  const [form, setForm] = useState(initialForm);
  const [alert, setAlert] = useState(null);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate(form)) {
      setAlert({
        type: "success",
        msg: "Message Sent. Will be in touch with you soon."
      });
      setForm(initialForm);
    } else {
      setAlert({ type: "error", msg: "Fill all fields correctly." });
    }
  };

  return (
    <Box
      sx={{
        bgcolor: darkMode ? "#11100f" : "#f7f7fa",
        color: darkMode ? "#fff" : "#222",
        minHeight: "100vh",
        width: "100%",
        py: 7,
      }}
    >
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
        Get In Touch
      </Typography>

      {/* Flex container */}
      <Box
        sx={{
          display: "flex",
          maxWidth: 1200,
          mx: "auto",
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Left side */}
        <Box
          sx={{
            flexBasis: 320,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              borderRadius: 3,
              p: 4,
              background: darkMode ? "#1a1917" : "#fff",
              color: darkMode ? "#fff" : "#222"
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Let's Connect
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ my: 1, ml: 1 }}
            >
              <EmailIcon sx={{ color: "#B923E1" }} />
              <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                <a
                  href="mailto:ajeshjose11@gmail.com"
                  style={{
                    color: darkMode ? "#fff" : "#222",
                    textDecoration: "none"
                  }}
                >
                  ajeshjose11@gmail.com
                </a>
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ my: 1, ml: 1 }}
            >
              <PhoneIcon sx={{ color: "#B923E1" }} />
              <Typography variant="body1" sx={{ color: darkMode ? "#fff" : "#222" }}>
                +91 8590389472
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ my: 1, ml: 1 }}
            >
              <LocationOnIcon sx={{ color: "#B923E1" }} />
              <Typography variant="body1" sx={{ color: darkMode ? "#fff" : "#222" }}>
                Ernakulam, Kerala
              </Typography>
            </Stack>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              borderRadius: 3,
              p: 4,
              background: darkMode ? "#1a1917" : "#fff",
              color: darkMode ? "#fff" : "#222"
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Follow Me
            </Typography>
            <Stack direction="row" spacing={3} justifyContent="center">
              {SOCIALS.map((soc, i) => (
                <IconButton
                  key={i}
                  href={soc.url}
                  target="_blank"
                  size="large"
                  sx={{
                    color: "#B923E1",
                    bgcolor: darkMode ? "#222" : "#f3f0fa",
                    borderRadius: 2,
                    border: "none",
                    boxShadow: "none",
                    transition: "transform 0.17s, background 0.18s",
                    "&:hover": {
                      color: "#fff",
                      background: "linear-gradient(267deg,#da7c25,#b923e1)",
                      transform: "scale(1.15)"
                    }
                  }}
                >
                  {soc.icon}
                </IconButton>
              ))}
            </Stack>
          </Paper>
        </Box>

        {/* Right side (form) */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            minWidth: 320,
            borderRadius: 3,
            p: 4,
            background: darkMode ? "#1a1917" : "#fff",
            color: darkMode ? "#fff" : "#222",
            maxWidth: 700,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
          >
            Send a Message
          </Typography>
          {alert && (
            <Alert severity={alert.type} sx={{ mb: 2, width: "100%" }}>
              {alert.msg}
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={onSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "100%"
            }}
          >
            <TextField
              name="name"
              label="Full Name "
              value={form.name}
              onChange={onChange}
              variant="outlined"
              required
              sx={{
                bgcolor: darkMode ? "#222" : "#f6f7fb",
                input: { color: darkMode ? "#fff" : "#222" }
              }}
            />
            <TextField
              name="email"
              label="Email "
              type="email"
              value={form.email}
              onChange={onChange}
              variant="outlined"
              required
              sx={{
                bgcolor: darkMode ? "#222" : "#f6f7fb",
                input: { color: darkMode ? "#fff" : "#222" }
              }}
            />
            <TextField
              name="message"
              label="Message "
              value={form.message}
              onChange={onChange}
              multiline
              rows={4}
              variant="outlined"
              required
              sx={{
                bgcolor: darkMode ? "#222" : "#f6f7fb",
                input: { color: darkMode ? "#fff" : "#222" }
              }}
            />
            <Button
              type="submit"
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: 1,
                borderRadius: 2,
                background: "linear-gradient(267deg,#da7c25,#b923e1)",
                color: "#fff",
                boxShadow: "0 2px 9px 0 rgba(185,35,225,0.07)",
                "&:hover": {
                  background: "linear-gradient(90deg,#b923e1,#da7c25)",
                  color: "#fff"
                }
              }}
            >
              SEND MESSAGE
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Contact;
