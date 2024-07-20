import useAxiosAuth from "@/hook/useAuthAxios";
import { axiosClient } from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginPayload, LoginResponse } from "../interface/interface";
import { useToast } from "@/hook";

const useAuthModule = () => {
  const { toastError, toastSuccess, toastWarning } = useToast();

  const axiosAuthClient = useAxiosAuth();
  const { data: session } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();

  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    return axiosClient.post("/auth/login", payload).then((res) => res.data);
  };

  const useLogin = () => {
    const { mutate, isLoading } = useMutation(  
      (payload: LoginPayload) => login(payload),
      {
        onSuccess: async (response) => {
          console.log("response", response);

          toastSuccess(response.message);
          await signIn("credentials", {
            id: response.data.id,
            role: response.data.role,
            nama: response.data.nama,
            NIK: response.data.NIK,
            avatar: response.data.avatar,
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
            redirect: false,
          });

          return router.push("/");
        },
        onError: (error: any) => {
          if (error.response.status === 422) {
            toastWarning(error.response.data.message);
          } else {
            toastError();
          }
        },
      }
    );
    return { mutate, isLoading };
  };

  return { useLogin };
};

export default useAuthModule;
