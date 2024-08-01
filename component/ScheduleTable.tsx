// components/ScheduleTable.tsx
import React from "react";

const scheduleData = [
  { time: "07.00 - 08.30", classes: ["A1", "B2", "C1", "A1", "B2", "C1"] },
  { time: "08.30 - 10.30", classes: ["A1", "B2", "C1", "A1", "B2", "C1"] },
  { time: "10.30 - 11.30", classes: ["A1", "B2", "C1", "A1", "B2", "C1"] },
  { time: "11.30 - 13.15", classes: ["", "", "Rest", "", "", ""] },
  { time: "13.15 - 14.00", classes: ["A1", "B2", "C1", "A1", "B2", "C1"] },
  { time: "14.00 - 14.45", classes: ["A1", "B2", "C1", "A1", "B2", "C1"] },
];

const TableJadwal: React.FC = () => {
  return (
    <div className="mt-3 font-quick w-full">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="w-full">
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
              {scheduleData.map((row, index) => (
                <div
                  key={index}
                  className="flex border-t flex-row justify-between"
                >
                  <div className="border-t py-4 px-4 w-40 font-semibold">{row.time}</div>
                  {row.classes.map((cls, clsIndex) => {
                    let additionalClasses = "font-semibold ";
                    if (clsIndex === 0) {
                      additionalClasses = "-ml-[110px] font-semibold";
                    } else if (clsIndex === 5) {
                      additionalClasses = "mr-6 font-semibold";
                    }

                    return (
                      <div
                        key={clsIndex}
                        className={`border-t py-4 px-4 ${additionalClasses} ${
                          cls === "Rest"
                            ? "mr-3 font-semibold"
                            : cls === "B2"
                            ? "text-blue-600"
                            : ""
                        }`}
                      >
                        {cls}
                      </div>
                    );
                  })}
                </div>
              ))}
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