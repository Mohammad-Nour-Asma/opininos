"use client";
import React from "react";

const RadioGroupUser = ({ label, name, options, handleChange, value }) => {
  return (
    <div className="flex  m-3 items-center">
      <label className="w-[15%]">{label}:</label>
      <div className="w-[85%] p-2 flex justify-evenly">
        {options.map((option, index) => (
          <label key={index} className="flex items-center ">
            <span className="mx-2">{option.label}</span>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              className="form-radio h-4 w-full text-blue-600"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroupUser;
