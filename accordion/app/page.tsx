import Box from "@mui/material/Box";
import AccordionWrapper from "@/components/AccordionWrapper";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AccordionWrapper />
    </Box>
  );
};

export default Home;
