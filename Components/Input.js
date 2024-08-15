import React from "react";

const Input = ({ label, id, name, onChange, value }) => {
  return (
    <div className="flex gap-3 m-3 items-center">
      <label className="w-[15%]" htmlFor={id}>
        {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        className="w-[85%] py-[0.4rem] px-2 bg-[#F5F7F8] focus:outline-none focus:ring-main focus:border-main"
        id={id}
        type="string"
        value={value}
      />
    </div>
  );
};

export default Input;
