import RatingCard from "@/components/RatingCard";
import Box from "@mui/material/Box";

import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
        backgroundColor: "#000000",
      }}
    >
      <RatingCard />
    </Box>
  );
};

export default Home;
