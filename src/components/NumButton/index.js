import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { inputNumber, inputDec } from "../../reducer/calculatorSlice";

const NumButton = (props) => {
  const { value } = props;
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    if (e.target.value === ".") {
      dispatch(inputDec());
    } else {
      dispatch(inputNumber(e.target.value));
    }
  };
  return (
    <Button fullWidth variant="outlined" value={value} onClick={handleOnClick}>
      {value}
    </Button>
  );
};

export default NumButton;
