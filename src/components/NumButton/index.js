import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { inputValue } from "../../reducer/calculatorSlice";

const NumButton = (props) => {
  const { value } = props;
  const dispatch = useDispatch()
  const handleOnClick = (e) => {
    dispatch(inputValue(e.target.value))
  };
  return (
    <Button fullWidth variant="outlined" value={value} onClick={handleOnClick}>
      {value}
    </Button>
  );
};

export default NumButton;
