import React from "react";
import Button from "@mui/material/Button";

const AuxButton = (props) => {
  const { value } = props;
  const handleOnClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <Button
      fullWidth
      variant="outlined"
      color="secondary"
      value={value}
      onClick={handleOnClick}
    >
      {value}
    </Button>
  );
};

export default AuxButton;
