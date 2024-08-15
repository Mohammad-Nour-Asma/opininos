"use client";
import { BASIC_STEP, PASSED_STEP, QUESSTIONS_STEP } from "@/constants/Steps";
import { useSubmitPollMutation } from "@/Redux/API/UserApi";
import { changeStep } from "@/Redux/Slices/StepSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Button = () => {
  const [submitPoll, { isLoading, data }] = useSubmitPollMutation();

  const { step } = useSelector((state) => state.stepSlice);
  const formSlice = useSelector((state) => state.formSlice);
  const dispatch = useDispatch();

  const handleProceed = () => {
    if (step === BASIC_STEP) {
      dispatch(changeStep(QUESSTIONS_STEP));
    } else if (step == QUESSTIONS_STEP) {
      submitPoll(formSlice).then((resp) => {
        if (resp.data.success) {
          dispatch(changeStep(PASSED_STEP));
          return;
        }
      });
    } else {
      dispatch(changeStep(BASIC_STEP));
    }
  };

  return (
    <>
      {data && (
        <p
          className={`p-4 font-bold ${
            data.success ? "text-green-500" : "text-red-500"
          }
      } `}
        >
          {data.success ? "" : "فشل يرجى المحاولة"}
        </p>
      )}
      <div className="absolute w-full bottom-0">
        <button
          onClick={handleProceed}
          disabled={isLoading}
          className={`w-full p-4   text-xl transition ${
            isLoading
              ? "bg-gray-400 text-gray-800"
              : "bg-main text-white hover:bg-[#02606e]"
          }`}
        >
          {step == BASIC_STEP
            ? "التالي"
            : step == QUESSTIONS_STEP
            ? "موافق"
            : "تم"}
        </button>
      </div>
    </>
  );
};

export default Button;
