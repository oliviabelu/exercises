"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RatingButton from "./RatingButton";

const ratings = [1, 2, 3, 4, 5];

const RatingCard = () => {
  const [selected, setSelected] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log(selected);
    if (selected === 0) {
      console.log("Please select a rate!");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <Box
      sx={{
        width: "600px",
        height: "450px",
        backgroundColor: "primary.main",
        padding: "2rem",
        borderRadius: "8%",
      }}
    >
      {isSubmitted ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "150px",
              height: "100px",
              bgcolor: "primary.light",
              color: "primary.contrastText",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            picture
          </Box>
          <Typography
            sx={{
              color: "secondary.main",
              bgcolor: "primary.light",
              padding: 2,
              borderRadius: "1.5rem",
            }}
          >
            You selected {selected} out of {ratings.length}
          </Typography>
          <Typography variant="h1" sx={{ color: "primary.contrastText" }}>
            Thank you!
          </Typography>
          <Typography sx={{ color: "primary.contrastText" }}>
            We appreciate you taking the time to give a rating. <br />
            If you ever need more support, don`t hesitate to get in touch!
          </Typography>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              bgcolor: "primary.light",
              width: "2rem",
              height: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20%",
              marginBottom: "2rem",
            }}
          >
            <Box
              sx={{
                bgcolor: "secondary.light",
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
              }}
            ></Box>
          </Box>
          <Typography variant="h1" sx={{ color: "primary.contrastText" }}>
            How did we do?
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", margin: "2.5rem 0" }}
          >
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {ratings.map((rating) => (
              <RatingButton
                key={rating}
                number={rating}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                marginTop: "3rem",
                padding: "1rem 3rem",
                fontWeight: 600,
                fontSize: 25,
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default RatingCard;
