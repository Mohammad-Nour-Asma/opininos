import React from "react";
import AddPollForm from "./components/AddPollForm";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl">اضافة استبيان</h1>
      <AddPollForm />
    </div>
  );
};

export default page;
