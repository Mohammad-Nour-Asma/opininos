import React from "react";
import Divider from "../../../../Components/Divider";

const RadioGroupQestions = ({ label, name, options, handleChange, value }) => {
  return (
    <div className=" m-3 ">
      <p className="mb-2 text-2xl">{label}</p>
      <Divider width={"100%"} />

      <div className="p-2 flex ">
        {options?.map((option, index) => (
          <label key={index} className="flex items-center space-x-24">
            <span className="mx-2">{option.text}</span>
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={value == option.id}
              onChange={handleChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroupQestions;
