import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import AccordionItem from "./AccordionItem";

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
        padding: "1rem",
        width: "62%",
        height: "70%",
        overflow: "hidden",
      }}
    >
      <Typography variant="h1">Mein Accordion</Typography>
      <Typography>Zum Testen</Typography>
      {AccordionContent.map((item) => {
        return <AccordionItem key={item.title} content={item} />;
      })}
    </Box>
  );
};

export default AccordionWrapper;
