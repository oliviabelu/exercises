"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9c27b0",
      light: "#e1bee7",
      dark: "#7b1fa2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00acc1",
      light: "#33beb7",
      dark: "#007c91",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fbddff",
      paper: "#120f14",
    },
    text: {
      primary: "#120f14",
      secondary: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 800,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
