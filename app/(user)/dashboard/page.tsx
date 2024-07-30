"use client";
import Image from "next/image";
import profile from "/public/images/profile.png";
import logo from "/public/images/logo.png";
import { Table, Th, Thead, Tr, Tbody, Td } from "@/component/Table";
import {
  AcademicCapIcon,
  UsersIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import hadirpak from "/public/images/HadirPak_putih.png";

const Dashboard = () => {
  return (
    <main className="w-screen h-full">
      <div className="w-full px-10 py-5 border-b bg-[#023E8A] flex flex-row justify-between items-center">
        <picture>
          <Image src={hadirpak} alt="hadir" />
        </picture>
        <div className="flex gap-10">
          <a href="" className="font-quick text-[#FFBC25] text-base">
            Dashboard
          </a>
          <a href="" className="font-quick text-white text-base">
            Attendance
          </a>
          <a href="" className="font-quick text-white text-base">
            Userdata
          </a>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center h-10 w-20 bg-blue-700 rounded-r-3xl rounded-l-md"
          >
            <div>
              <ChevronDownIcon className="w-8 text-white" />
            </div>
            <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
              <picture>
                <Image src={profile} alt="user" width={50} height={50} />
              </picture>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------------------------------------------- */}

      <div className="w-screen px-8">
        <div className="flex w-full justify-between my-10 items-center">
          <div className="flex flex-col gap-3">
            <h1 className="font-quick text-3xl font-medium">
              Hi, Akbar Rismawan
            </h1>
            <div className="flex flex-row gap-2">
              <picture>
                <Image src={logo} alt="user" width={35} height={35} />
              </picture>
              <h1 className="font-quick text-3xl">
                SMK Madinatul Quran | Teacher
              </h1>
            </div>
          </div>
          <div className="w-[672px] flex gap-6 items-center">
            <h1 className="text-[100px] text-[#0077B6] font-quick font-light">00:10:43</h1>
            <h1 className="font-quick font-medium text-2xl text-[#495057]">left before check-in to database class</h1>
          </div>
        </div>
        {/*  */}
        <button className="btn btn-outline w-full h-[60px] mt-10 text-[#212529] text-3xl font-quick font-semibold py-3">Take an attendance before, Click me!</button>

        {/*  */}

        <hr className="w-full border border-[#6C757D] mt-8"/>
      </div>
    </main>
  );
};

export default Dashboard;
