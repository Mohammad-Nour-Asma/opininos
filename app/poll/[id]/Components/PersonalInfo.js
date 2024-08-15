"use client";
import React, { memo } from "react";
import Input from "../../../../Components/Input";
import Divider from "../../../../Components/Divider";
import RadioGroupUser from "./RadioGroupUser";
import { useDispatch, useSelector } from "react-redux";
import { basicInfo } from "@/Redux/Slices/FormSlice";

const PersonalInfo = memo(() => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(basicInfo({ name: e.target.name, value: e.target.value }));
  };

  const formSlice = useSelector((state) => state.formSlice);

  return (
    <div>
      <Input
        value={formSlice.name}
        name={"name"}
        onChange={handleChange}
        label="الاسم"
        id={1}
      />
      <Input
        name={"email"}
        onChange={handleChange}
        label="البريد الاكتروني"
        id={2}
        value={formSlice.email}
      />

      <div className="p-4">
        <Divider width={"80%"} />
        <RadioGroupUser
          handleChange={handleChange}
          label="الحالة الوظيفية"
          name="employment_status"
          value={formSlice.employment_status}
          options={[
            { label: "طالب", value: "student" },
            { label: "موظف", value: "employee" },
            { label: "صاحب عمل", value: "entrepreneur" },
          ]}
        />
        <Divider width={"80%"} />
      </div>
      <Input
        value={formSlice.teaching}
        name={"teaching"}
        onChange={handleChange}
        label="التعليم"
        id={2}
      />
      <div className="md:grid grid-cols-2  gap-2 block">
        <Input
          name={"date_of_birth"}
          onChange={handleChange}
          value={formSlice.date_of_birth}
          label="تاريخ الولادة"
          id={3}
        />
        <Input
          value={formSlice.age}
          name={"age"}
          onChange={handleChange}
          label="العمر"
          id={4}
        />
      </div>

      <Input
        name={"address"}
        onChange={handleChange}
        value={formSlice.address}
        label="عنوان السكن"
        id={2}
      />

      <div className="p-4">
        <Divider width={"80%"} />
        <RadioGroupUser
          value={formSlice.gender}
          handleChange={handleChange}
          label="الجنس"
          selectedValue={formSlice.gender}
          name="gender"
          options={[
            { label: "ذكر", value: "male" },
            { label: "أنثى", value: "female" },

            // selectedValue={selectedGender}
            // onChange={handleGenderChange}
          ]}
        />
      </div>
    </div>
  );
});

export default PersonalInfo;
