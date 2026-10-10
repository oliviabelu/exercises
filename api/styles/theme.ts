"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#245d96",
      dark: "#123456",
      light: "#3186db",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#d17f2e",
      dark: "#69421a",
      light: "#dd8f40",
      contrastText: "#000",
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
