import useAxiosAuth from "@/hook/useAuthAxios";
import { axiosClient } from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginPayload, LoginResponse, LupaPasswordPayload, ResetPasswordPayload, ResetPasswordRespone } from "../interface/interface";
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

  const lupaPassword = async (
    payload: LupaPasswordPayload
  ): Promise<LoginResponse> => {
    return axiosClient
      .post("auth/lupa-password", payload)
      .then((res) => res.data);
  };

  const extractNameFromEmail = (email: string): string => {
    const name = email.split('@')[0];
    return name;
  };
  

  const useLupaPassword = () => {
    const { mutate, isLoading } = useMutation(
      (payload: LupaPasswordPayload) => lupaPassword(payload),
      {
        onSuccess: (res: any) => {
          console.log(res.data);
          const name = extractNameFromEmail(res.data.email);
          console.log(name);
          router.push(`/check/${res.data.token}/${name}`);
        },
        onError: (error: any) => {
          if (error.response.status == 422) {
            toastWarning(error.response.data.message);
          } else {
            toastError();
          }
        },
      }
    );

    return { mutate, isLoading };
  }; 

  const ResetPassword = async (
    payload: ResetPasswordPayload,
    id: number,
    token: any
  ): Promise<ResetPasswordRespone> => {
    return axiosClient
      .post(`auth/reset-password/${id}/${token}`, payload)
      .then((res) => res.data);
  };

  const useResetPassword = (id: number, token: any) => {
    const { mutate, isLoading } = useMutation(
      (payload: ResetPasswordPayload) => ResetPassword(payload, id, token),
      {
        onSuccess: (res) => {
          toastSuccess(res.message);
          router.push("/login");
        },
        onError: (error: any) => {
          if (error.response.status == 422) {
            toastWarning(error.response.data.message);
          } else {
            toastError();
          }
        },
      }
    );

    return { mutate, isLoading };
  };

  return { useLogin, useLupaPassword, useResetPassword };
};

export default useAuthModule;