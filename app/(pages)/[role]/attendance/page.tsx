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
import AdminAttendance from "./component attendance/AdminPage";
import SiswaAttendance from "./component attendance/SiswaPage";
import notAccess from "/public/images/not-access1.png";

export default function Home( { params }: { params: { role: string } }) {
  const { data: session, status } = useSession();
  console.log("session:", session);
  const router = useRouter();
  const textToCopy = "A78P1";
  var role = params.role

  if (role === "guru") {
    return (
      <main className="w-screen h-full">
        <AdminAttendance/>
      </main>
    );
  }
  if (role === "siswa") {
    return (
      <main className="w-screen h-full">
        <SiswaAttendance/>
      </main>
    );
  }

  if (status === "loading") {
    return <div>Loading...</div>; // Optionally render a loading state while checking session
  }
  return (
    <div className="w-full h-screen flex items-center justify-center font-quick">
      {/* <h1 className="text-5xl font-bold">Not Access!</h1> */}
      
    </div>
  );
}
