import React from "react";
import FormHeader from "./FormHeader";
import Button from "./Button";
import RequiredInfo from "./RequiredInfo";

const Form = ({ data }) => {
  return (
    <div className="min-h-[100vh] relative">
      <div className="p-2 ">
        <FormHeader />
        <RequiredInfo data={data} />
      </div>
      <Button />
    </div>
  );
};

export default Form;
