"use client";
import Image from "next/image";
import logo from "/public/images/logo-SMK.png";
import text from "/public/images/text.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import * as yup from "yup";
import useAuthModule from "../lib";
import { LoginPayload } from "../interface/interface";
import { useFormik, Form, FormikProvider, getIn } from "formik";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .default("")
    .email("Gunakan format email")
    .required("Wajib isi"),
  password: yup
    .string()
    .nullable()
    .default("")
    .required("Wajib isi")
    .min(8, "Minimal 8 karakater"),
});

const Login = () => {
  const { data: session } = useSession();
  console.log('session:', session);
  const { useLogin } = useAuthModule();
  const router = useRouter();
  const { mutate, isLoading } = useLogin();
  
  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  const formik = useFormik<LoginPayload>({
    initialValues: loginSchema.getDefault(),
    validationSchema: loginSchema,
    enableReinitialize: true,
    onSubmit: (payload) => {
      mutate(payload);
      console.log('pay: ', payload);
    },
  });

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    formik;
  const [passwordType, setPasswordType] = useState("password");
  const [value, setValues] = useState({ password: "" });

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <section className="w-screen h-screen flex flex-row">
      <div className="h-full w-full px-9 py-9 flex flex-col">
        <picture>
          <Image src={text} alt="text" />
        </picture>
        <div className="my-[215px] flex flex-col mx-7">
          <div className="flex flex-col gap-2 w-[423px]">
            <h1 className="font-quick font-medium text-4xl">Welcome Back</h1>
            <p className="font-quick text-[#6C757D] text-[18px]">
              Hi there nice to see you again, please enter your detail bellow.
            </p>
          </div>
          <FormikProvider value={formik}>
            <Form>
              <div className="w-[494px]">
                <div className="w-full flex flex-col gap-8 mt-20 mb-9">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="font-quick font-medium border-b border-[#6C757D] border-x-0 border-t-0 focus:ring-0 focus:border-[#6C757D]"
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 text-xs">{errors.email}</div>
                  )}

                  <div className="flex flex-col gap-4">
                    <div className=" flex border-b border-[#6C757D] border-x-0 border-t-0 focus:border-[#6C757D]">
                      <input
                        type={passwordType}
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full font-quick font-medium border-none focus:ring-0"
                      />
                      <button type="button" onClick={togglePasswordVisibility}>
                        {passwordType === "password" ? (
                          <EyeIcon className="w-6 cursor-pointer text-gray-300 hover:text-black ease-in-out duration-150" />
                        ) : (
                          <EyeSlashIcon className="w-6 cursor-pointer text-gray-300 hover:text-black ease-in-out duration-150" />
                        )}
                      </button>
                    </div>
                    {touched.password && errors.password && (
                      <div className="text-red-500 text-xs">
                        {errors.password}
                      </div>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-outline w-full">
                  Login
                </button>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
      <div className="bg-bgLogin h-full w-[170rem] bg-cover px-9 py-9 flex justify-end">
        <picture>
          <Image src={logo} alt="logo" width={104} />
        </picture>
      </div>
    </section>
  );
};

export default Login;
