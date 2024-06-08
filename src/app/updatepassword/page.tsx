"use client";

import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IFormInput {
  newPassword: string;
  confirmPassword: string;
}

const UpdatePassword: NextPage = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.newPassword === data.confirmPassword) {
      await router.push("/loginform?updated=true");
    } else {
      setErrorMessage("!password do not match!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex border-2 h-screen bg-indigo-600 shadow-lg justify-center items-center">
        <div className="w-96 rounded-md bg-white p-5">
          <h1 className="font-bold text-xl mb-4">Update password</h1>
          <input
            {...register("newPassword")}
            className="w-full border-2 p-2 rounded-lg "
            type="password"
            placeholder="New password"
            maxLength={6}
            pattern="[0-9]*"
            inputMode="numeric"
            required
            title="Please enter only numeric characters."
          />
          <input
            {...register("confirmPassword")}
            className="w-full border-2 p-2 rounded-lg"
            type="password"
            placeholder="Confirm new password"
            maxLength={6}
            pattern="[0-9]*"
            inputMode="numeric"
            required
            title="Please enter only numeric characters."
          />
          <div className="text-red-600">{errorMessage}</div>
          <div className="flex justify-end mt-3 gap-2">
            <Link
              href="/verifyotp"
              className="bg-slate-300 p-1 rounded-lg font-semibold"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-green-500 p-1 rounded-lg text-white font-semibold"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdatePassword;
