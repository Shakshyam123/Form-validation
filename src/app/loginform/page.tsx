"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
  rememberMe: boolean;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    setHydrated(true);

    const updated = searchParams.get("updated"); // Accessing the 'id' query parameter
    if (updated === "true") {
      alert("Password updated successfully.");
    }
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await router.push("/navbar");
  };

  if (!hydrated) {
    return null;
  }

  return (
    <div className="flex border-2 h-screen bg-indigo-600 shadow-lg justify-center items-center">
      <div className="w-96 p-6 rounded-md bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl block font-semibold">
            <i className="fa-solid fa-user"></i>&nbsp;Login
          </h1>

          <label className="block text-base mb-2 font-medium mt-3">Email</label>
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

          <br />

          <label className="block text-base mb-2 font-medium">Password</label>
          <input
            className="border w-full text-base px-2 py-1 focus:outline-none rounded-lg p-2"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Please enter a valid password",
              maxLength: {
                value: 15,
                message: "Password cannot exceed 15 characters",
              },
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
              pattern: {
                value: /^[A-Za-z0-9]*$/,
                message: "Password must contain only letters and numbers",
              },
            })}
          />
          <div className="text-red-700">
            {errors.password && errors.password.message}
          </div>

          <br />
          <div className="flex items-center justify-between ">
            <div>
              <input type="checkbox" {...register("rememberMe")} />
              <label className="ml-2">Remember me</label>
            </div>
            <div>
              <Link href="/forgotPassword">Forgot Password?</Link>
            </div>
          </div>
          <br />

          <button
            type="submit"
            className="border-3 text-white border-indigo-700 bg-indigo-700 py-1 w-full rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
