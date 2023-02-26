import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayValue: "0",
  operator: null,
  value: null,
  waitingForOperand: false,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputNumber: (state, action) => {
      if (state.waitingForOperand) {
        state.displayValue = String(action.payload);
        state.waitingForOperand = false;
      } else {
        state.displayValue =
          state.displayValue === "0"
            ? String(action.payload)
            : state.displayValue + action.payload;
      }
    },
    inputDec: (state) => {
      if (!state.displayValue.includes(".")) {
        state.displayValue = state.displayValue.concat(".");
        state.waitingForOperand = false;
      }
    },
    auxActions: (state, action) => {
      switch (action.payload) {
        case "+/-": {
          const newValue = parseFloat(state.displayValue) * -1;
          state.displayValue = String(newValue);
          break;
        }
        case "%": {
          const currentValue = parseFloat(state.displayValue);

          if (currentValue === 0) return;
          const newValue = parseFloat(state.displayValue) / 100;
          state.displayValue = String(newValue);
          break;
        }
        case "AC": {
          state.displayValue = "0";
          state.operator = null;
          state.value = null;
          state.waitingForOperand = false;
          break;
        }
        default: {
          break;
        }
      }
    },
    calculateValues: (state, action) => {
      const inputValue = parseFloat(state.displayValue);

      if (!state.value) {
        state.value = inputValue;
      } else if (state.operator) {
        const currentValue = state.value || 0;

        switch (action.payload) {
          case "+": {
            const newValue = currentValue + inputValue;
            state.value = newValue;
            state.displayValue = String(newValue);
            break;
          }
          case "-": {
            const newValue = currentValue - inputValue;
            state.value = newValue;
            state.displayValue = String(newValue);
            break;
          }
          case "*": {
            const newValue = currentValue * inputValue;
            state.value = newValue;
            state.displayValue = String(newValue);
            break;
          }
          case "/": {
            const newValue = currentValue / inputValue;
            state.value = newValue;
            state.displayValue = String(newValue);
            break;
          }
          case "=": {
            state.displayValue = String(currentValue);
            break;
          }
          default: {
            break;
          }
        }
      }
      state.waitingForOperand = true;
      state.operator = action.payload;
    },
  },
});

export const { inputNumber, inputDec, auxActions, calculateValues } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
