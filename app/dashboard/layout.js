import React from "react";
import "../globals.css";

const layout = ({ children }) => {
  return (
    <section className="grid grid-cols-6 h-screen">
      <div className="md:col-span-5 col-span-full py-4  px-6">{children}</div>

      <div
        className={`col-span-1 hidden md:block text-right p-4 computerImage `}
      ></div>
    </section>
  );
};

export default layout;
