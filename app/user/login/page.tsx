"use client";
import Image from "next/image";
import logo from "/public/images/logo-SMK.png";
import text from "/public/images/text.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const Login = () => {
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
            <h1 className="font-quick font-medium text-4xl">Welcome Back</h1>
            <p className="font-quick text-[#6C757D] text-[18px]">
              Hi there nice to see you again, please enter your detail bellow.
            </p>
          </div>
          <div className="w-[494px]">
            <div className="w-full flex flex-col gap-8 mt-20 mb-9">
              <input
                type="text"
                placeholder="Email"
                className="font-quick font-medium border-b border-[#6C757D] border-x-0 border-t-0 focus:ring-0 focus:border-[#6C757D]"
              />
              <div className="flex flex-col gap-4">
                <div className=" flex border-b border-[#6C757D] border-x-0 border-t-0 focus:border-[#6C757D]">
                  <input
                    type={passwordType}
                    placeholder="Password"
                    className="w-full font-quick font-medium border-none focus:ring-0"
                  />
                  <button onClick={togglePasswordVisibility}>
                    {passwordType === "password" ? (
                      <EyeIcon className="w-6 cursor-pointer text-gray-300 hover:text-black ease-in-out duration-150" />
                    ) : (
                      <EyeSlashIcon className="w-6 cursor-pointer text-gray-300 hover:text-black ease-in-out duration-150" />
                    )}
                  </button>
                </div>
                <div className="flex justify-between ">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox w-6"
                      />
                      <span className="label-text mx-2 font-quick text-[#495057] text-md">
                        Remember for 30 days
                      </span>
                    </label>
                  </div>
                  <a
                    href="/user/forgot"
                    className="font-quick font-medium textarea-md underline underline-offset-4"
                  >
                    Forgot Password
                  </a>
                </div>
              </div>
            </div>
            <button className="btn btn-outline w-full">Login</button>
          </div>
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

export default Login;
