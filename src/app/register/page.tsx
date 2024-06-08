"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
  gender: string;
  country: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  if (!hydrated) {
    return null;
  }
  return (
    <div className="flex border-2 h-screen bg-indigo-600 shadow-lg justify-center items-center">
      <div className="w-96 p-6 rounded-md bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <h1 className="text-4xl block font-semibold text-center">Register</h1>
          <label className="block text-base mb-2 font-medium mt-3">
            First Name:
          </label>
          <input
            className="border w-full text-base px-2 py-1 focus:outline-none rounded-lg p-2"
            type="text"
            placeholder="First Name"
            {...register("firstname", {
              required: "Please enter a valid first name",
              maxLength: {
                value: 15,
                message: "First name cannot exceed 15 characters",
              },
              minLength: {
                value: 3,
                message: "First name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Invalid first name",
              },
            })}
          />
          <div className="text-red-700">
            {errors.firstname && errors.firstname.message}
          </div>
          <label className="block text-base mb-2 font-medium mt-3">
            Last Name:
          </label>
          <input
            className="border w-full text-base px-2 py-1 focus:outline-none rounded-lg p-2"
            type="text"
            placeholder="Last Name"
            {...register("lastname", {
              required: "Please enter a valid last name",
              maxLength: {
                value: 15,
                message: "Last name cannot exceed 15 characters",
              },
              minLength: {
                value: 3,
                message: "Last name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Invalid last name",
              },
            })}
          />
          <div className="text-red-700">
            {errors.lastname && errors.lastname.message}
          </div>
          <label className="block text-base mb-2 font-medium mt-3">
            Email:
          </label>
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
              pattern: {
                value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          <div className="text-red-700">
            {errors.email && errors.email.message}
          </div>
          <label className="block text-base mb-2 font-medium mt-3">
            Password:
          </label>
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
          <label className="block text-base mb-2 font-medium mt-3">
            Birth Date:
          </label>
          <input
            className="border w-full text-base px-2 py-1 focus:outline-none rounded-lg p-2"
            type="datetime-local"
            placeholder="Birth Date"
            {...register("birthdate", {
              required: "Please enter your birth date",
            })}
          />
          <div className="text-red-700">
            {errors.birthdate && errors.birthdate.message}
          </div>
          <label className="block text-base mb-2 font-medium mt-3">
            Gender:
          </label>
          <input
            {...register("gender", { required: "Please select a gender" })}
            type="radio"
            value="male"
          />
          <label>Male</label>
          &nbsp;
          <input
            {...register("gender", { required: "Please select a gender" })}
            type="radio"
            value="female"
          />
          <label>Female</label>
          <div className="text-red-700">
            {errors.gender && errors.gender.message}
          </div>
          <br />
          <label>Country:</label>
          <select
            {...register("country", { required: "Please select a country" })}
          >
            <option value="">Select</option>
            <option value="Nepal">Nepal</option>
            <option value="China">China</option>
            <option value="India">India</option>
          </select>
          <div className="text-red-700">
            {errors.country && errors.country.message}
          </div>
          <br />
          <button
            type="submit"
            className="border-3 text-white border-indigo-700 bg-indigo-700 py-1 w-full rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
