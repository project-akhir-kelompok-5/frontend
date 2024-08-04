// components/ScheduleTable.tsx
"use client";
import React from "react";
import useCrudModule, { PaginationParams } from "@/hook/useCRUD";
import { JadwalListResponse } from "@/app/(jadwal)/interface";

const TableJadwal: React.FC = () => {
  const defaultParams: PaginationParams = {
    page: 1,
    pageSize: 10,
    nama: 0
  };

  const { useList } = useCrudModule();
  const { data: dataJadwal, isFetching } = useList<JadwalListResponse>(
    "jadwal/list",
    defaultParams
  );

  return (
    <div className="mt-3 font-quick w-full">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="flex flex-row justify-between w-full bg-blue-800 text-white font-semibold">
              <div className="py-2 px-6">Clock</div>
              <div className="py-2 px-6">X RPL</div>
              <div className="py-2 px-6">X TKJ</div>
              <div className="py-2 px-6">XI RPL</div>
              <div className="py-2 px-6">XI TKJ</div>
              <div className="py-2 px-6">XII RPL</div>
              <div className="py-2 px-6">XII TKJ</div>
            </div>
            {/* Table Rows */}
            <div className="flex flex-col">
              {dataJadwal?.data.map((jadwal, jadwalIndex) =>
                jadwal.jam_jadwal.map((jam, jamIndex) => (
                  <div
                    key={`${jadwalIndex}-${jamIndex}`}
                    className="flex border-t flex-row justify-between"
                  >
                    <div className="border-t py-4 px-4 w-40 font-semibold">
                      {`${jam.jam_mulai} - ${jam.jam_selesai}`}
                    </div>
                    {jam.jam_detail.map((detail, detailIndex) => {
                      let additionalClasses = "font-semibold ";
                      if (detailIndex === 0) {
                        additionalClasses = "-ml-[110px] font-semibold";
                      } else if (detailIndex === 5) {
                        additionalClasses = "mr-6 font-semibold";
                      }

                      return (
                        <div
                          key={detail.id}
                          className={`border-t py-4 px-4 ${additionalClasses} ${
                            detail.nama_kelas === "Rest"
                              ? "mr-3 font-semibold"
                              : detail.nama_mapel === "B2"
                              ? "text-blue-600"
                              : ""
                          }`}
                        >
                          ( {detail.subject_code})
                        </div>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-8 py-3 bg-[#023E8A] mt-4">
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
      </div>
    </div>
  );
};

export default TableJadwal;
