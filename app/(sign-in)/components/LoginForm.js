"use client";
import { useLoginMutation } from "@/Redux/API/AuthAPI";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Cookies from "js-cookie";
const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [login, { isLoading, error, isSuccess, data }] = useLoginMutation();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials).then((res) => {
      if (res?.data?.data?.token) {
        setIsRedirecting(true);
      }
    });
  };

  const handleChange = (e) => {
    setCredentials((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Cookies.set("token", data?.data?.token, {
        expires: 1,
        secure: true,
        sameSite: "Lax",
      });

      Cookies.set("username", credentials.username, {
        expires: 1,
        secure: true,
        sameSite: "Lax",
      });
      router.push("/dashboard");
    }
  }, [isSuccess, router]);

  return (
    <form onSubmit={handleSubmit} className="md:col-span-2 col-span-full m-10">
      <h1 className="text-6xl font-light mb-6">أهلا بك</h1>
      <div className="w-full ">
        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-xl font-medium text-gray-700"
          >
            اسم المستخدم او الايميل
          </label>
          <input
            id="email"
            name="username"
            placeholder="youremail@nour.com"
            className="py-5 my-3 px-2 bg-[#F5F7F8] w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleChange}
            value={credentials.username}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <div className="flex justify-between items-end">
            <label
              htmlFor="password"
              className="block text-xl font-medium text-gray-700"
            >
              كلمة المرور
            </label>
            <span
              htmlFor="password"
              className="block text-xs font-medium text-gray-700"
            >
              نسيت كلمة المرور
            </span>
          </div>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="ادخل كلمة المرور"
              className="py-5 my-3 px-2 bg-[#F5F7F8] w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handleChange}
              value={credentials.password}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={`absolute inset-y-0 left-0 flex items-center px-3 text-2xl text-gray-500`}
            >
              {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-600">
            {error?.status == 401
              ? "خطأ في كلمة السر "
              : error?.status == 404
              ? "غير موجود"
              : "حدث خطأ ما"}
          </p>
        )}

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={isLoading || isRedirecting}
          className={`w-full transition-all py-5 mt-3 px-2 rounded   text-white font-semibold  ${
            isLoading || isRedirecting
              ? "bg-gray-400 text-gray-800"
              : "bg-main text-white hover:bg-[#02606e]"
          }`}
        >
          تسجيل الدخول
        </button>
      </div>
      <p className="mt-8">
        ليس لديك حساب ؟<span className="text-main">تواصل معنا </span>
      </p>
    </form>
  );
};

export default LoginForm;
