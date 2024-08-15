"use client";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import { useSelector } from "react-redux";

import Questions from "./Questions";
import { BASIC_STEP, QUESSTIONS_STEP } from "@/constants/Steps";
import Passed from "./Passed";
const RequiredInfo = ({ data }) => {
  const { step } = useSelector((state) => state.stepSlice);
  return (
    <>
      {step === BASIC_STEP ? (
        <PersonalInfo />
      ) : step === QUESSTIONS_STEP ? (
        <Questions data={data} />
      ) : (
        <Passed />
      )}
    </>
  );
};

export default RequiredInfo;
