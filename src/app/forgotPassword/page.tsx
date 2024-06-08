"use client";

import React from "react";
import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { verify } from "crypto";

import { useRouter } from "next/navigation";

interface IFormInput {
  email: string;
}

const ForgotPassword: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await router.push("/verifyotp");

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex border-2 h-screen bg-indigo-600 shadow-lg justify-center items-center">
        <div className="w-96 rounded-md bg-white p-5">
          <h1 className="pt-2 pb-3">Find your account</h1>
          <hr />
          <p className="pt-3 pb-3 text-sm">
            Please enter your email or mobile number to search for your account.
          </p>
          <input
            className="border w-full text-base px-2 py-1 focus:outline-none rounded-lg p-2"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Please enter a valid email",
              maxLength: {
                value: 30,
                message: "Email cannot exceed 30 characters",
              },
              minLength: {
                value: 5,
                message: "Email must be at least 5 characters",
              },
              pattern: { value: /@./, message: "Invalid email address" },
            })}
          />
          <div className="text-red-700">
            {errors.email && errors.email.message}
          </div>
          <hr className="mt-4 w-full" />
          <div className="flex justify-end mt-3 gap-2">
            <Link
              href="/loginform"
              className="bg-slate-300 p-1 rounded-lg font-semibold"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="bg-blue-500 p-1 rounded-lg text-white font-semibold"
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassword;
