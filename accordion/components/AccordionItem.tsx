"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface Props {
  content: {
    title: string;
    answer: string;
  };
}

const AccordionItem = ({ content }: Props) => {
  const [isExtended, setIsExtended] = useState(false);
  return (
    <Box
      sx={{
        marginBottom: "1rem",
        borderBottom: "1px solid",
        borderBottomColor: "primary.contrastText",
        padding: "0 0 1rem 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>{content.title}</Typography>
        <Button
          onClick={() => setIsExtended(!isExtended)}
          sx={{
            bgcolor: isExtended ? "background.paper" : "primary.main",
            minWidth: "2.5rem",
            minHeight: "2.5rem",
            borderRadius: "50%",
            color: "text.secondary",
          }}
        >
          {isExtended ? "-" : "+"}
        </Button>
      </Box>
      <Box
        sx={{
          display: isExtended ? "true" : "none",
          padding: "1rem",
          bgcolor: "primary.light",
          borderRadius: 1,
        }}
      >
        <Typography sx={{ color: "primary.dark" }}>{content.answer}</Typography>
      </Box>
    </Box>
  );
};

export default AccordionItem;
