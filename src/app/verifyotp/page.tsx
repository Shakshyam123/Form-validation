"use client";

import React from "react";
import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { verify } from "crypto";

import { useRouter } from "next/navigation";

interface IFormInput {
  otp: string;
}
const VerifyOtp: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await router.push("/updatepassword");

    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex border-2 h-screen bg-indigo-600 shadow-lg justify-center items-center ">
        <div className="w-96 rounded-md bg-white p-5">
          <h1 className="text-xl font-bold mb-2">Enter Otp</h1>
          <input
            className="w-full border-2 p-2 rounded-lg"
            type="text"
            placeholder="Enter OTP"
            maxLength={6}
            pattern="[0-9]*"
            inputMode="numeric"
            required
            title="Please enter only numeric characters."
          />

          <div className="flex justify-end mt-  3 gap-2">
            <Link
              href="/forgotPassword"
              className="bg-slate-300 p-1 rounded-lg font-semibold"
            >
              Cancel
            </Link>
            <button
              className="bg-green-500 p-1 rounded-lg text-white font-semibold"
              type="submit"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default VerifyOtp;
