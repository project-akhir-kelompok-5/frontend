"use client";
import DoughnutChart from "@/component/DoughnutChart";
import React from "react";

const HomePage: React.FC = () => {
  const data = {
    labels: ["Hadir", "Izin", "Alpha"],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ["#FFBC25", "#023E8A", "#0077B6"], // Warna kuning, biru, biru tua
      },
    ],
  };

  const options = {
    animation: {
      animateRotate: true, // Mengaktifkan animasi rotasi
      animateScale: false, // Menonaktifkan animasi skala

    },
    plugins: {
      legend: {
        display: true,
        position: "" ,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || "";
            const value = context.raw || 0;
            return`${label}: ${value}%`;
          },
        },
      },
      datalabels: {
        color: "#fff",
        formatter: (value: number) => {
          return `${value}%`; // Menampilkan nilai data sebagai persentase
        },
        font: {
          weight: "bold" as const,
        },
      },
    },
  };

  return (
    <div>
      <h1>Radial Progress with Chart.js</h1>
      <div className="w-[296px]">
        <DoughnutChart data={data} options={options} />
      </div>
    </div>
  );
};

export default HomePage;