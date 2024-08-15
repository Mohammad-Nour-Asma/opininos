"use client";
import PopupLayout from "@/Components/PopupLayout";
import React from "react";
import Table from "./Table";
import { useGetPullUsersQuery } from "@/Redux/API/PollApi";

const PopupPollUsers = ({ pollId, closePopup }) => {
  const { data, isLoading } = useGetPullUsersQuery(pollId);

  return (
    <PopupLayout title={"اسماء الاشخاص"}>
      {isLoading ? (
        <p>جاري التحميل</p>
      ) : (
        <Table data={fomratData(data?.data.answers)} columns={columns} />
      )}
      <button
        onClick={closePopup}
        class="bg-gray-500 mt-4 text-white py-1 px-2 rounded text-sm hover:bg-gray-600 "
      >
        الغاء
      </button>
    </PopupLayout>
  );
};

export default PopupPollUsers;

const fomratData = (answers) => {
  const newFormatedData = answers?.map((item) => item.user);
  return newFormatedData;
};

const columns = [
  {
    key: "id",
    header: "المعرف",
  },
  {
    key: "name",
    header: "الاسم",
  },
  {
    key: "email",
    header: "الايميل",
  },
  {
    key: "address",
    header: "السكن",
  },
];
