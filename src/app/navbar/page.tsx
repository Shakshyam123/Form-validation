"use Client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Page() {
  return (
    <div className="">
      <div className="flex text-center justify-between h-12  mt-4 ml-4 mr-4">
        <div>
          <Image
            src="/logorw.png"
            alt="Logo"
            width={200}
            height={200}
            className="-mt-20"
          />
        </div>
        <div className="">
          <ul className="flex gap-7 font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <Link href="/loginform">
            <span className="bg-blue-600 border-2 p-2 mr-3 rounded-lg cursor-pointer">
              SignIn
            </span>
          </Link>
          <Link
            href="/register"
            className="bg-blue-600 border-2  p-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
      <div className="bg-slate-100 h-screen"></div>
    </div>
  );
}

export default Page;
