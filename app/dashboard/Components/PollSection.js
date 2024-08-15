"use client";
import React, { useMemo, useState } from "react";
import Table from "./Table";
import PopupPollUsers from "./PopupPollUsers";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionHeader from "./SectionHeader";
import { useDeletePollMutation, useGetPollsQuery } from "@/Redux/API/PollApi";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
const PollSection = ({}) => {
  const { data, isLoading } = useGetPollsQuery();
  const [deletePoll, { isLoading: delteLoading }] = useDeletePollMutation();
  const [popup, setPopup] = useState({ open: false, pollId: null });

  const closePopup = () => {
    setPopup({ open: false });
  };
  const openPopup = (id) => {
    setPopup({ open: true, pollId: id });
  };

  const columns = useMemo(() => {
    return [
      {
        key: "id",
        header: "المعرف",
      },

      {
        key: "title",
        header: "عنوان الاستبيان",
        cell: (row) => {
          return (
            <span
              onClick={() => {
                openPopup(row.id);
              }}
              className="underline cursor-pointer"
            >
              {row.title}
            </span>
          );
        },
      },
      {
        key: "",
        header: "عدد الاسئلة",
        cell: (row) => {
          return <span>{row?.questions?.length}</span>;
        },
      },
      {
        key: "",
        header: "النتائج",
        cell: (row) => {
          return <span>{row?.questions?.length}</span>;
        },
      },
      {
        key: "description",
        header: "وصف الاستبيان",
      },
      {
        key: "createdAt",
        header: "تاريخ الاستبيان",
        cell: (row) => {
          return (
            <span>{new Date(row.createdAt).toLocaleDateString("ar-EG")}</span>
          );
        },
      },
      {
        key: "",
        header: "اجراء",
        cell: (row) => {
          return (
            <span className="flex gap-4 justify-center">
              <button disabled={delteLoading}>
                <RiDeleteBin6Line
                  onClick={() => {
                    deletePoll(row.id);
                  }}
                  className={`text-2xl  ${
                    delteLoading
                      ? "text-gray-400 cursor-auto"
                      : "text-red-500 cursor-pointer"
                  }`}
                />
              </button>
              <MdEdit className="text-2xl cursor-pointer text-gray-500" />
              <Link href={"/poll/" + row.id}>
                <FaRegEye className="text-xl cursor-pointer text-gray-500" />
              </Link>
            </span>
          );
        },
      },
    ];
  }, [delteLoading]);

  if (isLoading) {
    return <p className="m-6 text-center">جاري التحميل...</p>;
  }
  return (
    <div class="shadow-lg m-4 p-4">
      <SectionHeader />
      {popup.open && (
        <PopupPollUsers closePopup={closePopup} pollId={popup.pollId} />
      )}
      <Table data={data.data} columns={columns} />
    </div>
  );
};

export default PollSection;
