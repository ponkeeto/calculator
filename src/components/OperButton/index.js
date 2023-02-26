import React from "react";
import Button from "@mui/material/Button";

const OperButton = (props) => {
  const { value } = props;
  const handleOnClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <Button fullWidth variant="contained" value={value} onClick={handleOnClick}>
      {value}
    </Button>
  );
};

export default OperButton;
