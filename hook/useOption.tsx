import { useSession } from "next-auth/react";
import useAxiosAuth from "./useAuthAxios";
import { useQuery } from "@tanstack/react-query";
import { Kategori } from "@/app/siswa/kategori/interface";

const useOptions = () => {
  const axiosAuthClient = useAxiosAuth();
  const { data: session } = useSession();

  const getKategori = async (): Promise<any> => {
    return axiosAuthClient.get("/kategori/list").then((res) => res.data);
  };

  const { data: optionKategori, isFetching } = useQuery(
    ["/kategori/list"],
    () => getKategori(),
    {
      enabled: !!session === true,
      select: (data) => {
        const options = data?.data?.map((item : Kategori) => {
            return {
                label: item.nama_kategori,
                value: item.id
            }
        })
        return options
      }
    }
  );
  return { optionKategori };
};
export default useOptions;
