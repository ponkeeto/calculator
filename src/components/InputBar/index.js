import React from "react";
import { TextField } from "@mui/material";

const InputBar = (props) => {
  return (
    <TextField
      disabled
      fullWidth
      defaultValue="Hello World"
      variant="filled"
    />
  );
};

export default InputBar;
