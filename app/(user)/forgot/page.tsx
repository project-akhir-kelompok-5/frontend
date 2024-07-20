"use client";
import Image from "next/image";
import logo from "/public/images/logo-SMK.png";
import text from "/public/images/text.png";
import { EyeIcon, EyeSlashIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "next/link";

const Forgot = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [value, setValues] = useState({ password: "" });

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <section className="w-screen h-screen flex flex-row">
      <div className="h-full w-full px-9 py-9 flex flex-col">
        <picture>
          <Image src={text} alt="text" />
        </picture>
        <div className="my-[215px] flex flex-col mx-7">
          <div className="flex flex-col gap-2 w-[423px]">
            <h1 className="font-quick font-medium text-4xl">Forgot Password?</h1>
            <p className="font-quick text-[#6C757D] text-[18px]">
            Enter your email and we’ll send you the reset instructions. 
            </p>
          </div>
          <div className="w-[494px]">
            <div className="w-full flex flex-col gap-8 mt-20 mb-9">
            <input
                type="text"
                placeholder="Email"
                className="font-quick font-medium border-b border-[#6C757D] border-x-0 border-t-0 focus:ring-0 focus:border-[#6C757D]"
              />
            </div>
            <button className="btn btn-outline w-full">Submit</button>
          </div>
          <Link href={'/user/login'} className="flex my-2">
            <ChevronLeftIcon className="w-5"/>
            <p className="textarea-md">Back To Login</p>
          </Link>
        </div>
      </div>
      <div className="bg-bgLogin h-full w-[170rem] bg-cover px-9 py-9 flex justify-end">
        <picture>
          <Image src={logo} alt="logo" width={104} />
        </picture>
      </div>
    </section>
  );
};

export default Forgot;
