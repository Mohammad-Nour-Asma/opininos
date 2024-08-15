"use client";
import { BASIC_STEP, QUESSTIONS_STEP } from "@/constants/Steps";
import React from "react";
import { useSelector } from "react-redux";

const Progress = () => {
  const { step } = useSelector((state) => state.stepSlice);

  let stepText = "";
  let percent = "";
  if (step === BASIC_STEP) {
    stepText = "الخطوة الاولى";
    percent = "25%";
  } else if (step === QUESSTIONS_STEP) {
    stepText = "الخطوة الثانية";
    percent = "50%";
  } else {
    stepText = "الخطوة الاخيرة";
    percent = "100%";
  }
  return (
    <div className="my-4">
      <p className="text-secondary">{stepText}</p>
      <p className="text-xl text-white">{percent} تم الاكتمال</p>
      <div
        style={{
          transform: "rotate(180deg)",
        }}
        className="relative w-full h-5 mt-3 mb-5 bg-gray-200 rounded-xl"
      >
        <div
          className={`absolute ${
            percent == "100%"
              ? "w-full"
              : percent == "25%"
              ? "w-[25%]"
              : "w-[50%]"
          } h-5 bg-main left-0 top-0 rounded-xl`}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
