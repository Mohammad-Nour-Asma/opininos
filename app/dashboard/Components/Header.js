"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Cookies from "js-cookie";
const Header = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const user = Cookies.get("username");
    setUsername(user);
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <div className="w-[20%]">
          <p>{username}</p>
          <p>مرحبا بك</p>
        </div>
        <div className="relative w-[80%]">
          <input
            type={"text"}
            placeholder="البحث"
            className="py-3 my-3 px-2 bg-[#F5F7F8] w-full focus:outline-none rounded-xl focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <button
            type="button"
            className={`absolute inset-y-0 left-0 flex items-center px-3 text-lg text-gray-500`}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
