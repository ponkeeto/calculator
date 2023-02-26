import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const InputBar = () => {
  const input = useSelector((state) => state.calculator.input);
  return (
    <Typography textAlign="right" variant="h3">{input}</Typography>
  );
};

export default InputBar;
