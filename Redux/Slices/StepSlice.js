import { BASIC_STEP } from "@/constants/Steps";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: BASIC_STEP,
};

const StepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    changeStep: (state, { payload }) => {
      state.step = payload;
    },
  },
});

export const { changeStep } = StepSlice.actions;

export default StepSlice;
