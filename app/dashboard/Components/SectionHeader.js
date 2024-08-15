"use client";
import { useRouter } from "next/navigation";
import React, { memo } from "react";

const SectionHeader = memo(() => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center my-4">
      <h2 className="text-2xl">الاستطلاعات</h2>
      <div className="flex gap-3">
        <button className="bg-gray-100 font-semibold  text-sm text-main rounded-lg px-2 py-1">
          تصدير لاكسل
        </button>
        <button
          onClick={() => {
            router.push("/dashboard/add-poll");
          }}
          className="bg-main font-semibold text-sm text-white rounded-lg px-2 py-1"
        >
          اضافة
        </button>
      </div>
    </div>
  );
});

export default SectionHeader;
