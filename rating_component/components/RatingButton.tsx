import React from "react";
import IconButton from "@mui/material/IconButton";

type Props = {
  number: number;
  selected: number;
  setSelected: (nr: number) => void;
};

const RatingButton = ({ number, selected, setSelected }: Props) => {
  return (
    <IconButton
      sx={{
        color: "primary.contrastText",
        bgcolor: selected === number ? "secondary.main" : "primary.light",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        "&:hover": {
          bgcolor: "#FFF",
          color: "#111",
        },
      }}
      onClick={() => setSelected(number)}
    >
      {number}
    </IconButton>
  );
};

export default RatingButton;
