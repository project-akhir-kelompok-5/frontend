import { useToast } from "@/hook";
import useAxiosAuth from "@/hook/useAuthAxios";
import { axiosClient } from "@/lib/axiosClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GuruSubjectListResponse } from "../interface";

const useGuruModule = () => {
  const axiosAuthClient = useAxiosAuth();
  const queryClient = useQueryClient();
  const { toastError, toastSuccess, toastWarning } = useToast();

  const getGuruSubjectList = async (): Promise<GuruSubjectListResponse> => {
    return axiosAuthClient.get("guru/list-subject").then((res) => res.data);
  };
  const useGuruSubjectList = () => {
    const { data, isFetching, isLoading } = useQuery(
      ["guru/list-subject"],
      () => getGuruSubjectList(),
      {
        keepPreviousData: true,

        select: (response) => response,
      }
    );

    return { data, isFetching, isLoading };
  };

  return { useGuruSubjectList };
};

export default useGuruModule