import Box from "@mui/material/Box";
import JokeCard from "@/components/JokeCard";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
        bgcolor: "primary.dark",
      }}
    >
      <JokeCard />
    </Box>
  );
};

export default Home;
