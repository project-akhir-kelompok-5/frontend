"use client";
import Image from "next/image";
import profile from "/public/images/profile.png";
import logo from "/public/images/logo.png";
import hadirpak from "/public/images/HadirPak_putih.png";
import { Table, Th, Thead, Tr, Tbody, Td } from "@/component/Table";
import img_1 from "/public/images/gambar1_crop.png";
import img_2 from "/public/images/gambar2_crop.png";
import img_3 from "/public/images/gambar3_crop.png";
import img_4 from "/public/images/gambar4_crop.png";
import {
  AcademicCapIcon,
  UsersIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

const LandingPage = () => {
  return (
    <main className="w-screen h-screen overflow-x-auto">
      <div className="w-full px-10 py-5 border-b bg-[#023E8A] flex flex-row justify-between items-center">
        <picture>
          <Image src={hadirpak} alt="hadir" />
        </picture>
        <div className="flex gap-20">
          <a href="" className="font-quick text-white text-base">
            Home
          </a>
          <a href="" className="font-quick text-white text-base">
            About
          </a>
          <a href="" className="font-quick text-white text-base">
            Features
          </a>
          <a href="" className="font-quick text-white text-base">
            Contact
          </a>
        </div>
        <button className="font-quick border border-white rounded-md px-3 py-1 text-[16px] text-white">
          Sign Up
        </button>
      </div>
      {/* --------------------- navbar ------------------ */}

      <div className="w-full h-[862px] bg-bgLanding bg-cover flex flex-col items-center justify-center text-white gap-5">
        <h1 className="font-quick text-5xl text-center">
          Welcome to the online attendance app <br /> of SMK Madinatul Quran
        </h1>
        <p className="font-quick text-3xl">Simplicity and accuracy in one</p>
        <button className="bg-[#023E8A] rounded-md py-3 px-7 text-2xl hover:transition duration-150 ease-in-out hover:bg-[#03316b]">
          Get Started
        </button>
      </div>
      {/*  */}

      <div className="w-full h-[746px] bg-[#F8F9FA] flex items-center justify-evenly">
        <div className="">
          <picture>
            <Image src={img_1} alt="lektop" />
          </picture>
        </div>
        <div className="flex flex-col items-center w-[558px]">
          <h1 className="text-[#0077B6] font-medium text-[50px] font-quick">
            About us
          </h1>
          <p className="font-quick text-2xl text-[#212529]">
            SMK attendance system is a digital platform that monitors and
            manages student attendance in real-time using technologies such as
            mobile applications and barcode scanning. The system automatically
            stores attendance data, generates reports, and provides teacher
            absence notifications.
          </p>
        </div>
      </div>
      {/*  */}

      <div className="flex items-center justify-evenly  mt-56 mb-[133px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#0077B6] font-medium text-[50px] font-quick">
            About us
          </h1>
          <p className="font-quick text-3xl text-[#212529] text-right">
            Make real-time attendance simple <br /> for users on the device they
            are <br /> using.
          </p>
        </div>
        <div className="">
          <picture>
            <Image src={img_2} alt="lektop" />
          </picture>
        </div>
      </div>
      {/*  */}

      <div className="w-full h-[746px] bg-[#F8F9FA] flex items-center justify-evenly">
        <div className="">
          <picture>
            <Image src={img_3} alt="lektop" />
          </picture>
        </div>
        <div className="flex flex-col gap-6 items-center w-[639px]">
          <h1 className="text-[#0077B6] font-medium text-[50px] font-quick">
            Notify you
          </h1>
          <p className="font-quick text-3xl text-[#212529] text-right">
            We will do our best to keep you informed <br /> about your
            attendance, any absences, and <br /> tardiness.
          </p>
        </div>
      </div>
      {/*  */}

      <div className="flex items-center justify-evenly  mt-56 mb-[133px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#0077B6] font-medium text-[50px] font-quick">
            Automatic report
          </h1>
          <p className="font-quick text-3xl text-[#212529] text-right">
            No need to worry! The attendance <br /> report will be generated{" "}
            <br /> automatically.
          </p>
        </div>
        <div className="">
          <picture>
            <Image src={img_4} alt="lektop" />
          </picture>
        </div>
      </div>
      {/*  */}

      <div className="w-full h-[711px] bg-[#F8F9FA] flex flex-col gap-12 items-center justify-center">
        <h1 className="font-quick text-[#0077B6] text-[50px] text-center font-medium">
          “This is a great tool for students, and it`s <br /> also perfect for
          taking attendance!”
        </h1>
        <div className="flex gap-3 items-center">
            <picture>
                <Image
                src={profile}
                alt="profile"
                width={60}
                />
            </picture>
            <div className="">
                <p className="font-quick font-medium text-xl">Ramzi Respati Putra Yulianto</p>
                <p className="font-quick text-lg text-[#495057]">XII Software Engineering</p>
            </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
