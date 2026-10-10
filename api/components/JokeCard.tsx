"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const JOKE_URL = "https://example-apis.vercel.app/api/bad-jokes/random";

const JokeCard = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(JOKE_URL);
      if (!response.ok) {
        throw new Error(`HTTP-Error: ${response.status}`);
      }
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      setError("The joke could not be loaded.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        width: "350px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "1rem",
        border: "2px solid",
        borderColor: "secondary.light",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{ color: "primary.contrastText" }}
      >
        All Jokes
      </Typography>
      <Typography
        align="center"
        sx={{ color: error ? "error.light" : "secondary.light" }}
      >
        {loading ? "Loading..." : (error ?? joke)}
      </Typography>
      <Button variant="contained" onClick={getJoke} disabled={loading}>
        Next Joke
      </Button>
    </Box>
  );
};

export default JokeCard;
