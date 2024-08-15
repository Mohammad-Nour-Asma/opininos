import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  employment_status: "",
  teaching: "",
  date_of_birth: "",
  age: "",
  address: "",
  gender: "",
  solve: [],
};

const FormSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    basicInfo: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    answerQuestion: (state, { payload }) => {
      const oldItem = state.solve.find(
        (item) => item.questionId == payload.questionId
      );

      if (oldItem) {
        oldItem.answerId = +payload.answerId;
      } else
        state.solve.push({
          questionId: +payload.questionId,
          answerId: +payload.answerId,
        });
    },
  },
});

export const { basicInfo, answerQuestion } = FormSlice.actions;

export default FormSlice;
