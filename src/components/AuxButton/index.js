import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { auxActions } from "../../reducer/calculatorSlice";

const AuxButton = (props) => {
  const { value } = props;
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    console.log(e.target.value);
    dispatch(auxActions(e.target.value))
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
