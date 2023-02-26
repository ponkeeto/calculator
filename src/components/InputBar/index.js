import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const InputBar = () => {
  const displayValue = useSelector((state) => state.calculator.displayValue);
  return (
    <Typography textAlign="right" variant="h3">{displayValue}</Typography>
  );
};

export default InputBar;
