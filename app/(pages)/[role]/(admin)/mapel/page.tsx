"use client";
import { Table, Th, Thead, Tr, Tbody, Td } from "@/component/Table";
import { useRouter } from "next/navigation";
// import useMapelModule from "../../(mapel)/lib";
import Button from "@/component/Button";
import Link from "next/link";
import useCrudModule from "@/hook/useCRUD";
import { MapelListResponse } from "@/app/lib/(mapel)/interface";
import { useQueryClient } from "@tanstack/react-query";


const Mapel = () => {
  const { useList, useDelete } = useCrudModule();
  const { data, isFetching } = useList<MapelListResponse>("/mapel/list");
  const { mutate, isLoading } = useDelete("/mapel/delete", "/mapel/list");
  const queryClient = useQueryClient();

  const handleDelete = (id:number) => {
    mutate(id);
  }

  return (
    <>
      <section className="container px-4 mx-auto space-y-5">
        <section className="flex items-center justify-between">
          <Link href="/admin/mapel/create">
            <Button colorSchema="red" title="Tambah Mapel" />
          </Link>
        </section>
        <section>
          <Table isFetching={isFetching} isEmpty={data?.data?.length === 0}>
            <Thead>
              <Tr>
                <Th scope="col">
                  <div className="flex items-center gap-x-3">
                    <input
                      type="checkbox"
                      className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                    />
                  </div>
                </Th>
                <Th scope="col">Id mapel</Th>
                <Th scope="col">Mata Pelajaran</Th>
                <Th scope="col">Subject Code</Th>
                <Th scope="col">Status Pelajaran</Th>
                <Th scope="col">Created At</Th>
                <Th scope="col">Updated At</Th>
                <Th scope="col" className="ml-8">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.data.map((item, index) => (
                  <Tr key={index}>
                    <Td>
                      <input
                        type="checkbox"
                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                      />
                    </Td>
                    <Td>
                      <span>{item.id}</span>
                    </Td>
                    <Td>
                      <span>{item.nama_mapel}</span>
                    </Td>

                    <Td>
                      <span>{item.subject_code}</span>
                    </Td>
                    <Td>
                      <span>{item.status_mapel}</span>
                    </Td>
                    <Td>
                      <span>{item.created_at}</span>
                    </Td>
                    <Td>
                      <span>{item.updated_at}</span>
                    </Td>
                    <Td className="flex flex-row justify-between w-36">
                      
                      <p className="text-blue-500 btn ml-8">Edit</p>
                      <p className="text-red-500 btn ml-4" onClick={() => {
                        handleDelete(item.id || 0)
                      }}>Delete</p>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </section>
      </section>
    </>
  );
};

export default Mapel;
