"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#17212B", // NAVY
      dark: "#0F171E",
      light: "#283541",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F47B13", // ORANGE
      dark: "#D95D00",
      light: "#FF9A3D",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 800,
    },
  },
});

export default theme;
