import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { calculateValues } from "../../reducer/calculatorSlice";

const OperButton = (props) => {
  const { value } = props;
  const dispatch = useDispatch()
  const handleOnClick = (e) => {
    dispatch(calculateValues(e.target.value))
  };
  return (
    <Button fullWidth variant="contained" value={value} onClick={handleOnClick}>
      {value}
    </Button>
  );
};

export default OperButton;
