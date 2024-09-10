"use client"
import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={() => signIn("google")}
        className="bg-white border border-[#D0D5DD] rounded-lg text-sm hover:bg-main-bg"
      >login</button>
    </div>
  );
};

export default page;
