
import React from "react";

export default function TeacherTable() {
  const data = [
    {
      id: 1,
      name: "Ihsan Santana Wibawa",
      subjects: [
        { subject_name: "Fullstack Developer", subject_code: "A1" },
      ],
    },
    {
      id: 2,
      name: "Akbar Rismawan Tanjung",
      subjects: [
        { subject_name: "Database", subject_code: "B1" },
        { subject_name: "Javascript", subject_code: "B2" },
      ],
    },
    {
      id: 3,
      name: "Dedi Hidayatullah",
      subjects: [
        { subject_name: "Indonesian Language", subject_code: "C1" },
      ],
    },
    {
      id: 4,
      name: "Zidni Ilman",
      subjects: [
        { subject_name: "P5", subject_code: "D1" }
      ],
    },
    {
      id: 5,
      name: "Darmansyah Yamin",
      subjects: [
        { subject_name: "P5", subject_code: "D1" },
      ],
    },
  ];

  return (
    <div className="overflow-x-auto my-8">
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
          {data.map((teacher, index) => (
            <React.Fragment key={teacher.id}>
              <tr>
                <td className="border border-black px-4 py-2" rowSpan={teacher.subjects.length || 1}>
                  {index + 1}
                </td>
                <td className="border border-black px-4 py-2" rowSpan={teacher.subjects.length || 1}>
                  {teacher.name}
                </td>
                {teacher.subjects.length > 0 ? (
                  <td className="border border-black px-4 py-2">
                    {teacher.subjects[0].subject_name}
                  </td>
                ) : (
                  <td className="border border-black px-4 py-2 text-center" colSpan={2}>
                    No subjects available
                  </td>
                )}
                {teacher.subjects.length > 0 && (
                  <td className="border border-black px-4 py-2">
                    {teacher.subjects[0].subject_code}
                  </td>
                )}
              </tr>
              {teacher.subjects.slice(1).map((subject, i) => (
                <tr key={i}>
                  <td className="border border-black px-4 py-2">{subject.subject_name}</td>
                  <td className="border border-black px-4 py-2">{subject.subject_code}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
