"use client";
import React from "react";
import RadioGroupQestions from "./RadioGroupQestions";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "@/Redux/Slices/FormSlice";

const Questions = ({ data }) => {
  const formSlice = useSelector((state) => state.formSlice);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      answerQuestion({ questionId: e.target.name, answerId: e.target.value })
    );
  };

  return (
    <div>
      {data?.data?.questions?.map((item) => {
        return (
          <RadioGroupQestions
            key={item.id}
            name={item.id}
            text={item.text}
            label={item.text}
            options={item.answers}
            handleChange={handleChange}
            value={
              formSlice.solve.find((question) => question.questionId == item.id)
                ?.answerId
            }
          />
        );
      })}
    </div>
  );
};

export default Questions;
