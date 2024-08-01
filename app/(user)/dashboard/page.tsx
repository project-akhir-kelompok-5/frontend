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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import hadirpak from "/public/images/HadirPak_putih.png";
import DoughnutChart from "@/component/DoughnutChart";
import React from "react";
import Footer from "@/component/Footer";
import { Chart, ChartOptions, LegendItem } from "chart.js";
import { ChartData } from "chart.js";
import TableJadwal from "@/component/ScheduleTable";
import TeacherTable from "@/component/TeacherSchedule";
import DoughnutComponent from "./component/DONUTCHART";

const Dashboard = () => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(24);
  const [hours, setHours] = useState(10);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds, minutes, hours]);

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
          <a href="/" className="font-quick text-white text-base">
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
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="rounded-full">
              <picture>
                <Image src={profile} alt="user" width={80} height={80} />
              </picture>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
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
            {/* <h1 className="text-[100px]  font-quick font-light">00:10:43</h1> */}
            <span className="countdown text-[100px] font-light text-[#495057]">
              <span style={{ "--value": hours } as any}></span>:
              <span style={{ "--value": minutes } as any}></span>:
              <span style={{ "--value": seconds } as any}></span>
            </span>
            <h1 className="font-quick font-medium text-2xl text-[#495057] ">
              left before check-in to database class
            </h1>
          </div>
        </div>
        {/*  */}
        <button className="btn btn-outline w-full hover:bg-[#023E8A] h-[60px] mt-10 text-[#212529] text-3xl font-quick font-semibold py-3">
          Take an attendance before, Click me!
        </button>
        {/*  */}
        <hr className="w-full border border-[#6C757D] mt-8" />
        {/*  */}
        <div className="flex md:flex-row flex-col my-8 justify-evenly">
          <DoughnutComponent title="Weekly" absen={25} attendece={25} permission={50}/>
          <DoughnutComponent title="Monthly" absen={25} attendece={25} permission={50}/>
          <DoughnutComponent title="Semester Basis" absen={25} attendece={25} permission={50}/>
        </div>
        {/*  */}
        <div className="flex w-full justify-between mb-6">
          <h1 className="font-quick font-medium text-lg text-[#495057] w-[708px]">
            This will kindly remind you of your attendance each time you clock
            in, whether it be weekly, monthly, or per semester.
          </h1>
          <button className="btn btn-outline font-semibold text-[16px]">
            Download Recap
          </button>
        </div>
        {/*  */}
        <hr className="w-full border border-[#6C757D]" />
        {/*  */}

        <div className="flex w-full justify-between mt-6">
          <div className="">
            <h1 className="font-quick font-semibold text-4xl text-[#212529]">Today`s Class</h1>
            <h1 className="font-quick font-medium text-lg text-[#495057] w-[708px] mt-2">
              Today`s class is a <span className="font-bold">database class</span> , please enter the class that is
              already available in the schedule or click button beside.
            </h1>
          </div>
          <button className="btn btn-outline font-semibold text-[24px] px-16 h-[98px]">
            Enter class
          </button>
        </div>

        <div className="flex w-full justify-between mt-12">
          <h1 className="font-quick font-semibold text-2xl text-[#212529]">
            Schedule
          </h1>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex font-quick font-semibold m-1"
            >
              <ChevronDownIcon className="w-5" /> Monday
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        {/* <div className="mt-6 font-quick">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-800 text-white">Clock</th>
                <th className="py-2 px-4 bg-blue-800 text-white">X RPL</th>
                <th className="py-2 px-4 bg-blue-800 text-white">X TKJ</th>
                <th className="py-2 px-4 bg-blue-800 text-white">XI RPL</th>
                <th className="py-2 px-4 bg-blue-800 text-white">XI TKJ</th>
                <th className="py-2 px-4 bg-blue-800 text-white">XII RPL</th>
                <th className="py-2 px-4 bg-blue-800 text-white">XII TKJ</th>
              </tr>
            </thead>
            <tbody className="font-semibold text-lg">
              <tr>
                <td className="border-t py-2 px-4">07.00 - 08.30</td>
                <td className="border-t py-2 px-4">A1</td>
                <td className="border-t py-2 px-4 text-blue-600">B2</td>
                <td className="border-t py-2 px-4">C1</td>
                <td className="border-t py-2 px-4">A1</td>
                <td className="border-t py-2 px-4 text-blue-600">B2</td>
                <td className="border-t py-2 px-4">C1</td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4">08.30 - 10.30</td>
                <td className="border-t py-2 px-4">A1</td>
                <td className="border-t py-2 px-4 text-blue-600">B2</td>
                <td className="border-t py-2 px-4">C1</td>
                <td className="border-t py-2 px-4">A1</td>
                <td className="border-t py-2 px-4 text-blue-600">B2</td>
                <td className="border-t py-2 px-4">C1</td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4">10.30 - 11.30</td>
                <td className="border-t py-2 px-4">A1</td>
                <td className="border-t py-2 px-4 text-blue-600">B2</td>
                <td className="border-t py-2 px-4">C1</td>
                <td className="border-t py-2 px-4">A1</td>
                <td className="border-t py-2 px-4 text-blue-600">B2</td>
                <td className="border-t py-2 px-4">C1</td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4">11.30 - 13.15</td>
                <td className="border-t py-2 px-4" colSpan={6}>
                  Rest
                </td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4">13.15 - 14.45</td>
                <td className="border-t py-2 px-4">A1</td>
                <td className="border-t py-2 px-4 text-blue-600">B2</td>
                <td className="border-t py-2 px-4">C1</td>
                <td className="border-t py-2 px-4">A1</td>
                <td className="border-t py-2 px-4 text-blue-600">B2</td>
                <td className="border-t py-2 px-4">C1</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between items-center px-8 py-3 bg-[#023E8A]">
            <h1 className="text-white font-semibold text-lg">Monday schedule</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-white text-white rounded">
                Prev
              </button>
              <button className="px-4 py-2 border border-white text-white rounded">
                Next
              </button>
            </div>
          </div>
        </div> */}
        <TableJadwal />
        {/*  */}
        {/* <div className="overflow-x-auto my-8">
          <table className="min-w-full bg-white font-quick">
            <thead>
              <tr className="bg-[#023E8A] text-white">
                <th className="w-1/12 py-2 px-4">NO</th>
                <th className="w-4/12 py-2 px-4">TEACHER`S NAME</th>
                <th className="w-4/12 py-2 px-4">SUBJECT NAME</th>
                <th className="w-1/12 py-2 px-4">SUBJECT CODE</th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
                <td className="border border-black px-4 py-2">1</td>
                <td className="border border-black px-4 py-2">
                  Ihsan Santana Wibawa
                </td>
                <td className="border border-black px-4 py-2">
                  Fullstack Developer
                </td>
                <td className="border border-black px-4 py-2">A1</td>
              </tr>
              <tr className="">
                <td className="border-x border-black px-4 py-2">
                  <tbody>
                    <tr>
                      <td className="">2</td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </td>
                <td className="border border-black px-4 py-2" rowSpan={2}>
                  Akbar Rismawan Tanjung
                </td>
                <td className="border border-black px-4 py-2">Database</td>
                <td className="border border-black px-4 py-2">B1</td>
              </tr>
              <tr>
                <td className="border-x border-black px-4 py-2"></td>
                <td className="border border-black px-4 py-2">Javascript</td>
                <td className="border border-black px-4 py-2">B2</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">3</td>
                <td className="border border-black px-4 py-2">
                  Dedi Hidayatullah
                </td>
                <td className="border border-black px-4 py-2">
                  Indonesian Language
                </td>
                <td className="border border-black px-4 py-2">C1</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">4</td>
                <td className="border border-black px-4 py-2">Zidni Ilman</td>
                <td className="border-y border-t border-b-0 border-black"></td>
                <td className="border border-black px-4 py-2">C1</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">5</td>
                <td className="border border-black px-4 py-2">
                  Darmansyah Yamin
                </td>
                <td className="border-y border-b border-t-0 border-black px-4 py-2">
                  P5
                </td>
                <td className="border border-black px-4 py-2">C1</td>
              </tr>
            </tbody>
          </table>
        </div> */}
        <TeacherTable/>
      </div>
      <Footer />
    </main>
  );
};

export default Dashboard;
