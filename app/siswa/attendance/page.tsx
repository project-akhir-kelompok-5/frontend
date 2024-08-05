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
import CopyToClipboardButton from "@/component/CopyToClipboardButton";

export default function Home() {
  const { data: session, status } = useSession();
  console.log("session:", session);
  const router = useRouter();
  const textToCopy = "A78P1";

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) {
      router.push("/login"); // Redirect to login if no session
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Optionally render a loading state while checking session
  }
  return (
    <main className="w-screen h-full">
      <div className="w-full px-10 py-5 border-b bg-[#023E8A] flex flex-row justify-between items-center">
        <picture>
          <Image src={hadirpak} alt="hadir" />
        </picture>
        <div className="flex gap-10">
          <a href="/siswa/dashboard" className="font-quick text-white text-base">
            Dashboard
          </a>
          <a href="/" className="font-quick text-[#FFBC25] text-base">
            Attendance
          </a>
          <a href="#" className="font-quick text-white text-base">
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
              <a onClick={() => signOut()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      {/* --------------- navbar ---------------- */}

      <div className="px-10 w-full h-screen">
        <div className="w-full flex justify-between items-center">
          <div className="my-10 flex flex-col gap-3">
            <h1 className="font-quick text-3xl font-medium">
              Hi, Ramzi Respati
            </h1>
            <div className="flex flex-row gap-2">
              <picture>
                <Image src={logo} alt="user" width={35} height={35} />
              </picture>
              <h1 className="font-quick text-2xl">
                SMK Madinatul Quran | Student
              </h1>
            </div>
            <div className="flex gap-2">
              <h1 className="font-quick text-2xl font-medium text-[#2F3E46]">
                Class code : <span className="font-semibold">{textToCopy}</span>
              </h1>
              <CopyToClipboardButton text={textToCopy} />
            </div>
          </div>
          <div className="font-quick text-right">
            <h1 className="font-medium text-6xl">Database Class</h1>
            <p className="font-medium  text-3xl text-[#495057] mt-1">
              07.30 - 10.00 PM{" "}
            </p>
          </div>
        </div>
        {/* ------------ dashboard --------------- */}

        <hr className="w-full border mt-20"/>

        <div className="w-full flex flex-col justify-center items-center text-center font-quick mt-32">
            <h1 className="w-[760px] font-medium text-4xl">Please enter your teacher`s class code in the column below to access your class!</h1>
            <div className="border-b border-[#6C757D] border-x-0 border-t-0 focus:border-[#6C757D] w-48 mt-16">
                <input type="text" placeholder="Class Code" className="w-full font-quick font-medium border-0 focus:ring-0"/>
            </div>
            <button className="btn btn-outline mt-6 w-96 hover:bg-[#023E8A]">Submit</button>
        </div>
      </div>
    </main>
  );
}
