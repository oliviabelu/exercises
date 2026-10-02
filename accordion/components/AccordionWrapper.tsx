"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import AccordionItem from "./AccordionItem";
import theme from "@/styles/theme";

const AccordionWrapper = () => {
  const AccordionContent = [
    {
      title: "Eine Frage.",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      title: "Eine zweite Frage.",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      title: "Eine weitere Frage.",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      title: "Eine letzte Frage.",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ];
  return (
    <Box
      sx={{
        bgcolor: "primary.light",
        borderRadius: 1,
        padding: "0 1.5rem",
        width: "62%",
        height: "77%",
        overflow: "auto",
        position: "relative",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginBottom: "0.5rem",
          position: "sticky",
          top: 0,
          bgcolor: "primary.light",
          zIndex: 1,
          padding: "1.5rem 0",
        }}
      >
        Mein Accordion
      </Typography>
      <Typography sx={{ marginBottom: "1.5rem" }}>Zum Testen</Typography>
      {AccordionContent.map((item) => {
        return <AccordionItem key={item.title} content={item} />;
      })}
    </Box>
  );
};

export default AccordionWrapper;
