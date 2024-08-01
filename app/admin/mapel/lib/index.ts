import { useToast } from "@/hook";
import useAxiosAuth from "@/hook/useAuthAxios";
import { axiosClient } from "@/lib/axiosClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MapelCreatePayload, MapelListResponse } from "../interface";
import Swal from "sweetalert2";

const useMapelModule = () => {
  const axiosAuthClient = useAxiosAuth();
  const queryClient = useQueryClient();
  const { toastError, toastSuccess, toastWarning } = useToast();

  const getMapelSubjectList = async (): Promise<MapelListResponse> => {
    return axiosAuthClient.get("/mapel/list").then((res) => res.data);
  };
  const useMapelSubjectList = () => {
    const { data, isFetching, isLoading } = useQuery(
      ["/mapel/list"],
      () => getMapelSubjectList(),
      {
        keepPreviousData: true,

        select: (response) => response,
      }
    );

    return { data, isFetching, isLoading };
  };

  const useCreateMapel = () => {
    const { mutate, isLoading } = useMutation(
      (payload: MapelCreatePayload) => {
        return axiosClient.post("/mapel/create", payload);
      },
      {
        onSuccess: (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        onError: (error) => {
          alert("ok");
        },
      }
    );
    return { mutate, isLoading };
  };

  const useDeleteMapel = () => {
    const {mutate, isLoading} = useMutation(
      (id:number) => {
        return axiosClient.delete(`/mapel/delete/${id}`);
      },
      {
        onSuccess: (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1000,
          });
          queryClient.invalidateQueries(["/mapel/list"]);
        },
        onError: (error: any) => {
          if (error.response.status == 422) {
            Swal.fire({
              position: "top",
              icon: "warning",
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1000,
            });
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Ada Kesalahan",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        },
      }
    );

    return {mutate, isLoading}
  };

  return { useMapelSubjectList, useCreateMapel, useDeleteMapel };
};

export default useMapelModule