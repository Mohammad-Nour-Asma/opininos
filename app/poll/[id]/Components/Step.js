"use client";

import { useDispatch, useSelector } from "react-redux";
import styles from "../user.module.css";
import { changeStep } from "@/Redux/Slices/StepSlice";

const Step = ({ info }) => {
  const stepSlice = useSelector((state) => state.stepSlice);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        if (info.id != 3) dispatch(changeStep(info.step));
      }}
      className={`flex relative gap-2  items-center transition-all flex-row infos-center text-sm md:text-lg ${
        info.step === stepSlice.step ? "text-main" : "text-secondary"
      } 
      
      ${info.id !== 3 ? "cursor-pointer" : "cursor-auto"}

      `}
    >
      <div>{info.name}</div>
      <div>{info.icon}</div>
      {info.id !== 3 ? (
        <div
          className={`${styles.leftBar} w-[100px] hidden md:block  ${
            info.step === stepSlice.step ? "bg-main" : "bg-secondary"
          }`}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Step;
