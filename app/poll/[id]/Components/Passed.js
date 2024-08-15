import React from "react";

const Passed = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-60" src="/Images/success.png" />
      <p className="py-2 text-center text-2xl text-main">تم الانتهاء</p>
      <p className="py-2 text-center text-sm text-secondary">
        شرح عن الاستطلاع
      </p>
    </div>
  );
};

export default Passed;
