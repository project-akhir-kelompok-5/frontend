import { usePagination, useToast } from "@/hook";
import useAxiosAuth from "@/hook/useAuthAxios";
import { axiosClient } from "@/lib/axiosClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateJadwalPayload, JadwalListFilter, JadwalListResponse } from "../interface";
import Swal from "sweetalert2";

const useJadwalModule = () => {
  const axiosAuthClient = useAxiosAuth();
  const queryClient = useQueryClient();
  const { toastError, toastSuccess, toastWarning } = useToast();

  const defaultParams = {
    hari: "senin",
    page: 1,
    pageSize: 10000,
  }

  const getJadwalList = async (params: JadwalListFilter): Promise<JadwalListResponse> => {
    return axiosAuthClient.get("/jadwal/list", {params}).then((res) => res.data);
  };
  const useJadwalList = () => {
    const{
      params,
      setParams,
      handleFilter,
      handleClear,
      handlePageSize,
      handlePage,
      filterParams
    } = usePagination(defaultParams)
    const { data, isFetching, isLoading } = useQuery(
      ["/jadwal/list", [filterParams]],
      () => getJadwalList(filterParams),
      {
        keepPreviousData: true,

        select: (response) => response,
      }
    );

    return { data, isFetching, isLoading };
  };

  const useCreateJadwal = () => {
    const { mutate, isLoading } = useMutation(
      (payload: CreateJadwalPayload) => {
        return axiosAuthClient.post("/jadwal/create", payload);
      },
      {
        onSuccess: (response) => {
          toastSuccess(response.data.message);
        },
        onError: (error) => {
          toastError();
        },
      }
    );
    return { mutate, isLoading };
  };

  return { useJadwalList , useCreateJadwal};
};

export default useJadwalModule