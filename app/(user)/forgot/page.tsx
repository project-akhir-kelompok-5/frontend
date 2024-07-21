"use client";
import Image from "next/image";
import logo from "/public/images/logo-SMK.png";
import text from "/public/images/text.png";
import text_mobile from "/public/images/text_mobile.png";
import {
  EyeIcon,
  EyeSlashIcon,
  ChevronLeftIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "next/link";
import InputFieldAuth from "@/component/InputText";

const Forgot = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [value, setValues] = useState({ password: "" });

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <section className="w-screen h-screen flex flex-row">
      <div className="h-full w-full px-4 py-32 md:px-9 md:py-9 flex flex-col items-center md:items-start">
      <picture className="md:w-auto hidden md:flex">
          <Image src={text} alt="text" />
        </picture>
        <picture className="scale-110 flex md:hidden">
          <Image src={text_mobile} alt="text" />
        </picture>
        <div className="w-full md:w-auto px-6 md:mt-[215px] mt-[117px]">
          <div className="flex flex-col gap-2 w-[423px]">
            <h1 className="font-quick font-medium text-2xl md:text-4xl">
              Forgot Password?
            </h1>
            <p className="font-quick text-[#6C757D] text-lg md:text-[18px]">
              Enter your email and we’ll send you the reset instructions.
            </p>
          </div>
          <div className="w-full mt-16 md:mt-0 md:w-[494px]">
            <div className="w-full flex flex-col gap-8 mt-10 md:mt-20 mb-3 md:mb-9">
              <InputFieldAuth
                type="text"
                name="email"
                placeholder="Email"
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // error={formik.errors.email}
                // touched={formik.touched.email}
              />
            </div>
            <button className="btn btn-outline w-full">Submit</button>
          </div>
          <Link href={"/login"} className="flex my-2">
            <ChevronLeftIcon className="w-5" />
            <p className="textarea-md">Back To Login</p>
          </Link>
        </div>
      </div>
      <div className="bg-bgLogin h-40  md:h-full w-full md:w-[170rem] bg-cover px-4 py-4 md:px-9 md:py-9 hidden md:flex justify-center md:justify-end">
        <picture className="w-24 md:w-auto">
          <Image src={logo} alt="logo" width={104} />
        </picture>
      </div>
    </section>
  );
};

export default Forgot;
