import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "0",
  operand: "",
  variables: [],
  output: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputValue: (state, action) => {
      if (state.input === "0") {
        state.input = action.payload;
      } else {
        state.input = state.input.concat(action.payload);
      }
    },
    auxActions: (state, action) => {
      switch (action.payload) {
        case "+/-": {
          if (state.input.startsWith("-")) {
            state.input = state.input.slice(1);
          } else {
            state.input = String("-").concat(state.input);
          }
          break;
        }
        case "%": {
          break;
        }
        case "AC": {
          state.input = "0";
          state.operand = "";
          state.variables = [];
          state.output = 0;
          break;
        }
        default: {
          break;
        }
      }
    },
    calculateValues: (state, action) => {
      switch (state.operand) {
        case "+": {
          state.output = state.variables.reduce(
            (accumulator, currentValue) => accumulator + currentValue
          );
          break;
        }
        case "-": {
          state.output = state.variables.reduce(
            (accumulator, currentValue) => accumulator - currentValue
          );
          break;
        }
        case "*": {
          state.output = state.variables.reduce(
            (accumulator, currentValue) => accumulator * currentValue
          );
          break;
        }
        case "/": {
          state.output = state.variables.reduce(
            (accumulator, currentValue) => accumulator / currentValue
          );
          break;
        }
        default: {
          state.operand = action.payload;
          state.variables.push(Number(state.input));

          break;
        }
      }
    },
  },
});

export const { inputValue, auxActions, calculateValues } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
