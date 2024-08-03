// "use client";
// // ... other imports
// import Button from "@/component/Button";
// import InputText from "@/component/InputText";
// import Label from "@/component/Label";
// import Select from "@/component/Select";
// import { useFormik, Form, FormikProvider, FieldArray } from "formik";
// import * as yup from "yup";
// import Link from "next/link";
// import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
// import { CreateJadwalPayload } from "@/app/(jadwal)/interface";
// import React from "react";
// import useOptions from "@/hook/useOption";
// import { Kelas } from "../../../(kelas)/interface";
// import useJadwalModule from "@/app/(jadwal)/lib";
// import useCrudModule from "@/hook/useCRUD";

// // Define KelasList here
// const KelasList = [
//   { nama_kelas: "X RPL", kelas: 1 },
//   { nama_kelas: "X TKJ", kelas: 4 },
//   { nama_kelas: "XI RPL", kelas: 2 },
//   { nama_kelas: "XI TKJ", kelas: 5 },
//   { nama_kelas: "XII RPL", kelas: 3 },
//   { nama_kelas: "XII TKJ", kelas: 6 },
// ];

// const generateKelasOptions = () => {
//   return KelasList.map((klas) => ({
//     label: klas.nama_kelas,
//     value: klas.kelas,
//   }));
// };

// export const createJadwalSchema = yup.object().shape({
//   hari: yup.string().nullable().default("").required("Wajib isi"),
//   jam_jadwal: yup
//     .array()
//     .of(
//       yup.object().shape({
//         jam_mulai: yup.string().nullable().default("").required("Wajib isi"),
//         jam_selesai: yup.string().nullable().default("").required("Wajib isi"),
//         jam_detail: yup
//           .array()
//           .of(
//             yup.object().shape({
//               subject_code: yup.number().required("Wajib isi"),
//               kelas: yup.number().required("Wajib isi"),
//             })
//           )
//           .required("Wajib isi"),
//       })
//     )
//     .required("Wajib isi"),
// });

// const CreateJadwal = () => {
//   const { useCreateJadwal } = useJadwalModule();
//   const { mutate, isLoading } = useCreateJadwal();

//   const { optionSubjectCode, optionHari } = useOptions();
//   const optionKelas = generateKelasOptions(); // Use the generated options

//   const onSubmit = async (values: CreateJadwalPayload) => {
//     mutate(values, {
//       onSuccess: () => {
//         resetForm();
//       },
//     });
//   };

//   const formik = useFormik<CreateJadwalPayload>({
//     initialValues: {
//       hari: "",
//       jam_jadwal: [],
//     },
//     validationSchema: createJadwalSchema,
//     enableReinitialize: true,
//     onSubmit: onSubmit,
//   });

//   const {
//     handleChange,
//     handleSubmit,
//     setFieldValue,
//     handleBlur,
//     values,
//     errors,
//     resetForm,
//   } = formik;

//   console.log(formik.values);

//   return (
//     <section className="flex items-center justify-center w-full h-screen bg-gray-50 p-10 font-quick">
//       <section className="bg-white p-8 rounded-lg shadow-lg w-full">
//         <Link href="/admin/jadwal">
//           <span className="flex items-center mb-4 text-blue-600 hover:underline">
//             <ArrowLongLeftIcon className="h-5 w-5 mr-2" />
//             Kembali
//           </span>
//         </Link>
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//           Tambah Jadwal
//         </h2>

//         <FormikProvider value={formik}>
//           <Form className="space-y-6" onSubmit={handleSubmit}>
//             <section className="flex items-center gap-4 mb-4">
//               <Label htmlFor="hari" title="Hari" />
//               <Select
//                 id="hari"
//                 value={values.hari}
//                 options={optionHari}
//                 name={hari}
//                 onChange={(e) => setFieldValue(hari, e.target.value)}
//               />
//             </section>

//             <FieldArray name="jam_jadwal">
//               {({ push, remove }) => (
//                 <div className="overflow-x-auto">
//                   <div className="h-[600px] overflow-y-auto relative">
//                     {" "}
//                     {/* Adjust the height as needed */}
//                     <table className="min-w-full bg-white whitespace-nowrap">
//                       <thead className="sticky top-0 bg-white">
//                         <tr>
//                           <th className="py-2 px-4 border w-3/12">Jam Mulai</th>
//                           <th className="py-2 px-4 border w-3/12">
//                             Jam Selesai
//                           </th>
//                           <th className="py-2 px-4 border-t border-b w-[20%] text-start">
//                             Subject Code
//                           </th>
//                           <th className="py-2 px-4 border-t border-b w-fit text-start">
//                             Kelas
//                           </th>
//                           <th className="py-2 px-4 border w-5/12">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {values.jam_jadwal.map((jadwal, index) => (
//                           <React.Fragment key={index}>
//                             <tr>
//                               <td className="py-2 px-4 border">
//                                 <InputText
//                                   value={jadwal.jam_mulai}
//                                   placeholder="Jam Mulai"
//                                   name={jam_jadwal[${index}].jam_mulai}
//                                   onChange={handleChange}
//                                   onBlur={handleBlur}
//                                   error={
//                                     formik.errors.jam_jadwal?.[index]?.jam_mulai
//                                   }
//                                   touched={
//                                     formik.touched.jam_jadwal?.[index]
//                                       ?.jam_mulai
//                                   }
//                                 />
//                               </td>
//                               <td className="py-2 px-4 border">
//                                 <InputText
//                                   value={jadwal.jam_selesai}
//                                   placeholder="Jam Selesai"
//                                   name={jam_jadwal[${index}].jam_selesai}
//                                   onChange={handleChange}
//                                   onBlur={handleBlur}
//                                   error={
//                                     formik.errors.jam_jadwal?.[index]
//                                       ?.jam_selesai
//                                   }
//                                   touched={
//                                     formik.touched.jam_jadwal?.[index]
//                                       ?.jam_selesai
//                                   }
//                                 />
//                               </td>
//                               <td colSpan={2} className="border-b ">
//                                 {optionKelas.map((kelasOption) => {
//                                   const detail = jadwal.jam_detail.find(
//                                     (d) => d.kelas === kelasOption.value
//                                   ) || { subject_code: "" };

//                                   return (
//                                     <div
//                                       key={kelasOption.value}
//                                       className="flex gap-4 p-3 flex-row justify-between"
//                                     >
//                                       <Select
//                                         id={subject_code_${index}_${kelasOption.value}}
//                                         value={detail.subject_code}
//                                         options={optionSubjectCode}
//                                         name={jam_jadwal[${index}].jam_detail.${jadwal.jam_detail.findIndex(
//                                           (d) => d.kelas === kelasOption.value
//                                         )}.subject_code}
//                                         onChange={(e) =>
//                                           setFieldValue(
//                                             jam_jadwal[${index}].jam_detail.${jadwal.jam_detail.findIndex(
//                                               (d) =>
//                                                 d.kelas === kelasOption.value
//                                             )}.subject_code,
//                                             e.target.value
//                                           )
//                                         }
//                                       />
//                                       <span>{kelasOption.label}</span>
//                                     </div>
//                                   );
//                                 })}
//                                 {jadwal.jam_detail.length <
//                                   KelasList.length && (
//                                   <button
//                                     className="btn btn-outline btn-sm m-3"
//                                     onClick={() =>
//                                       setFieldValue(
//                                         jam_jadwal[${index}].jam_detail,
//                                         KelasList.map((klas) => ({
//                                           subject_code: "",
//                                           kelas: klas.kelas,
//                                         }))
//                                       )
//                                     }
//                                   >
//                                     Add All Kelas Details
//                                   </button>
//                                 )}
//                               </td>
//                               <td className="py-2 px-4 border">
//                                 <button
//                                   className="btn btn-error btn-outline btn-sm m-3"
//                                   onClick={() => remove(index)}
//                                 >
//                                   Remove jadwal
//                                 </button>
//                               </td>
//                             </tr>
//                           </React.Fragment>
//                         ))}
//                         <tr>
//                           <td
//                             colSpan={5}
//                             className="text-center py-2 px-4 border"
//                           >
//                             <button
//                               className="btn btn-outline btn-sm m-3"
//                               onClick={() =>
//                                 push({
//                                   jam_mulai: "",
//                                   jam_selesai: "",
//                                   jam_detail: KelasList.map((klas) => ({
//                                     subject_code: "",
//                                     kelas: klas.kelas,
//                                   })),
//                                 })
//                               }
//                             >
//                               Add Jam Jadwal
//                             </button>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               )}
//             </FieldArray>

//             <section className="flex justify-end mt-6">
//               <Button
//                 type="submit"
//                 disabled={isLoading}
//                 className="btn btn-primary"
//               >
//                 {isLoading ? "Loading..." : "Submit"}
//               </Button>
//             </section>
//           </Form>
//         </FormikProvider>
//       </section>
//     </section>
//   );
// };

// export default CreateJadwal;